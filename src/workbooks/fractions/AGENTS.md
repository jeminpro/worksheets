# Fractions assessment workbook

Five A4 11+ assessment pages covering calculating fractions, adding & subtracting, equivalent fractions, mixed numbers & improper fractions, and ordering & comparing fractions. Each page has 15 problems: 5 easy, 5 medium and 5 hard, grouped in labelled bands.

## Files

- `data.ts` — prompts, given values, answers and difficulty for all 75 problems.
- `types.ts` — `FractionsProblem` / `FractionsSheet` / topic, difficulty and format unions.
- `expression.ts` — format resolution, fraction parsing and spoken accessibility labels.
- `FractionText.astro` — mixed number and stacked fraction parser/renderer.
- `FractionsSheet.astro` — page chrome and three difficulty bands.
- `FractionsProblem.astro` — question card, answer reveal and working space.
- Route: `src/pages/topic/fractions/index.astro`.

## Constraints

- Keep five topic pages in this order: calculating fractions → adding & subtracting → equivalent fractions → mixed & improper fractions → order & compare.
- Keep 15 problems per page: exactly 5 easy, 5 medium and 5 hard, stored in that order.
- Every card keeps the same anatomy: numbered instruction, given value(s), answer line.
- Choose a `format`: `values` (default when `given` is set), `compare`, `expression`, or `text`.
- Write the instruction in `prompt` and the numbers in `given`; never mix numbers into the instruction. Omit `prompt` only for bare calculations.
- Store a list of numbers as a `given` array so each value renders as its own chip.
- Positions 4 and 5 of each band render in wide cards — put the longest prompts and calculations there.
- Use typographic operators (`×`, `÷`, `−`), `<` / `>` for comparisons.
- Given values and answers stay 14pt; question numbers stay 6.5pt.
- Do not shrink text to fix overflow — shorten a prompt instead.
- Answers stay hidden until the viewer toggle and must not print.

## Sheet shape

```ts
{
  page: number;
  title: string;
  label: string;
  topic:
    | "calculating-fractions"
    | "adding-subtracting"
    | "equivalent-fractions"
    | "mixed-improper"
    | "order-compare";
  instruction: string;
  problems: readonly {
    difficulty: "easy" | "medium" | "hard";
    prompt?: string;
    given?: string | readonly string[];
    format?: "values" | "compare" | "expression" | "text";
    answer: string;
  }[];
}
```

## Verify

```powershell
npm run check
npm run check:layout -- --workbook=fractions
```
