# BIDMAS workbook

A4 order-of-operations practice. Ten pages progress from early multiply/divide, through brackets and indices, into nested brackets, left-to-right traps, comparison pairs and expert multi-step challenges.

## Files

- `data.ts` — expressions and their answers, grouped into ten progressive sheets.
- `types.ts` — `BidmasProblem` / `BidmasSheet`.
- `BidmasSheet.astro` — page header, instruction and responsive row count.
- `BidmasProblem.astro` — expression card, stacked fractions, answer reveal and blank working space.
- Route: `src/pages/workbooks/bidmas/index.astro`.

## Constraints

- Pages 1–2 have 15 problems in a 3×5 grid.
- Pages 3–10 have 12 problems in a 3×4 grid for longer mixed expressions.
- Store expressions with typographic operators (`×`, `÷`, `−`) and superscript digits for indices.
- Render every `÷` operation as a stacked fraction; retain the source operator for accessible labels.
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
