export interface SimplifyCalculationsProblem {
  /** Numerator factors, multiplied together. */
  readonly factors: readonly number[];
  /** Denominator factors, multiplied together. */
  readonly divisors: readonly number[];
}

export interface SimplifyCalculationsSheet {
  page: number;
  title: string;
  label: string;
  instruction: string;
  problems: readonly SimplifyCalculationsProblem[];
}
