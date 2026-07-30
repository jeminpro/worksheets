export type AddendPair = readonly [number, number];

export interface AdditionSheet {
  page: number;
  problems: readonly AddendPair[];
  title?: string;
  label?: string;
  grid?: "problem-grid-25";
}
