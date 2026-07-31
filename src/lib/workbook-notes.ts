const STORAGE_KEY = "worksheets-notes";

export type WorkbookNotes = Record<string, string>;

export function getWorkbookNotes(): WorkbookNotes {
  if (typeof localStorage === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};

    const notes: WorkbookNotes = {};
    for (const [id, value] of Object.entries(parsed)) {
      if (typeof value !== "string") continue;
      const trimmed = value.trim();
      if (trimmed) notes[id] = trimmed;
    }
    return notes;
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
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    return undefined;
  }

  notes[workbookId] = trimmed;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  return trimmed;
}

export function clearWorkbookNote(workbookId: string): void {
  setWorkbookNote(workbookId, "");
}
