# Subtraction workbook

8 A4 pages of column subtraction. Pages 1–2 are three-digit minus two- or three-digit (30 questions, 5×6). Pages 3–6 are four-digit minus three- or four-digit (25 questions, 5×5). Pages 7–8 are five-digit minus four- or five-digit (25 questions, 5×5). Each card has borrow space above the stack.

## Files

- `data.ts` — `[top, bottom]` pairs (minuend first).
- `types.ts` — `SubtractionSheet` / `MinuendPair`.
- `SubtractionSheet.astro` — page chrome, header, grid.
- `SubtractionProblem.astro` — stacked subtraction; answer is `top - bottom`.
- Route: `src/pages/topic/subtraction/index.astro`.

## Constraints

- Top number is always larger than the bottom, so answers never go negative.
- Pages 1–2: top is 3 digits (100–999); bottom is 2 or 3 digits; 30 problems in a 5×6 grid.
- Pages 3–6: top is 4 digits (1000–9999); bottom is 3 or 4 digits; 25 problems in a 5×5 grid (`problem-grid-25`).
- Pages 7–8: top is 5 digits (10000–99999); bottom is 4 or 5 digits; 25 problems in a 5×5 grid (`problem-grid-25`).
- Most pairs require borrowing; keep a few without so the pages stay mixed.
- Digits stay 14pt; question numbers stay 6.5pt.
- Keep borrow space above the stack and room under the answer rule for the difference.
- Do not shrink text to fix overflow — reduce problem count or grid density instead.

## Sheet shape

```ts
{
  page: number;
  problems: readonly [number, number][]; // 30 for 5×6, 25 for 5×5
  title?: string;
  label?: string;
  grid?: "problem-grid-25";
}
```

## Verify

```powershell
npm run check:layout -- --workbook=subtraction
```
