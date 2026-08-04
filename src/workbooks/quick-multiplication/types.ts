export type FactorPair = readonly [number, number];

export interface QuickMultiplicationTiming {
  average: string;
  good: string;
  excellent: string;
  genius: string;
}

export interface QuickMultiplicationSheet {
  page: number;
  title: string;
  label: string;
  timing: QuickMultiplicationTiming;
  problems: readonly FactorPair[];
}
