export type MinuendPair = readonly [number, number];

export interface SubtractionSheet {
  page: number;
  problems: readonly MinuendPair[];
  title?: string;
  label?: string;
  grid?: "problem-grid-25";
}
