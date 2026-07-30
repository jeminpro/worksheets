# Division workbook

One A4 page of bus-stop long division: single-digit divisors into 3-digit dividends, in a 4×5 grid of problem cards with quotient space above the bar and working space below.

## Files

- `data.ts` — exact `[dividend, divisor]` pairs (whole-number quotients only). 20 problems per page.
- `types.ts` — `DivisionSheet` / `DivisionPair`.
- `DivisionSheet.astro` — page chrome, header, fixed 4×5 grid that fills the page.
- `DivisionProblem.astro` — bus-stop notation inside each card; answer is `dividend / divisor`.
- Route: `src/pages/workbooks/division/index.astro`.

## Constraints

- Dividend is always 3 digits (100–999).
- Divisor is always a single digit (2–9).
- Divisions must be exact so revealed answers are whole numbers.
- Digits stay 14pt; question numbers stay 6.5pt.
- Keep the classic bus-stop look (divisor, curve, overline, dividend) with empty work space under the bracket.
- Do not shrink text to fix overflow — reduce problem count or grid density instead.

## Sheet shape

```ts
{
  page: number;
  problems: readonly [number, number][]; // 20 for a full 4×5 page
  title?: string;
  label?: string;
}
```

## Verify

```powershell
npm run check:layout -- --workbook=division
```
