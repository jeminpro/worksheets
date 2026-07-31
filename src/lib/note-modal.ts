import {
  getWorkbookNote,
  setWorkbookNote
} from "./workbook-notes";

const DIALOG_ID = "worksheets-note-dialog";
const STYLE_ID = "worksheets-note-dialog-style-v4";

export type NoteModalOptions = {
  workbookId: string;
  workbookTitle?: string;
};

export type NoteButtonOptions = {
  workbookId: string;
  workbookTitle?: string;
  onChange?: (note: string | undefined) => void;
};

function ensureStyles(): void {
  for (const id of [
    STYLE_ID,
    "worksheets-note-dialog-style",
    "worksheets-note-dialog-style-v2",
    "worksheets-note-dialog-style-v3"
  ]) {
    document.getElementById(id)?.remove();
  }

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    #${DIALOG_ID} {
      position: fixed;
      top: 1.25rem;
      left: 1.25rem;
      width: min(600px, calc(100vw - 2.5rem));
      height: min(600px, calc(100dvh - 2.5rem));
      max-width: calc(100vw - 2.5rem);
      max-height: calc(100dvh - 2.5rem);
      margin: 0;
      padding: 0;
      border: 1px solid rgb(214 175 58 / 35%);
      border-radius: 14px;
      color: var(--ink, #17324d);
      background: #fff8dc;
      box-shadow:
        0 1px 0 rgb(255 255 255 / 70%) inset,
        0 18px 40px rgb(23 50 77 / 16%);
      font-family: "Source Sans 3", "Trebuchet MS", "Segoe UI", sans-serif;
      flex-direction: column;
      box-sizing: border-box;
      overflow: hidden;
    }

    #${DIALOG_ID}[open] {
      display: flex;
    }

    #${DIALOG_ID}::backdrop {
      background: rgb(23 50 77 / 42%);
      cursor: pointer;
    }

    #${DIALOG_ID} .note-modal-close {
      position: absolute;
      top: 12px;
      right: 12px;
      z-index: 2;
      display: grid;
      width: 2rem;
      height: 2rem;
      place-items: center;
      margin: 0;
      padding: 0;
      border: 1px solid rgb(43 131 184 / 18%);
      border-radius: 999px;
      color: var(--ink, #17324d);
      background: rgb(255 255 255 / 75%);
      font: 700 1.15rem/1 "Source Sans 3", "Trebuchet MS", "Segoe UI", sans-serif;
      cursor: pointer;
      transition:
        background 0.15s ease,
        border-color 0.15s ease;
    }

    #${DIALOG_ID} .note-modal-close:hover,
    #${DIALOG_ID} .note-modal-close:focus-visible {
      background: #fff;
      border-color: var(--blue-strong, #2b83b8);
      outline: none;
    }

    #${DIALOG_ID} .note-modal-close:focus-visible {
      outline: 2px solid var(--blue-strong, #2b83b8);
      outline-offset: 2px;
    }

    #${DIALOG_ID} .note-modal-body {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      gap: 12px;
      min-height: 0;
      padding: 22px 48px 22px 22px;
    }

    #${DIALOG_ID} .note-modal-title {
      margin: 0;
      flex: 0 0 auto;
      padding-right: 0.5rem;
      font-family: Fraunces, Georgia, serif;
      font-size: 1.2rem;
      font-weight: 650;
      letter-spacing: -0.02em;
      line-height: 1.25;
      color: var(--ink, #17324d);
    }

    #${DIALOG_ID} .note-modal-textarea {
      width: 100%;
      flex: 1 1 auto;
      min-height: 0;
      padding: 8px 2px;
      border: 0;
      border-radius: 0;
      color: var(--ink, #17324d);
      background: transparent;
      font: 600 1.02rem/1.55 "Source Sans 3", "Trebuchet MS", "Segoe UI", sans-serif;
      resize: none;
      box-sizing: border-box;
    }

    #${DIALOG_ID} .note-modal-textarea:focus-visible {
      outline: none;
    }

    #${DIALOG_ID} .note-modal-textarea::placeholder {
      color: var(--muted, #5e7183);
    }

    @media print {
      #${DIALOG_ID},
      #${DIALOG_ID}::backdrop {
        display: none !important;
      }
    }
  `;
  document.head.appendChild(style);
}

function ensureDialog(): HTMLDialogElement {
  ensureStyles();

  const existing = document.getElementById(DIALOG_ID);
  if (existing) existing.remove();

  const dialog = document.createElement("dialog");
  dialog.id = DIALOG_ID;
  dialog.setAttribute("aria-labelledby", "worksheets-note-title");
  dialog.innerHTML = `
    <button class="note-modal-close" type="button" aria-label="Close note">×</button>
    <div class="note-modal-body">
      <h2 class="note-modal-title" id="worksheets-note-title"></h2>
      <textarea
        class="note-modal-textarea"
        placeholder="all correct, need improvement…"
      ></textarea>
    </div>
  `;
  document.body.appendChild(dialog);
  return dialog;
}

function isOutsideDialog(dialog: HTMLDialogElement, event: MouseEvent): boolean {
  if (event.target === dialog) return true;
  const rect = dialog.getBoundingClientRect();
  return (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  );
}

export function updateNoteButton(button: HTMLElement, note: string | undefined): void {
  const text = note?.trim() ?? "";
  const glyph = text
    ? `<svg class="note-glyph" width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M4.5 1.5A1.5 1.5 0 0 0 3 3v10a1.5 1.5 0 0 0 1.5 1.5h7A1.5 1.5 0 0 0 13 13V5.207a1.5 1.5 0 0 0-.44-1.06L10.853 1.94A1.5 1.5 0 0 0 9.793 1.5H4.5Zm5.293 1.06L12.44 5.207H10.5a.5.5 0 0 1-.5-.5V2.56ZM5 7.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 7.25Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"/></svg>`
    : `<svg class="note-glyph" width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M8 3.25a.75.75 0 0 1 .75.75v3.25H12a.75.75 0 0 1 0 1.5H8.75V12a.75.75 0 0 1-1.5 0V8.75H4a.75.75 0 0 1 0-1.5h3.25V4A.75.75 0 0 1 8 3.25Z"/></svg>`;

  button.innerHTML = `${glyph}<span class="note-label"></span>`;
  const label = button.querySelector(".note-label");
  if (label instanceof HTMLElement) {
    label.textContent = text || "Add note";
  }

  if (text) {
    button.dataset.hasNote = "true";
    button.setAttribute("aria-label", "Edit note");
    button.title = text;
  } else {
    button.dataset.hasNote = "false";
    button.setAttribute("aria-label", "Add note");
    button.title = "Add a note for this workbook";
  }
}

