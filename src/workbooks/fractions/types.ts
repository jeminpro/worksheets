export type FractionsDifficulty = "easy" | "medium" | "hard";

export type FractionsTopic =
  | "calculating-fractions"
  | "adding-subtracting"
  | "equivalent-fractions"
  | "mixed-improper"
  | "order-compare";

/**
 * Card layout formats:
 * - `values` — instruction above one or more given numbers/chips, answer line.
 * - `compare` — two given numbers with answer box in between.
 * - `expression` — calculation followed by `=` and answer box.
 * - `text` — word problem or text prompt, answer line.
 */
export type FractionsFormat = "values" | "compare" | "expression" | "text";

export interface FractionsProblem {
  difficulty: FractionsDifficulty;
  prompt?: string;
  given?: string | readonly string[];
  format?: FractionsFormat;
  answer: string;
}

export interface FractionsSheet {
  page: number;
  title: string;
  label: string;
  topic: FractionsTopic;
  instruction: string;
  problems: readonly FractionsProblem[];
}
