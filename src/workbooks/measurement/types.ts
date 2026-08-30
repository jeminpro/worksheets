export type MeasurementDifficulty = "easy" | "medium" | "hard";

export type MeasurementTopic =
  | "length-perimeter"
  | "money"
  | "time"
  | "metric-units"
  | "area"
  | "volume"
  | "imperial-units";

export type MeasurementFormat = "values" | "compare" | "expression" | "text";

export type MeasurementDiagram =
  | { kind: "rectangle"; widthLabel: string; heightLabel: string }
  | { kind: "triangle"; baseLabel: string; heightLabel?: string; sideALabel?: string; sideBLabel?: string }
  | { kind: "compound-l"; top: string; left: string; bottom: string; right: string; cutH?: string; cutW?: string }
  | { kind: "cuboid"; lengthLabel: string; widthLabel: string; heightLabel: string }
  | { kind: "cube"; edgeLabel: string }
  | { kind: "clock"; hours: number; minutes: number }
  | { kind: "parallelogram"; baseLabel: string; heightLabel: string }
  | { kind: "trapezium"; topLabel: string; bottomLabel: string; heightLabel: string };

export interface MeasurementProblem {
  difficulty: MeasurementDifficulty;
  prompt?: string;
  given?: string | readonly string[];
  format?: MeasurementFormat;
  diagram?: MeasurementDiagram;
  answer: string;
}

export interface MeasurementSheet {
  page: number;
  title: string;
  label: string;
  topic: MeasurementTopic;
  instruction: string;
  problems: readonly MeasurementProblem[];
}
