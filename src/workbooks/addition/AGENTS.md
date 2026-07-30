# Addition workbook

6 A4 pages of long addition. Pages 1–2 are three-digit plus two- or three-digit (30 questions, 5×6). Pages 3–6 are four-digit plus three- or four-digit (25 questions, 5×5). Each card has carry space above the stack.

## Files

- `data.ts` — `[top, bottom]` addend pairs.
- `types.ts` — `AdditionSheet` / `AddendPair`.
- `AdditionSheet.astro` — page chrome, header, grid.
- `AdditionProblem.astro` — stacked addition; answer is `top + bottom`.
- Route: `src/pages/topic/addition/index.astro`.

## Constraints

- Pages 1–2: top is 3 digits (100–999); bottom is 2 or 3 digits; 30 problems in a 5×6 grid.
- Pages 3–6: top is 4 digits (1000–9999); bottom is 3 or 4 digits; 25 problems in a 5×5 grid (`problem-grid-25`).
- Digits stay 14pt; question numbers stay 6.5pt.
- Keep carry space above the stack and room under the answer rule for the sum.
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
npm run check:layout -- --workbook=addition
```
