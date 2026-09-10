export type ComparingKind = "whole" | "decimal" | "fraction";

export type ComparingDifficulty = "easy" | "medium" | "hard";

export type ComparingOperand =
  | { kind: "whole"; value: number }
  | { kind: "decimal"; text: string }
  | {
      kind: "fraction";
      whole?: number;
      numerator: number;
      denominator: number;
    };

export interface ComparingProblem {
  difficulty: ComparingDifficulty;
  left: ComparingOperand;
  right: ComparingOperand;
}

export interface ComparingNumbersSheet {
  page: number;
  title: string;
  label: string;
  kind: ComparingKind;
  instruction: string;
  problems: readonly ComparingProblem[];
}
