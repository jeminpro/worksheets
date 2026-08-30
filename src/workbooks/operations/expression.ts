import type { OperationsFormat, OperationsProblem } from "./types";

export function getFormat(problem: OperationsProblem): OperationsFormat {
  if (problem.format) return problem.format;
  return problem.given === undefined ? "text" : "values";
}

export function getGiven(problem: OperationsProblem): readonly string[] {
  if (problem.given === undefined) return [];
  return typeof problem.given === "string" ? [problem.given] : problem.given;
}

/** Spoken replacements for accessibility labels. */
export function speak(value: string): string {
  return value
    .replace(/(\d)\s*−/g, "$1 minus ")
    .replace(/−/g, "negative ")
    .replace(/×/g, " times ")
    .replace(/÷/g, " divided by ")
    .replace(/²/g, " squared")
    .replace(/³/g, " cubed")
    .replace(/√(\d+)/g, "square root of $1")
    .replace(/∛(\d+)/g, "cube root of $1")
    .replace(/</g, " less than ")
    .replace(/>/g, " greater than ")
    .replace(/£(\d+(?:\.\d{2})?)/g, "$1 pounds")
    .replace(/(\d+)p\b/g, "$1 pence")
    .replace(/°C/g, " degrees Celsius")
    .replace(/\s+/g, " ")
    .trim();
}

export function formatAccessibleQuestion(problem: OperationsProblem): string {
  const format = getFormat(problem);
  const prompt = problem.prompt ? speak(problem.prompt) : "";
  const given = getGiven(problem).map(speak);

  if (format === "compare") {
    return `${prompt || "Write the correct sign between"}: ${given.join(", ")}`;
  }

  if (format === "expression") {
    const calculation = given.join(" ");
    return prompt ? `${prompt}: ${calculation}` : `Work out ${calculation}`;
  }

  return given.length ? `${prompt}: ${given.join(", ")}` : prompt;
}
