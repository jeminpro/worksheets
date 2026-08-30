import type { GeometryFormat, GeometryProblem } from "./types";

export type GeometryTextSegment =
  | { kind: "text"; value: string }
  | { kind: "fraction"; whole?: string; numerator: string; denominator: string };

export function getFormat(problem: GeometryProblem): GeometryFormat {
  if (problem.format) return problem.format;
  return problem.given === undefined ? "text" : "values";
}

export function getGiven(problem: GeometryProblem): readonly string[] {
  if (problem.given === undefined) return [];
  return typeof problem.given === "string" ? [problem.given] : problem.given;
}

export function parseGeometryText(text: string): readonly GeometryTextSegment[] {
  const pattern = /(?:(\d+)\s+)?([0-9?a-zA-Z]+)\/([0-9?a-zA-Z]+)/g;
  const segments: GeometryTextSegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        kind: "text",
        value: text.slice(lastIndex, match.index)
      });
    }

    const whole = match[1];
    const numerator = match[2];
    const denominator = match[3];

    segments.push({
      kind: "fraction",
      whole: whole ? whole : undefined,
      numerator,
      denominator
    });

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    segments.push({
      kind: "text",
      value: text.slice(lastIndex)
    });
  }

  return segments;
}

export function speak(value: string): string {
  return value
    .replace(/(\d+)\s+([0-9?a-zA-Z]+)\/([0-9?a-zA-Z]+)/g, "$1 and $2 over $3")
    .replace(/([0-9?a-zA-Z]+)\/([0-9?a-zA-Z]+)/g, "$1 over $2")
    .replace(/(\d)\s*−/g, "$1 minus ")
    .replace(/−/g, "minus ")
    .replace(/×/g, " times ")
    .replace(/÷/g, " divided by ")
    .replace(/²/g, " squared")
    .replace(/³/g, " cubed")
    .replace(/(\d+)°/g, "$1 degrees")
    .replace(/π/g, " pi ")
    .replace(/</g, " less than ")
    .replace(/>/g, " greater than ")
    .replace(/(\d+(?:\.\d+)?)cm²/g, "$1 square centimetres")
    .replace(/(\d+(?:\.\d+)?)m²/g, "$1 square metres")
    .replace(/(\d+(?:\.\d+)?)cm\b/g, "$1 centimetres")
    .replace(/(\d+(?:\.\d+)?)m\b/g, "$1 metres")
    .replace(/\s+/g, " ")
    .trim();
}

export function formatAccessibleQuestion(problem: GeometryProblem): string {
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
