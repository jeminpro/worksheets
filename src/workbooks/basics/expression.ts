import type { BasicsFormat, BasicsProblem } from "./types";

export function getFormat(problem: BasicsProblem): BasicsFormat {
  if (problem.format) return problem.format;
  return problem.given === undefined ? "text" : "values";
}

export function getGiven(problem: BasicsProblem): readonly string[] {
  if (problem.given === undefined) return [];
  return typeof problem.given === "string" ? [problem.given] : problem.given;
}

/** A leading `−` is spoken as "negative"; between operands it is "minus". */
export function speak(value: string): string {
  return value
    .replace(/(\d)\s*−/g, "$1 minus ")
    .replace(/−/g, "negative ")
    .replace(/×/g, " times ")
    .replace(/÷/g, " divided by ")
    .replace(/²/g, " squared")
    .replace(/</g, " less than ")
    .replace(/>/g, " greater than ")
    .replace(/°C/g, " degrees Celsius")
    .replace(/\s+/g, " ")
    .trim();
}

export function formatAccessibleQuestion(problem: BasicsProblem): string {
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
