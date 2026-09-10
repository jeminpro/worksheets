# Comparing numbers workbook

A4 practice for writing `<`, `>` or `=` between two numbers. Six pages: two of whole numbers, two of decimals, two of fractions. Each page has easy, medium and hard bands.

## Files

- `data.ts` — left/right operands; answers are derived by comparing numeric values.
- `types.ts` — `ComparingOperand` / `ComparingProblem` / `ComparingNumbersSheet`.
- `layout.ts` — row counts for each kind and difficulty band (always 3 columns).
- `expression.ts` — numeric value, comparison sign, display text and spoken labels.
- `FractionText.astro` — stacked fraction renderer for fraction pages.
- `ComparingNumbersSheet.astro` — page chrome and three difficulty bands.
- `ComparingNumbersProblem.astro` — two values with a sign box between them.
- Route: `src/pages/topic/comparing-numbers/index.astro`.

## Constraints

- Keep six pages in this order: whole numbers A → whole numbers B → decimals A → decimals B → fractions A → fractions B.
- Store operands as typed values (`whole`, `decimal` text, or `fraction` parts); never store the answer separately.
- Decimal `text` keeps trailing zeros so `0.70` and `0.7` can compare as equal.
- Every band uses **3 columns**. Fill extra space with more rows, not more columns.
- Whole-number and decimal cards stay compact (no working space). Fraction cards keep working space.
- Problem counts must match the layout for that kind:

| Kind | Easy | Medium | Hard |
| --- | --- | --- | --- |
| Whole | 3×5 = 15 | 3×4 = 12 | 3×4 = 12 |
| Decimal | 3×5 = 15 | 3×4 = 12 | 3×4 = 12 |
| Fraction | 3×4 = 12 | 3×3 = 9 | 3×2 = 6 |

- Set column counts with a real `repeat(3, …)` class, not a CSS variable.
- Use typographic `<` / `>` / `=` in revealed answers.
- Problem digits stay 14pt; question numbers stay 6.5pt.
- Do not shrink text to fix overflow — reduce a number’s digits or grid density instead.
- Answers stay hidden until the viewer toggle and must not print.

## Sheet shape

```ts
{
  page: number;
  title: string;
  label: string;
  kind: "whole" | "decimal" | "fraction";
  instruction: string;
  problems: readonly {
    difficulty: "easy" | "medium" | "hard";
    left: ComparingOperand;
    right: ComparingOperand;
  }[];
}
```

## Verify

```powershell
npm run check
npm run check:layout -- --workbook=comparing-numbers
```
