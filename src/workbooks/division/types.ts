export type DivisionPair = readonly [number, number];

export interface DivisionSheet {
  page: number;
  problems: readonly DivisionPair[];
  title?: string;
  label?: string;
}
