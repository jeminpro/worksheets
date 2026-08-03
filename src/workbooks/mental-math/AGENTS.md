# Mental maths workbook

Eight A4 pages of two-digit mental calculation. Pages 1–4 each focus on one strategy (partitioning, compensation, bridging, difference). Pages 5–8 mix all four methods. Each page has 12 problems in a 3×4 grid with working space.

## Files

- `data.ts` — `[left, right, op]` tuples and sheet instructions.
- `types.ts` — `MentalMathSheet` / `MentalMathProblem` / method union.
- `expression.ts` — answer and accessible label helpers derived from the same tuples.
- `MentalMathSheet.astro` — page chrome, instruction, 3×4 grid.
- `MentalMathProblem.astro` — horizontal sum/difference, answer reveal, working space.
- Route: `src/pages/topic/mental-math/index.astro`.

## Constraints

- Keep eight pages: partitioning → compensation → bridging → difference → four mixed.
- Keep 12 problems per page in a 3×4 grid.
- Store each problem as `[left, right, "+" | "-"]`; derive the answer from that tuple.
- Subtraction must keep a non-negative answer (`left ≥ right`).
- Use a typographic minus (`−`) in displayed expressions.
- Digits stay 14pt; question numbers stay 6.5pt.
- Leave blank working space; do not add dotted lines.
- Do not shrink text to fix overflow — shorten the instruction or reduce density instead.

## Sheet shape

```ts
{
  page: number;
  title: string;
  label: string;
  method: "partitioning" | "compensation" | "bridging" | "difference" | "mixed";
  instruction: string;
  problems: readonly [number, number, "+" | "-"][];
}
```

## Verify

```powershell
npm run check
npm run check:layout -- --workbook=mental-math
```