export function openNoteModal(options: NoteModalOptions): Promise<string | undefined | false> {
  const { workbookId, workbookTitle } = options;
  const dialog = ensureDialog();
  const titleEl = dialog.querySelector(".note-modal-title");
  const textarea = dialog.querySelector(".note-modal-textarea");
  const closeButton = dialog.querySelector(".note-modal-close");

  if (
    !(titleEl instanceof HTMLElement) ||
    !(textarea instanceof HTMLTextAreaElement) ||
    !(closeButton instanceof HTMLButtonElement)
  ) {
    return Promise.resolve(false);
  }

  const existing = getWorkbookNote(workbookId) ?? "";
  titleEl.textContent = workbookTitle ? `Note · ${workbookTitle}` : "Note";
  textarea.value = existing;

  return new Promise((resolve) => {
    let saveTimer: ReturnType<typeof setTimeout> | undefined;
    let settled = false;

    const persist = (): string | undefined => setWorkbookNote(workbookId, textarea.value);

    const finish = () => {
      if (settled) return;
      settled = true;
      if (saveTimer !== undefined) clearTimeout(saveTimer);
      const result = persist();
      dialog.removeEventListener("cancel", onCancel);
      dialog.removeEventListener("click", onDialogClick);
      closeButton.removeEventListener("click", onCloseClick);
      textarea.removeEventListener("input", onInput);
      textarea.removeEventListener("keydown", onKeyDown);
      if (dialog.open) dialog.close();
      resolve(result);
    };

    const onCancel = (event: Event) => {
      event.preventDefault();
      finish();
    };
    const onCloseClick = (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      finish();
    };
    const onDialogClick = (event: MouseEvent) => {
      if (isOutsideDialog(dialog, event)) finish();
    };
    const onInput = () => {
      if (saveTimer !== undefined) clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        persist();
      }, 250);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || event.altKey || event.ctrlKey || event.metaKey) return;
      event.preventDefault();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      textarea.setRangeText("\t", start, end, "end");
      onInput();
    };

    dialog.addEventListener("cancel", onCancel);
    dialog.addEventListener("click", onDialogClick);
    closeButton.addEventListener("click", onCloseClick);
    textarea.addEventListener("input", onInput);
    textarea.addEventListener("keydown", onKeyDown);
    dialog.showModal();
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  });
}

export function bindNoteButton(
  button: HTMLElement,
  options: NoteButtonOptions
): void {
  const { workbookId, workbookTitle, onChange } = options;
  updateNoteButton(button, getWorkbookNote(workbookId));

  button.addEventListener("click", async () => {
    const result = await openNoteModal({ workbookId, workbookTitle });
    if (result === false) return;
    updateNoteButton(button, result);
    onChange?.(result);
  });
}
