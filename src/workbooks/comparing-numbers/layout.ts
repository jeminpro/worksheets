import type { ComparingDifficulty, ComparingKind } from "./types";

/** Every band uses 3 columns so comparison pairs stay inside the card. */
export const BAND_COLUMNS = 3;

const bandRows = {
  whole: { easy: 5, medium: 4, hard: 4 },
  decimal: { easy: 5, medium: 4, hard: 4 },
  fraction: { easy: 4, medium: 3, hard: 2 }
} as const satisfies Record<
  ComparingKind,
  Record<ComparingDifficulty, number>
>;

export function bandRowCount(
  kind: ComparingKind,
  difficulty: ComparingDifficulty
): number {
  return bandRows[kind][difficulty];
}

export function bandCount(kind: ComparingKind, difficulty: ComparingDifficulty): number {
  return BAND_COLUMNS * bandRowCount(kind, difficulty);
}
