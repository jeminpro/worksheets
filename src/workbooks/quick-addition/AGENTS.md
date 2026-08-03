# Quick addition workbook

10 A4 pages of single-digit quick addition. Each page mixes simple (sum ≤ 9), medium (sum 10–13) and hard (sum 14–18) facts — 14 / 13 / 13 of 40 questions in a 5×8 grid. Horizontal `a + b =` layout for timed mental practice. Subheading shows Average / Good / Excellent timing targets.

## Files

- `data.ts` — `[left, right]` addend pairs and timing strings.
- `types.ts` — `QuickAdditionSheet` / `AddendPair` / `QuickAdditionTiming`.
- `QuickAdditionSheet.astro` — page chrome, timing subheading, 5×8 grid.
- `QuickAdditionProblem.astro` — horizontal sum; answer is `left + right`.
- Route: `src/pages/topic/quick-addition/index.astro`.

## Constraints

- Keep 10 pages, each with 40 problems in a 5×8 grid.
- Digits are single (1–9). Mix ~14 simple, ~13 medium, ~13 hard on every page.
- Timing targets stay on the sheet subheading (Average / Good / Excellent).
- Digits stay 14pt; question numbers stay 6.5pt.
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
npm run check:layout -- --workbook=quick-addition
```
