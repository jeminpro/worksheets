export type SubtractionPair = readonly [number, number];

export interface QuickSubtractionTiming {
  average: string;
  good: string;
  excellent: string;
}

export interface QuickSubtractionSheet {
  page: number;
  title: string;
  label: string;
  timing: QuickSubtractionTiming;
  problems: readonly SubtractionPair[];
}
