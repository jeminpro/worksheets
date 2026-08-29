export type BasicsDifficulty = "easy" | "medium" | "hard";

export type BasicsTopic =
  | "place-value"
  | "order-compare"
  | "roman-numerals"
  | "rounding"
  | "negative-numbers"
  | "bidmas";

export type BasicsDisplay = "prompt" | "expression";

export interface BasicsProblem {
  difficulty: BasicsDifficulty;
  prompt: string;
  answer: string;
  display?: BasicsDisplay;
}

export interface BasicsSheet {
  page: number;
  title: string;
  label: string;
  topic: BasicsTopic;
  instruction: string;
  problems: readonly BasicsProblem[];
}
