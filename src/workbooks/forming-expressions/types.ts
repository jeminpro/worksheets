export type AlgebraicExpression =
  | { readonly kind: "constant"; readonly value: number }
  | { readonly kind: "variable"; readonly name: string }
  | { readonly kind: "sum"; readonly terms: readonly AlgebraicExpression[] }
  | {
      readonly kind: "difference";
      readonly left: AlgebraicExpression;
      readonly right: AlgebraicExpression;
    }
  | { readonly kind: "product"; readonly factors: readonly AlgebraicExpression[] }
  | {
      readonly kind: "quotient";
      readonly numerator: AlgebraicExpression;
      readonly denominator: AlgebraicExpression;
    };

export interface FormingExpressionProblem {
  prompt: string;
  expression: AlgebraicExpression;
}

export interface FormingExpressionsSheet {
  page: number;
  title: string;
  label: string;
  instruction: string;
  problems: readonly FormingExpressionProblem[];
}
