import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User
} from "firebase/auth";
import {
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  type Unsubscribe as FirestoreUnsubscribe
} from "firebase/firestore";
import { getFirebaseAuth, getFirestoreDb, isFirebaseConfigured } from "./firebase";
import {
  NOTES_STORAGE_VERSION,
  getNotesEnvelope,
  mergeNotes,
  writeNotesEnvelope,
  type NotesEnvelope,
  type WorkbookNotes
} from "./workbook-notes";

export type SyncStatus = "local-only" | "signed-out" | "syncing" | "synced" | "error";

export type SyncState = {
  status: SyncStatus;
  user: User | null;
  error: string | null;
};

type SyncListener = (state: SyncState) => void;
type NotesChangeListener = (notes: WorkbookNotes) => void;

const PUSH_DEBOUNCE_MS = 400;

let started = false;
let snapshotUnsub: FirestoreUnsubscribe | undefined;
let pushTimer: ReturnType<typeof setTimeout> | undefined;
let applyingRemote = false;
let currentUser: User | null = null;
let status: SyncStatus = "local-only";
let lastError: string | null = null;
let mergeInFlight: Promise<void> | null = null;

const stateListeners = new Set<SyncListener>();
const notesListeners = new Set<NotesChangeListener>();

function setState(next: Partial<SyncState>): void {
  if (next.status !== undefined) status = next.status;
  if (next.user !== undefined) currentUser = next.user;
  if (next.error !== undefined) lastError = next.error;
  const snapshot: SyncState = {
    status,
    user: currentUser,
    error: lastError
  };
  for (const listener of stateListeners) listener(snapshot);
}

function notifyNotesChanged(): void {
  const notes = getNotesEnvelope().notes;
  for (const listener of notesListeners) listener(notes);
}

function userDocRef(uid: string) {
  const db = getFirestoreDb();
  if (!db) return undefined;
  return doc(db, "users", uid);
}

function parseCloudEnvelope(data: Record<string, unknown> | undefined): NotesEnvelope | null {
  if (!data) return null;
  const notesRaw = data.notes;
  if (!notesRaw || typeof notesRaw !== "object" || Array.isArray(notesRaw)) return null;

  const notes: WorkbookNotes = {};
  for (const [id, entry] of Object.entries(notesRaw)) {
    if (typeof entry !== "string") continue;
    const trimmed = entry.trim();
    if (trimmed) notes[id] = trimmed;
  }

  const updatedAt =
    typeof data.updatedAt === "string" && data.updatedAt
      ? data.updatedAt
      : new Date(0).toISOString();

  return {
    version: NOTES_STORAGE_VERSION,
    updatedAt,
    notes
  };
}

async function pullCloud(uid: string): Promise<NotesEnvelope | null> {
  const ref = userDocRef(uid);
  if (!ref) return null;
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return parseCloudEnvelope(snap.data() as Record<string, unknown>);
}

async function pushEnvelope(uid: string, envelope: NotesEnvelope): Promise<void> {
  const ref = userDocRef(uid);
  if (!ref) return;
  await setDoc(ref, {
    notes: envelope.notes,
    updatedAt: envelope.updatedAt
  });
}

async function mergeOnSignIn(user: User): Promise<void> {
  setState({ status: "syncing", user, error: null });
  try {
    const local = getNotesEnvelope();
    const cloud = await pullCloud(user.uid);
    const merged = cloud ? mergeNotes(local, cloud) : local;
    applyingRemote = true;
    writeNotesEnvelope(merged);
    applyingRemote = false;
    await pushEnvelope(user.uid, merged);
    notifyNotesChanged();
    setState({ status: "synced", error: null });
  } catch (error) {
    applyingRemote = false;
    const message = error instanceof Error ? error.message : "Sync failed";
    setState({ status: "error", error: message });
  }
}

function stopSnapshot(): void {
  snapshotUnsub?.();
  snapshotUnsub = undefined;
}

