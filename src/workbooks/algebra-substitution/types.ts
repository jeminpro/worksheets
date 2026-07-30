export interface SubstitutionProblem {
  substitution: string;
  expression: string;
  answer: number;
}

export interface AlgebraSubstitutionSheet {
  page: number;
  title: string;
  label: string;
  instruction: string;
  problems: readonly SubstitutionProblem[];
}
