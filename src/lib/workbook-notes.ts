const STORAGE_KEY = "worksheets-notes";

/** Reserved note id for free-form notes not tied to a workbook topic. */
export const GENERAL_NOTE_ID = "general";

export const NOTES_EXPORT_VERSION = 1 as const;

export type WorkbookNotes = Record<string, string>;

export type NotesExportPayload = {
  version: typeof NOTES_EXPORT_VERSION;
  exportedAt: string;
  notes: WorkbookNotes;
};

function normalizeNotes(value: unknown): WorkbookNotes | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;

  const notes: WorkbookNotes = {};
  for (const [id, entry] of Object.entries(value)) {
    if (typeof entry !== "string") continue;
    const trimmed = entry.trim();
    if (trimmed) notes[id] = trimmed;
  }
  return notes;
}

function persistNotes(notes: WorkbookNotes): void {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export function getWorkbookNotes(): WorkbookNotes {
  if (typeof localStorage === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return normalizeNotes(JSON.parse(raw)) ?? {};
  } catch {
    return {};
  }
}

export function getWorkbookNote(workbookId: string): string | undefined {
  return getWorkbookNotes()[workbookId];
}

export function setWorkbookNote(workbookId: string, note: string): string | undefined {
  const trimmed = note.trim();
  const notes = getWorkbookNotes();

  if (!trimmed) {
    if (!(workbookId in notes)) return undefined;
    delete notes[workbookId];
    persistNotes(notes);
    return undefined;
  }

  notes[workbookId] = trimmed;
  persistNotes(notes);
  return trimmed;
}

export function clearWorkbookNote(workbookId: string): void {
  setWorkbookNote(workbookId, "");
}

/** Replace all stored notes. Empty strings are dropped. */
export function replaceWorkbookNotes(next: WorkbookNotes): WorkbookNotes {
  const notes = normalizeNotes(next) ?? {};
  persistNotes(notes);
  return notes;
}

export function buildNotesExport(notes = getWorkbookNotes()): NotesExportPayload {
  return {
    version: NOTES_EXPORT_VERSION,
    exportedAt: new Date().toISOString(),
    notes
  };
}

/**
 * Accepts a versioned export payload or a bare notes map.
 * Returns null when the shape is invalid.
 */
export function parseNotesImport(raw: unknown): WorkbookNotes | null {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;

  const record = raw as Record<string, unknown>;
  if ("notes" in record) {
    if (record.version !== undefined && record.version !== NOTES_EXPORT_VERSION) {
      return null;
    }
    return normalizeNotes(record.notes);
  }

  return normalizeNotes(raw);
}
