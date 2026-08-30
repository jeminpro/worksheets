export type DataDifficulty = "easy" | "medium" | "hard";

export type DataTopic =
  | "pictograms"
  | "bar-charts"
  | "line-graphs"
  | "pie-charts"
  | "tables"
  | "venn-diagrams"
  | "mean"
  | "mode-median-range";

export type DataFormat = "values" | "compare" | "expression" | "text";

export type DataDiagram =
  | {
      kind: "pictogram";
      keyText: string;
      rows: { label: string; count: number; half?: boolean }[];
    }
  | {
      kind: "bar-chart";
      bars: { label: string; value: number }[];
      yMax: number;
      yStep?: number;
      yLabel?: string;
    }
  | {
      kind: "line-graph";
      points: { x: string; y: number }[];
      yMax: number;
      yMin?: number;
      yStep?: number;
      yLabel?: string;
    }
  | {
      kind: "pie-chart";
      slices: { label: string; percent: number; display?: string }[];
    }
  | {
      kind: "table";
      headers: string[];
      rows: (string | number)[][];
    }
  | {
      kind: "venn";
      labelA: string;
      labelB: string;
      onlyA?: string | number;
      onlyB?: string | number;
      both?: string | number;
      neither?: string | number;
    }
  | {
      kind: "carroll";
      rowHeader: [string, string];
      colHeader: [string, string];
      data: (string | number)[][];
    };

export interface DataProblem {
  difficulty: DataDifficulty;
  prompt?: string;
  given?: string | readonly string[];
  format?: DataFormat;
  diagram?: DataDiagram;
  answer: string;
}

export interface DataSheet {
  page: number;
  title: string;
  label: string;
  topic: DataTopic;
  instruction: string;
  problems: readonly DataProblem[];
}
