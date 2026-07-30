import type { AlgebraicExpression } from "./types";

export const constant = (value: number): AlgebraicExpression => ({
  kind: "constant",
  value
});

export const variable = (name: string): AlgebraicExpression => ({
  kind: "variable",
  name
});

export const sum = (...terms: AlgebraicExpression[]): AlgebraicExpression => ({
  kind: "sum",
  terms
});

export const difference = (
  left: AlgebraicExpression,
  right: AlgebraicExpression
): AlgebraicExpression => ({
  kind: "difference",
  left,
  right
});

export const product = (...factors: AlgebraicExpression[]): AlgebraicExpression => ({
  kind: "product",
  factors
});

export const quotient = (
  numerator: AlgebraicExpression,
  denominator: AlgebraicExpression
): AlgebraicExpression => ({
  kind: "quotient",
  numerator,
  denominator
});

function precedence(expression: AlgebraicExpression): number {
  if (expression.kind === "sum" || expression.kind === "difference") return 1;
  if (expression.kind === "product" || expression.kind === "quotient") return 2;
  return 3;
}

function wrapIfNeeded(
  expression: AlgebraicExpression,
  minimumPrecedence: number
): string {
  const formatted = formatExpression(expression);
  return precedence(expression) < minimumPrecedence ? `(${formatted})` : formatted;
}

export function formatExpression(expression: AlgebraicExpression): string {
  switch (expression.kind) {
    case "constant":
      return String(expression.value);
    case "variable":
      return expression.name;
    case "sum":
      return expression.terms.map((term) => formatExpression(term)).join(" + ");
    case "difference":
      return `${formatExpression(expression.left)} − ${wrapIfNeeded(expression.right, 2)}`;
    case "product":
      return expression.factors
        .map((factor) => wrapIfNeeded(factor, 2))
        .join("");
    case "quotient":
      return `${wrapIfNeeded(expression.numerator, 2)} ÷ ${wrapIfNeeded(expression.denominator, 3)}`;
  }
}

export function speakExpression(expression: AlgebraicExpression): string {
  switch (expression.kind) {
    case "constant":
      return String(expression.value);
    case "variable":
      return expression.name;
    case "sum":
      return expression.terms.map(speakExpression).join(" plus ");
    case "difference":
      return `${speakExpression(expression.left)} minus ${speakExpression(expression.right)}`;
    case "product":
      return expression.factors.map(speakExpression).join(" times ");
    case "quotient":
      return `${speakExpression(expression.numerator)} divided by ${speakExpression(expression.denominator)}`;
  }
}
