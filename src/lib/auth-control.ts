import { isFirebaseConfigured } from "./firebase";
import {
  getSyncState,
  readAuthHint,
  signInWithGoogle,
  signOutUser,
  startNotesSync,
  subscribeSyncState,
  syncStatusLabel,
  type AuthHint,
  type SyncState
} from "./notes-sync";

let subscribed = false;
let documentCloseBound = false;

function closeMenu(root: HTMLElement): void {
  const trigger = root.querySelector("[data-auth-menu-trigger]");
  const panel = root.querySelector("[data-auth-menu-panel]");
  if (trigger instanceof HTMLButtonElement) {
    trigger.setAttribute("aria-expanded", "false");
  }
  if (panel instanceof HTMLElement) {
    panel.hidden = true;
  }
}

function closeAllMenus(except?: HTMLElement): void {
  document.querySelectorAll("[data-auth-control]").forEach((node) => {
    if (!(node instanceof HTMLElement) || node === except) return;
    closeMenu(node);
  });
}

function setMenuOpen(root: HTMLElement, open: boolean): void {
  const trigger = root.querySelector("[data-auth-menu-trigger]");
  const panel = root.querySelector("[data-auth-menu-panel]");
  if (!(trigger instanceof HTMLButtonElement) || !(panel instanceof HTMLElement)) return;

  if (open) {
    closeAllMenus(root);
    trigger.setAttribute("aria-expanded", "true");
    panel.hidden = false;
  } else {
    closeMenu(root);
  }
}

function initialFromLabel(label: string): string {
  const trimmed = label.trim();
  if (!trimmed) return "?";
  return trimmed.charAt(0).toUpperCase();
}

function applyAvatar(
  root: HTMLElement,
  label: string,
  photoURL: string | null | undefined
): void {
  const avatar = root.querySelector("[data-auth-avatar]");
  const avatarFallback = root.querySelector("[data-auth-avatar-fallback]");
  if (!(avatar instanceof HTMLImageElement) || !(avatarFallback instanceof HTMLElement)) {
    return;
  }

  if (photoURL) {
    avatar.src = photoURL;
    avatar.alt = "";
    avatar.hidden = false;
    avatarFallback.hidden = true;
  } else {
    avatar.removeAttribute("src");
    avatar.hidden = true;
    avatarFallback.textContent = initialFromLabel(label);
    avatarFallback.hidden = false;
  }
}

function showSignedInShell(root: HTMLElement, label: string, photoURL: string | null): void {
  const signInButton = root.querySelector("[data-auth-signin]");
  const menu = root.querySelector("[data-auth-menu]");
  const userEl = root.querySelector("[data-auth-user]");
  const emailEl = root.querySelector("[data-auth-menu-email]");
  const trigger = root.querySelector("[data-auth-menu-trigger]");

  if (signInButton instanceof HTMLElement) signInButton.hidden = true;
  if (menu instanceof HTMLElement) menu.hidden = false;

  if (userEl instanceof HTMLElement) {
    userEl.textContent = label;
    userEl.hidden = true;
  }

  if (trigger instanceof HTMLButtonElement) {
    trigger.setAttribute("aria-label", `Account menu for ${label}`);
    trigger.title = label;
  }

  if (emailEl instanceof HTMLElement) {
    emailEl.textContent = label;
    emailEl.hidden = !label;
  }

  applyAvatar(root, label, photoURL);
}

function renderPendingHint(root: HTMLElement, hint: AuthHint): void {
  root.hidden = false;
  const statusEl = root.querySelector("[data-auth-status]");
  if (statusEl instanceof HTMLElement) statusEl.hidden = true;
  showSignedInShell(root, hint.label, hint.photoURL);
  const signOutButton = root.querySelector("[data-auth-signout]");
  if (signOutButton instanceof HTMLButtonElement) {
    signOutButton.disabled = true;
  }
}

function renderAuthControl(root: HTMLElement, state: SyncState): void {
  const signInButton = root.querySelector("[data-auth-signin]");
  const menu = root.querySelector("[data-auth-menu]");
  const emailEl = root.querySelector("[data-auth-menu-email]");
  const statusEl = root.querySelector("[data-auth-status]");
  const signOutButton = root.querySelector("[data-auth-signout]");
  const showStatus = root.dataset.showStatus === "true";

  if (!isFirebaseConfigured()) {
    root.hidden = true;
    return;
  }

  if (!state.authReady) {
    const hint = readAuthHint();
    if (hint) {
      renderPendingHint(root, hint);
      return;
    }
    root.hidden = true;
    return;
  }

  root.hidden = false;

  if (signOutButton instanceof HTMLButtonElement) {
    signOutButton.disabled = false;
  }

  if (statusEl instanceof HTMLElement) {
    if (showStatus && state.status === "error") {
      const label = syncStatusLabel(state);
      statusEl.textContent = label;
      statusEl.hidden = !label;
    } else {
      statusEl.textContent = "";
      statusEl.hidden = true;
    }
  }

  if (!state.user) {
    closeMenu(root);
    if (signInButton instanceof HTMLElement) signInButton.hidden = false;
    if (menu instanceof HTMLElement) menu.hidden = true;
    return;
  }

  const label = state.user.displayName || state.user.email || "Account";
  showSignedInShell(root, label, state.user.photoURL);

  if (emailEl instanceof HTMLElement) {
    const meta = state.user.email || state.user.displayName || "";
    if (meta) {
      emailEl.textContent = meta;
      emailEl.hidden = false;
    } else {
      emailEl.textContent = "";
      emailEl.hidden = true;
    }
  }
}

function bindRoot(root: HTMLElement): void {
  if (root.dataset.authBound === "true") return;
  root.dataset.authBound = "true";

  const signInButton = root.querySelector("[data-auth-signin]");
  const trigger = root.querySelector("[data-auth-menu-trigger]");
  const signOutButton = root.querySelector("[data-auth-signout]");
  const avatar = root.querySelector("[data-auth-avatar]");

  if (signInButton instanceof HTMLButtonElement) {
    signInButton.addEventListener("click", async () => {
      await signInWithGoogle();
    });
  }

  if (trigger instanceof HTMLButtonElement) {
    trigger.addEventListener("click", () => {
      const open = trigger.getAttribute("aria-expanded") === "true";
      setMenuOpen(root, !open);
    });
  }

  if (signOutButton instanceof HTMLButtonElement) {
    signOutButton.addEventListener("click", async () => {
      if (signOutButton.disabled) return;
      closeMenu(root);
      await signOutUser();
    });
  }

  if (avatar instanceof HTMLImageElement) {
    avatar.addEventListener("error", () => {
      avatar.hidden = true;
      const fallback = root.querySelector("[data-auth-avatar-fallback]");
      const userEl = root.querySelector("[data-auth-user]");
      if (fallback instanceof HTMLElement) {
        const label = userEl?.textContent?.trim() || "?";
        fallback.textContent = initialFromLabel(label);
        fallback.hidden = false;
      }
    });
  }

  renderAuthControl(root, getSyncState());
}

function ensureDocumentCloseHandler(): void {
  if (documentCloseBound) return;
  documentCloseBound = true;

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;

    document.querySelectorAll("[data-auth-control]").forEach((node) => {
      if (!(node instanceof HTMLElement)) return;
      if (!node.contains(target)) closeMenu(node);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeAllMenus();
  });
}

/** Bind every `[data-auth-control]` on the page. Safe to call multiple times. */
export function bindAuthControls(): void {
  startNotesSync();
  ensureDocumentCloseHandler();

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
