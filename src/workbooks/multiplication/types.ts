export type FactorPair = readonly [number, number];

export interface MultiplicationSheet {
  page: number;
  problems: readonly FactorPair[];
  title?: string;
  label?: string;
  grid?: "problem-grid-20";
  workingLines?: number;
}
