# BIDMAS workbook

A4 order-of-operations practice. Twelve pages progress from early multiply/divide, through brackets and indices, into nested brackets, left-to-right traps, comparison pairs, expert multi-step challenges, and square/cube roots.

## Files

- `data.ts` — expressions and their answers, grouped into twelve progressive sheets.
- `types.ts` — `BidmasProblem` / `BidmasSheet`.
- `expression.ts` — shared parsing for fractions, powers and roots.
- `ExpressionText.astro` — renders text, powers, square roots and cube roots.
- `Radical.astro` — native MathML square/cube roots with connected vincula.
- `BidmasSheet.astro` — page header, instruction and responsive row count.
- `BidmasProblem.astro` — expression card, answer reveal and blank working space.
- Route: `src/pages/topic/bidmas/index.astro`.

## Constraints

- Pages 1–2 have 15 problems in a 3×5 grid.
- Pages 3–12 have 12 problems in a 3×4 grid for longer mixed expressions.
- Store expressions with typographic operators (`×`, `÷`, `−`), superscript digits for indices, `√` for square roots and `∛` for cube roots.
- Render every `÷` operation as a stacked fraction; retain the source operator for accessible labels.
- Render `√` and `∛` with a vinculum over the radicand.
- Omit `×` visually when multiplication is adjacent to a bracket; retain “times” in accessible labels.
- Keep every division exact and every answer a whole number.
- Multiplication and division of equal precedence are evaluated left to right; addition and subtraction follow the same rule.
- Problem expressions stay 14pt; question numbers stay 6.5pt.
- Do not shrink text to fix overflow — reduce problem count or expression length instead.

## Sheet shape

```ts
{
  page: number;
  title: string;
  label: string;
  instruction: string;
  problems: readonly { expression: string; answer: number }[];
}
```

## Verify

```powershell
npm run check
npm run check:layout -- --workbook=bidmas
```
