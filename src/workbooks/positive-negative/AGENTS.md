# Positive and negative numbers workbook

A4 practice for adding and subtracting positive and negative integers. Six pages progress from easy small-number work through medium three-term practice into larger, trickier sign patterns. Each page has 15 problems in a 3×5 grid.

## Files

- `data.ts` — exact three-number tuples; display operators and answers are derived from each tuple.
- `types.ts` — `IntegerExpression` / `PositiveNegativeSheet`.
- `PositiveNegativeSheet.astro` — page header, instruction and 3×5 grid.
- `PositiveNegativeProblem.astro` — formatted signed expression, answer reveal and working space.
- Route: `src/pages/topic/positive-negative/index.astro`.

## Constraints

- Keep six progressive pages, each with 15 problems in a 3×5 grid.
- Page 1 easy (small values) → page 2 warm-up → page 3 core practice → page 4 medium → page 5 challenge → page 6 harder.
- Store each expression as `[first, second, third]`; negative later terms render as subtraction.
- Use typographic minus signs (`−`) in displayed expressions and answers.
- Derive each answer from the tuple rather than storing it separately.
- Keep values within three digits so 14pt expressions fit without wrapping.
- Problem expressions stay 14pt; question numbers stay 6.5pt.
- Do not shrink text to fix overflow — reduce expression length or grid density instead.

## Sheet shape

```ts
{
  page: number;
  title: string;
  label: string;
  instruction: string;
  problems: readonly [number, number, number][];
}
```

## Verify

```powershell
npm run check
npm run check:layout -- --workbook=positive-negative
```
