import type { SimplifyCalculationsProblem } from "./types";

function product(values: readonly number[]): number {
  return values.reduce((total, value) => total * value, 1);
}

function joinTimes(values: readonly number[]): string {
  return values.join(" × ");
}

/** Whole-number value after multiplying factors and dividing by divisors. */
export function getAnswer(problem: SimplifyCalculationsProblem): number {
  const numerator = product(problem.factors);
  const denominator = product(problem.divisors);
  if (denominator === 0 || numerator % denominator !== 0) {
    throw new Error(
      `Simplify calculation must divide exactly: ${joinTimes(problem.factors)} / ${joinTimes(problem.divisors)}`
    );
  }
  return numerator / denominator;
}

export function formatAccessibleExpression(
  problem: SimplifyCalculationsProblem
): string {
  const numerator = problem.factors
    .map(String)
    .join(" times ");
  const denominator =
    problem.divisors.length === 1
      ? String(problem.divisors[0])
      : problem.divisors.map(String).join(" times ");
  return `${numerator} divided by ${denominator}`;
}

export function getNumeratorText(problem: SimplifyCalculationsProblem): string {
  return joinTimes(problem.factors);
}

export function getDenominatorText(
  problem: SimplifyCalculationsProblem
): string {
  return joinTimes(problem.divisors);
}
