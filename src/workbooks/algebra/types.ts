export type AlgebraDifficulty = "easy" | "medium" | "hard";

export type AlgebraTopic =
  | "simple-sequences"
  | "substitution"
  | "solving-equations"
  | "forming-expressions";

export type AlgebraFormat = "values" | "compare" | "expression" | "text";

export type AlgebraDiagram =
  | {
      kind: "matchstick-sequence";
      patterns: { label: string; count: number }[];
    }
  | {
      kind: "function-machine";
      input: string;
      ops: string[];
      output?: string;
    }
  | {
      kind: "balance-scale";
      left: string;
      right: string;
    }
  | {
      kind: "algebra-shape";
      shape: "rectangle" | "triangle";
      side1: string;
      side2: string;
      side3?: string;
    };

export interface AlgebraProblem {
  difficulty: AlgebraDifficulty;
  prompt?: string;
  given?: string | readonly string[];
  format?: AlgebraFormat;
  diagram?: AlgebraDiagram;
  answer: string;
}

export interface AlgebraSheet {
  page: number;
  title: string;
  label: string;
  topic: AlgebraTopic;
  instruction: string;
  problems: readonly AlgebraProblem[];
}
