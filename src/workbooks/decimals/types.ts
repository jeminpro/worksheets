export type DecimalsDifficulty = "easy" | "medium" | "hard";

export type DecimalsTopic =
  | "decimal-place-value"
  | "add-sub-decimals"
  | "mul-div-decimals"
  | "convert-decimals-fractions"
  | "order-compare-decimals";

/**
 * Card layout formats:
 * - `values` — instruction above one or more given numbers/chips, answer line.
 * - `compare` — two given numbers with answer box in between.
 * - `expression` — calculation followed by `=` and answer box.
 * - `text` — word problem or text prompt, answer line.
 */
export type DecimalsFormat = "values" | "compare" | "expression" | "text";

export interface DecimalsProblem {
  difficulty: DecimalsDifficulty;
  prompt?: string;
  given?: string | readonly string[];
  format?: DecimalsFormat;
  answer: string;
}

export interface DecimalsSheet {
  page: number;
  title: string;
  label: string;
  topic: DecimalsTopic;
  instruction: string;
  problems: readonly DecimalsProblem[];
}
