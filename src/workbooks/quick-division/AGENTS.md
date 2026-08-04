# Quick division workbook

10 A4 pages of 1–12 times-table division. Each page mixes simple (dividend ≤ 20), medium (21–60) and hard (61–144) — 14 / 13 / 13 of 40 questions in a 5×8 grid. Stacked fraction layout (`dividend` over `divisor`, then `=`) for timed mental practice. Subheading shows Average / Good / Excellent timing targets.

## Files

- `data.ts` — `[dividend, divisor]` pairs and timing strings.
- `types.ts` — `QuickDivisionSheet` / `DivisionPair` / `QuickDivisionTiming`.
- `QuickDivisionSheet.astro` — page chrome, timing subheading, 5×8 grid.
- `QuickDivisionProblem.astro` — stacked fraction; answer is `dividend ÷ divisor`.
- Route: `src/pages/topic/quick-division/index.astro`.

## Constraints

- Keep 10 pages, each with 40 problems in a 5×8 grid.
- Divisor and quotient are both 1–12 (whole-number answers only).
- Mix ~14 simple, ~13 medium, ~13 hard on every page.
- Timing targets stay on the sheet subheading (Average / Good / Excellent).
- Digits stay 14pt; question numbers stay 6.5pt.
- Use a stacked fraction (dividend over divisor with a bar) in displayed expressions.
- Derive each answer from the pair rather than storing it separately.
- Do not shrink text to fix overflow — reduce problem count or grid density instead.

## Sheet shape

```ts
{
  page: number;
  title: string;
  label: string;
  timing: { average: string; good: string; excellent: string };
  problems: readonly [number, number][]; // 40 for 5×8
}
```

## Verify

```powershell
npm run check
npm run check:layout -- --workbook=quick-division
```
