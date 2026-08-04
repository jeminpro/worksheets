export type AddendPair = readonly [number, number];

export interface QuickAdditionTiming {
  average: string;
  good: string;
  excellent: string;
  genius: string;
}

export interface QuickAdditionSheet {
  page: number;
  title: string;
  label: string;
  timing: QuickAdditionTiming;
  problems: readonly AddendPair[];
}
