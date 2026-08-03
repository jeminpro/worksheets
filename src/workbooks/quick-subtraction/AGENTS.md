# Quick subtraction workbook

10 A4 pages of quick subtraction. Minuends are 1–19 and subtrahends are 1–9 (non-negative answers only). Each page mixes simple (minuend ≤ 9), medium (10–14) and hard (15–19) — 14 / 13 / 13 of 40 questions in a 5×8 grid. Horizontal `a − b =` layout for timed mental practice. Subheading shows Average / Good / Excellent timing targets.

## Files

- `data.ts` — `[minuend, subtrahend]` pairs and timing strings.
- `types.ts` — `QuickSubtractionSheet` / `SubtractionPair` / `QuickSubtractionTiming`.
- `QuickSubtractionSheet.astro` — page chrome, timing subheading, 5×8 grid.
- `QuickSubtractionProblem.astro` — horizontal difference; answer is `minuend − subtrahend`.
- Route: `src/pages/topic/quick-subtraction/index.astro`.

## Constraints

- Keep 10 pages, each with 40 problems in a 5×8 grid.
- Minuend 1–19, subtrahend 1–9, minuend ≥ subtrahend.
- Mix ~14 simple, ~13 medium, ~13 hard on every page.
- Timing targets stay on the sheet subheading (Average / Good / Excellent).
- Digits stay 14pt; question numbers stay 6.5pt.
- Use a typographic minus (`−`) in displayed expressions.
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
npm run check:layout -- --workbook=quick-subtraction
```
