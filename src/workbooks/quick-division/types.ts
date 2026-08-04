export type DivisionPair = readonly [number, number];

export interface QuickDivisionTiming {
  average: string;
  good: string;
  excellent: string;
}

export interface QuickDivisionSheet {
  page: number;
  title: string;
  label: string;
  timing: QuickDivisionTiming;
  problems: readonly DivisionPair[];
}
