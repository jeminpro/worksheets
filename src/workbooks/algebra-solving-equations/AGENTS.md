# Algebra solving equations workbook

A4 practice for solving linear equations. Six pages progress from one-step addition and subtraction through multiplication and division, into two-step equations, brackets, and variables on both sides. Pages 1–4 have 15 problems in a 3×5 grid; pages 5–6 have 12 problems in a 3×4 grid for longer equations.

## Files

- `data.ts` — equations, variable and answers grouped into six progressive sheets.
- `expression.ts` — parsing for stacked fraction rendering.
- `types.ts` — `EquationProblem` / `AlgebraSolvingEquationsSheet`.
- `AlgebraSolvingEquationsSheet.astro` — page header, instruction and responsive row count.
- `AlgebraSolvingEquationsProblem.astro` — equation prompt, solution line, answer reveal and working space.
- Route: `src/pages/topic/algebra-solving-equations/index.astro`.

## Constraints

- Six pages: 2 easy (pages 1–2), 2 medium (pages 3–4), 2 hard (pages 5–6).
- Pages 1–4: 15 problems in a 3×5 grid.
- Pages 5–6: 12 problems in a 3×4 grid for longer equations.
- Store each problem as `{ equation, variable, answer }`.
- Store division with `÷` in source data; render every division as a stacked fraction.
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
