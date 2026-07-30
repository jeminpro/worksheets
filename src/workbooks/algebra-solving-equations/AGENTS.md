# Algebra solving equations workbook

A4 practice for solving linear equations. Ten pages progress from one-step addition and subtraction through multiplication and division, two-step equations, brackets, variables on both sides, then squares, roots, cubes and mixed power equations. Pages 1–4 and 7–8 have 15 problems in a 3×5 grid; pages 5–6, 9–10 have 12 problems in a 3×4 grid for longer equations.

## Files

- `data.ts` — equations, variable and answers grouped into ten progressive sheets.
- `expression.ts` — parsing for fractions, powers and roots.
- `EquationText.astro` — renders powers, square roots and cube roots inline.
- `Radical.astro` — stacked radical notation for √ and ∛.
- `types.ts` — `EquationProblem` / `AlgebraSolvingEquationsSheet`.
- `AlgebraSolvingEquationsSheet.astro` — page header, instruction and responsive row count.
- `AlgebraSolvingEquationsProblem.astro` — equation prompt, solution line, answer reveal and working space.
- Route: `src/pages/topic/algebra-solving-equations/index.astro`.

## Constraints

- Ten pages: 2 easy (1–2), 2 medium (3–4), 2 hard (5–6), 2 powers/roots (7–8), 2 mixed powers (9–10).
- Pages 1–4 and 7–8: 15 problems in a 3×5 grid.
- Pages 5–6 and 9–10: 12 problems in a 3×4 grid for longer equations.
- Store each problem as `{ equation, variable, answer }`.
- Store division with `÷` in source data; render every division as a stacked fraction.
- Use superscript digits for squares and cubes (`x²`, `x³`); use `√` and `∛` for roots.
- Use typographic minus signs (`−`) in equations and answers.
- Keep every answer a whole number.
- Problem equations stay 14pt; question numbers stay 6.5pt.
- Do not shrink text to fix overflow — reduce problem count or equation length instead.

## Sheet shape

```ts
{
  page: number;
  title: string;
  label: string;
  instruction: string;
  problems: readonly { equation: string; variable: string; answer: number }[];
}
```

## Verify

```powershell
npm run check
npm run check:layout -- --workbook=algebra-solving-equations
```
