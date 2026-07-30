# Division workbook

A4 pages of bus-stop long division. Page 1 is single-digit divisors into 3-digit dividends (4×5). Page 2 is single-digit divisors into 4-digit dividends (4×4). Pages 3–4 are two-digit divisors into 5-digit dividends (4×3). Each card has quotient space above the bar and working space below.

## Files

- `data.ts` — exact `[dividend, divisor]` pairs (whole-number quotients only).
- `types.ts` — `DivisionSheet` / `DivisionPair`.
- `DivisionSheet.astro` — page chrome, header, 4-column grid with row count from problem count.
- `DivisionProblem.astro` — bus-stop notation inside each card; answer is `dividend / divisor`.
- Route: `src/pages/topic/division/index.astro`.

## Constraints

- Page 1: dividend is 3 digits (100–999); 20 problems in a 4×5 grid.
- Page 2: dividend is 4 digits (1000–9999); 16 problems in a 4×4 grid.
- Pages 3–4: dividend is 5 digits (10000–99999), divisor is 2 digits; 12 problems in a 4×3 grid.
- Divisions must be exact so revealed answers are whole numbers.
- Digits stay 14pt; question numbers stay 6.5pt.
- Keep the classic bus-stop look (divisor, curve, overline, dividend) with empty work space under the bracket.
- Do not shrink text to fix overflow — reduce problem count or grid density instead.

## Sheet shape

```ts
{
  page: number;
  problems: readonly [number, number][]; // 20 for 4×5, 16 for 4×4, 12 for 4×3
  title?: string;
  label?: string;
}
```

## Verify

```powershell
npm run check:layout -- --workbook=division
```
