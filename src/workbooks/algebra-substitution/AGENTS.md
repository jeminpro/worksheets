# Algebra substitution workbook

A4 practice for substituting values into algebraic expressions. Eight pages progress from single-variable linear expressions through two-variable work with negatives, into squares, brackets, nested expressions and three-variable challenges. Pages 1–4 have 15 problems in a 3×5 grid; pages 5–6 have 12 problems in a 3×4 grid; pages 7–8 have 9 problems in a 3×3 grid for the longest expressions.

## Files

- `data.ts` — substitution values, expressions and answers grouped into eight progressive sheets.
- `types.ts` — `SubstitutionProblem` / `AlgebraSubstitutionSheet`.
- `AlgebraSubstitutionSheet.astro` — page header, instruction and responsive row count.
- `AlgebraSubstitutionProblem.astro` — substitution prompt, expression card, answer reveal and working space.
- Route: `src/pages/topic/algebra-substitution/index.astro`.

## Constraints

- Eight pages: 2 easy (pages 1–2), 2 medium (pages 3–4), 2 hard (pages 5–6), 2 expert (pages 7–8).
- Pages 1–4: 15 problems in a 3×5 grid.
- Pages 5–6: 12 problems in a 3×4 grid for longer expressions.
- Pages 7–8: 9 problems in a 3×3 grid for the longest expressions.
- Store each problem as `{ substitution, expression, answer }`.
- Use typographic minus signs (`−`) in substitutions, expressions and answers.
- Keep every answer a whole number.
- Problem expressions stay 14pt; substitution prompts stay 10pt; question numbers stay 6.5pt.
- Do not shrink text to fix overflow — reduce problem count or expression length instead.

## Sheet shape

```ts
{
  page: number;
  title: string;
  label: string;
  instruction: string;
  problems: readonly { substitution: string; expression: string; answer: number }[];
}
```

## Verify

```powershell
npm run check
npm run check:layout -- --workbook=algebra-substitution
```
