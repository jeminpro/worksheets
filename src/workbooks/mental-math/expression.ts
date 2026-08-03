import type { MentalMathOp, MentalMathProblem } from "./types";

export function getAnswer([left, right, op]: MentalMathProblem): number {
  return op === "+" ? left + right : left - right;
}

export function formatOp(op: MentalMathOp): string {
  return op === "+" ? "+" : "−";
}

export function speakOp(op: MentalMathOp): string {
  return op === "+" ? "plus" : "minus";
}

export function formatAccessibleExpression([
  left,
  right,
  op
]: MentalMathProblem): string {
  return `${left} ${speakOp(op)} ${right}`;
}
