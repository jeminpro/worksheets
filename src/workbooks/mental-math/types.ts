export type MentalMathOp = "+" | "-";

export type MentalMathMethod =
  | "partitioning"
  | "compensation"
  | "bridging"
  | "difference"
  | "mixed";

/** `[left, right]` with `op`; answer is left ± right. */
export type MentalMathProblem = readonly [number, number, MentalMathOp];

export interface MentalMathSheet {
  page: number;
  title: string;
  label: string;
  method: MentalMathMethod;
  instruction: string;
  problems: readonly MentalMathProblem[];
}
