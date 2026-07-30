const DIALOG_ID = "worksheets-confirm-dialog";
const STYLE_ID = "worksheets-confirm-dialog-style";

export type ConfirmModalOptions = {
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
};

function ensureStyles(): void {
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    #${DIALOG_ID} {
      width: min(22rem, calc(100vw - 2rem));
      margin: auto;
      padding: 0;
      border: 1px solid rgb(43 131 184 / 22%);
      border-radius: 16px;
      color: var(--ink, #17324d);
      background: var(--paper, #ffffff);
      box-shadow: 0 18px 48px rgb(23 50 77 / 18%);
      font-family: "Source Sans 3", "Trebuchet MS", "Segoe UI", sans-serif;
    }

    #${DIALOG_ID}::backdrop {
      background: rgb(23 50 77 / 42%);
    }

    #${DIALOG_ID} .confirm-modal-body {
      display: grid;
      gap: 10px;
      padding: 22px 22px 8px;
    }

    #${DIALOG_ID} .confirm-modal-title {
      margin: 0;
      font-family: Fraunces, Georgia, serif;
      font-size: 1.15rem;
      font-weight: 650;
      letter-spacing: -0.02em;
      line-height: 1.25;
    }

    #${DIALOG_ID} .confirm-modal-message {
      margin: 0;
      color: var(--muted, #5e7183);
      font-size: 0.95rem;
      font-weight: 600;
      line-height: 1.45;
    }

    #${DIALOG_ID} .confirm-modal-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: flex-end;
      padding: 14px 18px 18px;
    }

    #${DIALOG_ID} .confirm-modal-actions button {
      min-width: 5.5rem;
      padding: 9px 14px;
      border: 1px solid transparent;
      border-radius: 999px;
      font: 700 13px/1 "Source Sans 3", "Trebuchet MS", "Segoe UI", sans-serif;
      letter-spacing: 0.01em;
      cursor: pointer;
    }

    #${DIALOG_ID} .confirm-modal-cancel {
      color: var(--ink, #17324d);
      background: var(--paper, #ffffff);
      border-color: rgb(43 131 184 / 22%);
    }

    #${DIALOG_ID} .confirm-modal-cancel:hover,
    #${DIALOG_ID} .confirm-modal-cancel:focus-visible {
      border-color: var(--blue-strong, #2b83b8);
      background: var(--blue, #dff2ff);
      outline: none;
    }

    #${DIALOG_ID} .confirm-modal-confirm {
      color: #fff;
      background: linear-gradient(145deg, #3a96c9 0%, var(--blue-strong, #2b83b8) 100%);
      box-shadow: 0 6px 14px rgb(43 131 184 / 28%);
    }

    #${DIALOG_ID} .confirm-modal-confirm:hover,
    #${DIALOG_ID} .confirm-modal-confirm:focus-visible {
      background: linear-gradient(145deg, #48a3d4 0%, #3279a9 100%);
      outline: none;
    }

    #${DIALOG_ID} .confirm-modal-actions button:focus-visible {
      outline: 2px solid var(--blue-strong, #2b83b8);
      outline-offset: 2px;
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
  if (existing instanceof HTMLDialogElement) return existing;

  const dialog = document.createElement("dialog");
  dialog.id = DIALOG_ID;
  dialog.setAttribute("aria-labelledby", "worksheets-confirm-title");
  dialog.innerHTML = `
    <div class="confirm-modal-body">
      <h2 class="confirm-modal-title" id="worksheets-confirm-title"></h2>
      <p class="confirm-modal-message"></p>
    </div>
    <div class="confirm-modal-actions">
      <button class="confirm-modal-cancel" type="button" value="cancel"></button>
      <button class="confirm-modal-confirm" type="button" value="confirm"></button>
    </div>
  `;
  document.body.appendChild(dialog);
  return dialog;
}

export function confirmModal(options: ConfirmModalOptions): Promise<boolean> {
  const {
    title = "Confirm",
    message,
    confirmLabel = "Remove",
    cancelLabel = "Cancel"
  } = options;

  const dialog = ensureDialog();
  const titleEl = dialog.querySelector(".confirm-modal-title");
  const messageEl = dialog.querySelector(".confirm-modal-message");
  const cancelButton = dialog.querySelector(".confirm-modal-cancel");
  const confirmButton = dialog.querySelector(".confirm-modal-confirm");

  if (
    !(titleEl instanceof HTMLElement) ||
    !(messageEl instanceof HTMLElement) ||
    !(cancelButton instanceof HTMLButtonElement) ||
    !(confirmButton instanceof HTMLButtonElement)
  ) {
    return Promise.resolve(false);
  }

  titleEl.textContent = title;
  messageEl.textContent = message;
  cancelButton.textContent = cancelLabel;
  confirmButton.textContent = confirmLabel;

  return new Promise((resolve) => {
    if (dialog.open) {
      resolve(false);
      return;
    }

    const finish = (confirmed: boolean) => {
      dialog.removeEventListener("cancel", onCancel);
      dialog.removeEventListener("click", onBackdropClick);
      cancelButton.removeEventListener("click", onCancelClick);
      confirmButton.removeEventListener("click", onConfirmClick);
      if (dialog.open) dialog.close();
      resolve(confirmed);
    };

    const onCancel = (event: Event) => {
      event.preventDefault();
      finish(false);
    };
    const onCancelClick = () => finish(false);
    const onConfirmClick = () => finish(true);
    const onBackdropClick = (event: MouseEvent) => {
      if (event.target === dialog) finish(false);
    };

    dialog.addEventListener("cancel", onCancel);
    dialog.addEventListener("click", onBackdropClick);
    cancelButton.addEventListener("click", onCancelClick);
    confirmButton.addEventListener("click", onConfirmClick);
    dialog.showModal();
    cancelButton.focus();
  });
}
