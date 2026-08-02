import { isFirebaseConfigured } from "./firebase";
import {
  getSyncState,
  signInWithGoogle,
  signOutUser,
  startNotesSync,
  subscribeSyncState,
  syncStatusLabel,
  type SyncState
} from "./notes-sync";

let subscribed = false;

function renderAuthControl(root: HTMLElement, state: SyncState): void {
  const button = root.querySelector("[data-auth-button]");
  const userEl = root.querySelector("[data-auth-user]");
  const statusEl = root.querySelector("[data-auth-status]");
  const showStatus = root.dataset.showStatus === "true";

  if (!isFirebaseConfigured()) {
    root.hidden = true;
    return;
  }

  root.hidden = false;

  if (button instanceof HTMLButtonElement) {
    if (state.user) {
      button.textContent = "Sign out";
      button.dataset.authAction = "sign-out";
      button.setAttribute("aria-label", "Sign out");
    } else {
      button.textContent = "Sign in with Google";
      button.dataset.authAction = "sign-in";
      button.setAttribute("aria-label", "Sign in with Google");
    }
  }

  if (userEl instanceof HTMLElement) {
    if (state.user) {
      const label = state.user.displayName || state.user.email || "Signed in";
      userEl.textContent = label;
      userEl.hidden = false;
      userEl.title = label;
    } else {
      userEl.textContent = "";
      userEl.hidden = true;
      userEl.removeAttribute("title");
    }
  }

  if (statusEl instanceof HTMLElement) {
    if (showStatus) {
      const label = syncStatusLabel(state);
      statusEl.textContent = label;
      statusEl.hidden = !label;
    } else {
      statusEl.hidden = true;
    }
  }
}

function bindRoot(root: HTMLElement): void {
  if (root.dataset.authBound === "true") return;
  root.dataset.authBound = "true";

  const button = root.querySelector("[data-auth-button]");
  if (button instanceof HTMLButtonElement) {
    button.addEventListener("click", async () => {
      if (button.dataset.authAction === "sign-out") {
        await signOutUser();
      } else {
        await signInWithGoogle();
      }
    });
  }

  renderAuthControl(root, getSyncState());
}

/** Bind every `[data-auth-control]` on the page. Safe to call multiple times. */
export function bindAuthControls(): void {
  startNotesSync();

  document.querySelectorAll("[data-auth-control]").forEach((node) => {
    if (node instanceof HTMLElement) bindRoot(node);
  });

  if (!subscribed) {
    subscribed = true;
    subscribeSyncState((state) => {
      document.querySelectorAll("[data-auth-control]").forEach((node) => {
        if (node instanceof HTMLElement) renderAuthControl(node, state);
      });
    });
  }
}
