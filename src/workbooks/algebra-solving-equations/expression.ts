const operandPattern = String.raw`(?:\([^)]+\)|\d+x|x|\d+)`;

export type EquationPart =
  | { kind: "text"; value: string }
  | { kind: "fraction"; numerator: string; denominator: string };

export function unwrapBrackets(value: string): string {
  return value.replace(/^\((.*)\)$/, "$1");
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
    .replaceAll("÷", "divided by")
    .replaceAll("−", "minus")
    .replace(/=/g, " equals ")
    .replace(/\+/g, " plus ");
}
