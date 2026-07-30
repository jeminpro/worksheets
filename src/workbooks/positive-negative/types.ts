export type IntegerExpression = readonly [number, number, number];

export interface PositiveNegativeSheet {
  page: number;
  title: string;
  label: string;
  instruction: string;
  problems: readonly IntegerExpression[];
}
