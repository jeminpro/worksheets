import type { ComparingOperand, ComparingProblem } from "./types";

export type CompareSign = "<" | ">" | "=";

export type FractionSegment =
  | { kind: "text"; value: string }
  | { kind: "fraction"; whole?: string; numerator: string; denominator: string };

export function numericValue(operand: ComparingOperand): number {
  if (operand.kind === "whole") return operand.value;
  if (operand.kind === "decimal") return Number(operand.text);

  const mixed = operand.whole ?? 0;
  return mixed + operand.numerator / operand.denominator;
}

export function compareSign(problem: ComparingProblem): CompareSign {
  const left = numericValue(problem.left);
  const right = numericValue(problem.right);
  if (left < right) return "<";
  if (left > right) return ">";
  return "=";
}

export function formatOperand(operand: ComparingOperand): string {
  if (operand.kind === "whole") return operand.value.toLocaleString("en-GB");
  if (operand.kind === "decimal") return operand.text;

  const fraction = `${operand.numerator}/${operand.denominator}`;
  return operand.whole === undefined ? fraction : `${operand.whole} ${fraction}`;
}

/** Parses mixed numbers or simple fractions into renderable segments. */
export function parseFractionText(text: string): readonly FractionSegment[] {
  const pattern = /(?:(\d+)\s+)?([0-9?a-zA-Z]+)\/([0-9?a-zA-Z]+)/g;
  const segments: FractionSegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        kind: "text",
        value: text.slice(lastIndex, match.index)
      });
    }

    segments.push({
      kind: "fraction",
      whole: match[1] ? match[1] : undefined,
      numerator: match[2],
      denominator: match[3]
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

function speakOperand(operand: ComparingOperand): string {
  const text = formatOperand(operand);
  return text
    .replace(/(\d+)\s+(\d+)\/(\d+)/g, "$1 and $2 over $3")
    .replace(/(\d+)\/(\d+)/g, "$1 over $2")
    .replace(/,/g, "");
}

export function formatAccessibleQuestion(problem: ComparingProblem): string {
  return `Write the correct sign between ${speakOperand(problem.left)} and ${speakOperand(problem.right)}`;
}
