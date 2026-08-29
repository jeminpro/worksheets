export type BasicsDifficulty = "easy" | "medium" | "hard";

export type BasicsTopic =
  | "place-value"
  | "order-compare"
  | "roman-numerals"
  | "rounding"
  | "negative-numbers"
  | "bidmas";

/**
 * How a question card is laid out:
 * - `values` — instruction above one or more given numbers, answer on a line.
 * - `compare` — two given numbers with the answer box between them.
 * - `expression` — a calculation followed by `=` and the answer box.
 * - `text` — instruction only, answer on a line.
 */
export type BasicsFormat = "values" | "compare" | "expression" | "text";

export interface BasicsProblem {
  difficulty: BasicsDifficulty;
  prompt?: string;
  given?: string | readonly string[];
  format?: BasicsFormat;
  answer: string;
}

export interface BasicsSheet {
  page: number;
  title: string;
  label: string;
  topic: BasicsTopic;
  instruction: string;
  problems: readonly BasicsProblem[];
}
