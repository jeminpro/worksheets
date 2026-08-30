export type RatioDifficulty = "easy" | "medium" | "hard";

export type RatioTopic =
  | "order-compare-percentages"
  | "calculating-percentages"
  | "relative-quantities";

export type RatioFormat = "values" | "compare" | "expression" | "text";

export type RatioDiagram =
  | {
      kind: "hundred-square";
      shaded: number;
    }
  | {
      kind: "percent-bar";
      percent: number;
      label?: string;
      totalLabel?: string;
    }
  | {
      kind: "compare-bars";
      bars: readonly { label: string; percent: number }[];
    }
  | {
      kind: "pie";
      slices: readonly { label: string; percent: number }[];
    }
  | {
      kind: "tape";
      parts: readonly { label: string; count: number }[];
      unitLabel?: string;
    }
  | {
      kind: "counters";
      groups: readonly { label: string; count: number }[];
    }
  | {
      kind: "number-line";
      min?: number;
      max?: number;
      marks: readonly { value: number; label: string }[];
    };

export interface RatioProblem {
  difficulty: RatioDifficulty;
  prompt?: string;
  given?: string | readonly string[];
  format?: RatioFormat;
  diagram?: RatioDiagram;
  answer: string;
}

export interface RatioSheet {
  page: number;
  title: string;
  label: string;
  topic: RatioTopic;
  instruction: string;
  questionOffset?: number;
  problems: readonly RatioProblem[];
}
