# Simplify calculations workbook

Six A4 sheets for cancelling common factors in product fractions, then evaluating. Pages 1–2 are easy (`a × b / c`), pages 3–4 are medium (three factors across the fraction), and pages 5–6 are hard (multi-factor numerator and denominator).

## Files

- `data.ts` — factor and divisor tuples for all 72 problems.
- `types.ts` — problem and sheet types.
- `expression.ts` — answer and accessible label helpers derived from the same tuples.
- `SimplifyCalculationsSheet.astro` — page header and 3×4 problem grid.
- `SimplifyCalculationsProblem.astro` — stacked-fraction card, answer reveal and blank working space.
- Route: `src/pages/topic/simplify-calculations/index.astro`.

## Constraints

- Keep six pages with twelve problems on each page (3×4 grid).
- Keep two pages at each difficulty: easy, medium and hard.
- Store each problem as `factors` (numerator) and `divisors` (denominator); derive the answer and aria label from those arrays.
- Every division must be exact and every answer a whole number.
- Render the expression as a stacked fraction with `×` between factors; do not use an inline `÷`.
- Keep problem digits at 14pt and question numbers at 6.5pt.
- Do not shrink text to fix overflow — shorten factor lists instead.
- Answers must remain hidden until the viewer answer toggle is used and must not print.

## Sheet shape

```ts
{
  page: number;
  title: string;
  label: string;
  instruction: string;
  problems: readonly { factors: readonly number[]; divisors: readonly number[] }[];
}
```

## Verify

```powershell
npm run check
npm run check:layout -- --workbook=simplify-calculations
```
