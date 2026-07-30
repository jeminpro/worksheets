export interface EquationProblem {
  equation: string;
  variable: string;
  answer: number;
}

export interface AlgebraSolvingEquationsSheet {
  page: number;
  title: string;
  label: string;
  instruction: string;
  problems: readonly EquationProblem[];
}
