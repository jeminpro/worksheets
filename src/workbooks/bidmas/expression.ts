import type { BidmasProblem } from "./types";

const tokenPattern = /√(\([^)]+\)|\d+)|∛(\([^)]+\)|\d+)|[²³⁴]/g;

export type TextSegment =
  | { kind: "text"; value: string }
  | { kind: "power"; value: string }
  | { kind: "sqrt"; value: string }
  | { kind: "cbrt"; value: string };

export const operandPattern = String.raw`(?:√(?:\([^)]+\)|\d+)|∛(?:\([^)]+\)|\d+)|\([^()]+\)[²³⁴]?|\d+[²³⁴]?)`;

export function unwrapRadicand(value: string): string {
  return value.replace(/^\((.*)\)$/, "$1");
}

export function formatRadicand(value: string): string {
  const inner = unwrapRadicand(value);
  return /[+\−×÷]/.test(inner) ? `(${inner})` : inner;
}

export function unwrapBrackets(value: string): string {
  return value.replace(/^\((.*)\)$/, "$1");
}

export function parseTextSegments(value: string): TextSegment[] {
  const segments: TextSegment[] = [];
  let cursor = 0;

  for (const match of value.matchAll(tokenPattern)) {
    const matchIndex = match.index ?? 0;
    if (matchIndex > cursor) {
      segments.push({ kind: "text", value: value.slice(cursor, matchIndex) });
    }

    if (match[0].startsWith("√")) {
      segments.push({ kind: "sqrt", value: match[1] });
    } else if (match[0].startsWith("∛")) {
      segments.push({ kind: "cbrt", value: match[2] });
    } else {
      segments.push({ kind: "power", value: match[0] });
    }

    cursor = matchIndex + match[0].length;
  }

  if (cursor < value.length) {
    segments.push({ kind: "text", value: value.slice(cursor) });
  }

  return segments;
}

export type ExpressionPart =
  | { kind: "text"; value: string }
  | { kind: "fraction"; numerator: string; denominator: string };

export function parseExpression(expression: string): ExpressionPart[] {
  const divisionPattern = new RegExp(
    `(${operandPattern})\\s*÷\\s*(${operandPattern})`,
    "g"
  );
  const parts: ExpressionPart[] = [];
  let cursor = 0;

  for (const match of expression.matchAll(divisionPattern)) {
    const matchIndex = match.index ?? 0;
    if (matchIndex > cursor) {
      parts.push({ kind: "text", value: expression.slice(cursor, matchIndex) });
    }

    parts.push({
      kind: "fraction",
      numerator: unwrapBrackets(match[1]),
      denominator: unwrapBrackets(match[2])
    });
    cursor = matchIndex + match[0].length;
  }

  if (cursor < expression.length) {
    parts.push({ kind: "text", value: expression.slice(cursor) });
  }

  return parts;
}

export function formatAccessibleExpression(expression: string): string {
  return expression
    .replace(/√(\([^)]+\)|\d+)/g, "square root of $1")
    .replace(/∛(\([^)]+\)|\d+)/g, "cube root of $1")
    .replaceAll("÷", "divided by")
    .replaceAll("×", "times")
    .replaceAll("−", "minus");
}

export function getDisplayExpression(problem: BidmasProblem): string {
  return problem.expression
    .replace(/\s*×\s*(?=\()/g, "")
    .replace(/\)\s*×\s*/g, ")");
}
