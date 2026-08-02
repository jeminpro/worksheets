const STORAGE_KEY = "worksheets-notes";

/** Reserved note id for free-form notes not tied to a workbook topic. */
export const GENERAL_NOTE_ID = "general";

export const NOTES_EXPORT_VERSION = 1 as const;
export const NOTES_STORAGE_VERSION = 1 as const;

export type WorkbookNotes = Record<string, string>;

export type NotesEnvelope = {
  version: typeof NOTES_STORAGE_VERSION;
  updatedAt: string;
  notes: WorkbookNotes;
};

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

function emptyEnvelope(updatedAt = new Date(0).toISOString()): NotesEnvelope {
  return {
    version: NOTES_STORAGE_VERSION,
    updatedAt,
    notes: {}
  };
}

function parseEnvelope(raw: unknown): NotesEnvelope | null {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;

  const record = raw as Record<string, unknown>;

  // Versioned envelope
  if ("notes" in record) {
    const notes = normalizeNotes(record.notes);
    if (!notes) return null;
    const updatedAt =
      typeof record.updatedAt === "string" && record.updatedAt
        ? record.updatedAt
        : new Date(0).toISOString();
    return {
      version: NOTES_STORAGE_VERSION,
      updatedAt,
      notes
    };
  }

  // Legacy bare map
  const notes = normalizeNotes(raw);
  if (!notes) return null;
  return {
    version: NOTES_STORAGE_VERSION,
    updatedAt: new Date(0).toISOString(),
    notes
  };
}

function persistEnvelope(envelope: NotesEnvelope): void {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(envelope));
}

export function getNotesEnvelope(): NotesEnvelope {
  if (typeof localStorage === "undefined") return emptyEnvelope();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyEnvelope();
    return parseEnvelope(JSON.parse(raw)) ?? emptyEnvelope();
  } catch {
    return emptyEnvelope();
  }
}

/** Replace local envelope without bumping updatedAt (used when applying remote). */
export function writeNotesEnvelope(envelope: NotesEnvelope): NotesEnvelope {
  const notes = normalizeNotes(envelope.notes) ?? {};
  const next: NotesEnvelope = {
    version: NOTES_STORAGE_VERSION,
    updatedAt: envelope.updatedAt || new Date().toISOString(),
    notes
  };
  persistEnvelope(next);
  return next;
}

export function getWorkbookNotes(): WorkbookNotes {
  return getNotesEnvelope().notes;
}

export function getWorkbookNote(workbookId: string): string | undefined {
  return getWorkbookNotes()[workbookId];
}

export function setWorkbookNote(workbookId: string, note: string): string | undefined {
  const trimmed = note.trim();
  const envelope = getNotesEnvelope();
  const notes = { ...envelope.notes };

  if (!trimmed) {
    if (!(workbookId in notes)) return undefined;
    delete notes[workbookId];
  } else {
    notes[workbookId] = trimmed;
  }

  writeNotesEnvelope({
    version: NOTES_STORAGE_VERSION,
    updatedAt: new Date().toISOString(),
    notes
  });

  return trimmed || undefined;
}

export function clearWorkbookNote(workbookId: string): void {
  setWorkbookNote(workbookId, "");
}

/** Replace all stored notes. Empty strings are dropped. Bumps updatedAt. */
export function replaceWorkbookNotes(next: WorkbookNotes): WorkbookNotes {
  const notes = normalizeNotes(next) ?? {};
  writeNotesEnvelope({
    version: NOTES_STORAGE_VERSION,
    updatedAt: new Date().toISOString(),
    notes
  });
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

/** Union note keys; conflicting text prefers the side with newer updatedAt. */
export function mergeNotes(
  local: NotesEnvelope,
  cloud: NotesEnvelope
): NotesEnvelope {
  const localWins = local.updatedAt >= cloud.updatedAt;
  const preferred = localWins ? local.notes : cloud.notes;
  const other = localWins ? cloud.notes : local.notes;

  return {
    version: NOTES_STORAGE_VERSION,
    updatedAt: localWins ? local.updatedAt : cloud.updatedAt,
    notes: { ...other, ...preferred }
  };
}
