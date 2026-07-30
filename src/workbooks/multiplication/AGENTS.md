# Multiplication workbook

22 A4 pages of long multiplication. Pages 1–10 are two-digit × two-digit (30 questions, 3 working lines). Pages 11–16 are three-digit × two-digit (20 questions). Pages 17–22 are three-digit × three-digit (20 questions, 4 working lines).

## Files

- `data.ts` — single source of truth for all sheets and factor pairs.
- `types.ts` — `MultiplicationSheet` / `FactorPair`.
- `MultiplicationSheet.astro` — page chrome, header, grid.
- `MultiplicationProblem.astro` — one question, answer, working lines.
- Route: `src/pages/topic/multiplication/index.astro`.

## Edit rules

1. Change factor pairs only in `data.ts`.
2. Keep aria labels as `Question N: A times B` with the same numbers rendered in the problem.
3. Prefer existing classes before inventing new ones.
4. After data or local style/component edits, run:

```powershell
npm run check:layout -- --workbook=multiplication
```

## Sheet shape

```ts
{
  page: number;
  problems: readonly [number, number][];
  title?: string;
  label?: string;
  grid?: "problem-grid-20";
  workingLines?: number; // default 3
}
```