function startSnapshot(uid: string): void {
  stopSnapshot();
  const ref = userDocRef(uid);
  if (!ref) return;

  snapshotUnsub = onSnapshot(
    ref,
    (snap) => {
      if (!snap.exists()) return;
      const remote = parseCloudEnvelope(snap.data() as Record<string, unknown>);
      if (!remote) return;

      const local = getNotesEnvelope();
      if (remote.updatedAt <= local.updatedAt) {
        setState({ status: "synced", error: null });
        return;
      }

      applyingRemote = true;
      writeNotesEnvelope(remote);
      applyingRemote = false;
      notifyNotesChanged();
      setState({ status: "synced", error: null });
    },
    (error) => {
      setState({ status: "error", error: error.message });
    }
  );
}

function schedulePush(): void {
  if (!currentUser || applyingRemote) return;
  if (pushTimer !== undefined) clearTimeout(pushTimer);
  pushTimer = setTimeout(() => {
    void flushPush();
  }, PUSH_DEBOUNCE_MS);
}

async function flushPush(): Promise<void> {
  if (pushTimer !== undefined) {
    clearTimeout(pushTimer);
    pushTimer = undefined;
  }
  const user = currentUser;
  if (!user || applyingRemote) return;

  setState({ status: "syncing", error: null });
  try {
    await pushEnvelope(user.uid, getNotesEnvelope());
    setState({ status: "synced", error: null });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Sync failed";
    setState({ status: "error", error: message });
  }
}

/**
 * Start auth + sync listeners. Safe to call multiple times (idempotent).
 * When Firebase is not configured, stays in local-only mode.
 */
export function startNotesSync(): void {
  if (started) return;
  started = true;

  if (!isFirebaseConfigured()) {
    setState({ status: "local-only", user: null, error: null });
    return;
  }

  const auth = getFirebaseAuth();
  if (!auth) {
    setState({ status: "local-only", user: null, error: null });
    return;
  }

  setState({ status: "signed-out", user: null, error: null });

  onAuthStateChanged(auth, (user) => {
    stopSnapshot();
    if (pushTimer !== undefined) {
      clearTimeout(pushTimer);
      pushTimer = undefined;
    }

    if (!user) {
      currentUser = null;
      setState({ status: "signed-out", user: null, error: null });
      return;
    }

    currentUser = user;
    mergeInFlight = mergeOnSignIn(user).finally(() => {
      mergeInFlight = null;
      if (currentUser?.uid === user.uid) startSnapshot(user.uid);
    });
  });
}

/** Call after any local notes mutation so signed-in users push to Firestore. */
export function queueNotesPush(): void {
  startNotesSync();
  schedulePush();
}

export async function signInWithGoogle(): Promise<void> {
  startNotesSync();
  if (!isFirebaseConfigured()) {
    setState({ status: "local-only", error: "Firebase is not configured." });
    return;
  }

  const auth = getFirebaseAuth();
  if (!auth) return;

  setState({ status: "syncing", error: null });
  try {
    await signInWithPopup(auth, new GoogleAuthProvider());
    // merge happens in onAuthStateChanged
    if (mergeInFlight) await mergeInFlight;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Sign-in failed";
    setState({ status: "error", error: message });
  }
}

export async function signOutUser(): Promise<void> {
  startNotesSync();
  const auth = getFirebaseAuth();
  if (!auth) return;
  stopSnapshot();
  if (pushTimer !== undefined) {
    clearTimeout(pushTimer);
    pushTimer = undefined;
  }
  await signOut(auth);
}

export function getSyncState(): SyncState {
  return { status, user: currentUser, error: lastError };
}

export function subscribeSyncState(listener: SyncListener): () => void {
  stateListeners.add(listener);
  listener(getSyncState());
  return () => {
    stateListeners.delete(listener);
  };
}

export function subscribeNotesChanges(listener: NotesChangeListener): () => void {
  notesListeners.add(listener);
  return () => {
    notesListeners.delete(listener);
  };
}

export function syncStatusLabel(state: SyncState): string {
  switch (state.status) {
    case "local-only":
      return "Local only";
    case "signed-out":
      return "Sign in to sync";
    case "syncing":
      return "Syncing…";
    case "synced":
      return "Synced";
    case "error":
      return state.error ? `Sync error: ${state.error}` : "Sync error";
  }
}
