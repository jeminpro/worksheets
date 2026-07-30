const tokenPattern = /√(\([^)]+\)|x|\d+)|∛(\([^)]+\)|x|\d+)|[²³⁴]/g;

export type TextSegment =
  | { kind: "text"; value: string }
  | { kind: "power"; value: string }
  | { kind: "sqrt"; value: string }
  | { kind: "cbrt"; value: string };

const operandPattern = String.raw`(?:√(?:\([^)]+\)|x|\d+)|∛(?:\([^)]+\)|x|\d+)|\([^)]+\)|\d+x[²³⁴]?|x[²³⁴]?|\d+[²³⁴]?)`;

export type EquationPart =
  | { kind: "text"; value: string }
  | { kind: "fraction"; numerator: string; denominator: string };

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

export function parseEquation(equation: string): EquationPart[] {
  const divisionPattern = new RegExp(
    `(${operandPattern})\\s*÷\\s*(${operandPattern})`,
    "g"
  );
  const parts: EquationPart[] = [];
  let cursor = 0;

  for (const match of equation.matchAll(divisionPattern)) {
    const matchIndex = match.index ?? 0;
    if (matchIndex > cursor) {
      parts.push({ kind: "text", value: equation.slice(cursor, matchIndex) });
    }

    parts.push({
      kind: "fraction",
      numerator: unwrapBrackets(match[1]),
      denominator: unwrapBrackets(match[2])
    });
    cursor = matchIndex + match[0].length;
  }

  if (cursor < equation.length) {
    parts.push({ kind: "text", value: equation.slice(cursor) });
  }

  return parts;
}

export function formatAccessibleEquation(equation: string): string {
  return equation
    .replace(/√(\([^)]+\)|x|\d+)/g, "square root of $1")
    .replace(/∛(\([^)]+\)|x|\d+)/g, "cube root of $1")
    .replace(/x²/g, "x squared")
    .replace(/x³/g, "x cubed")
    .replace(/(\d+)²/g, "$1 squared")
    .replace(/(\d+)³/g, "$1 cubed")
    .replaceAll("÷", "divided by")
    .replaceAll("−", "minus")
    .replace(/=/g, " equals ")
    .replace(/\+/g, " plus ");
}
