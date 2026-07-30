export interface BidmasProblem {
  expression: string;
  answer: number;
}

export interface BidmasSheet {
  page: number;
  title: string;
  label: string;
  instruction: string;
  problems: readonly BidmasProblem[];
}
