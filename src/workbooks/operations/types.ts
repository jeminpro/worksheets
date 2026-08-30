export type OperationsDifficulty = "easy" | "medium" | "hard";

export type OperationsTopic =
  | "written-addition"
  | "written-subtraction"
  | "written-multiplication"
  | "written-division"
  | "mental-add-sub"
  | "mental-mul-div"
  | "square-cube"
  | "multiples"
  | "factors"
  | "primes-factors"
  | "estimating"
  | "worded-problems";

/**
 * Card layout formats:
 * - `values` — instruction above one or more given numbers/chips, answer line.
 * - `compare` — two given numbers with answer box in between.
 * - `expression` — calculation followed by `=` and answer box.
 * - `text` — word problem or text prompt, answer line.
 */
export type OperationsFormat = "values" | "compare" | "expression" | "text";

export interface OperationsProblem {
  difficulty: OperationsDifficulty;
  prompt?: string;
  given?: string | readonly string[];
  format?: OperationsFormat;
  answer: string;
}

export interface OperationsSheet {
  page: number;
  title: string;
  label: string;
  topic: OperationsTopic;
  instruction: string;
  problems: readonly OperationsProblem[];
}
