# Basics assessment workbook

Six A4 11+ assessment pages covering place value, ordering, Roman numerals, rounding, negative numbers and BIDMAS. Each page has 15 problems: 5 easy, 5 medium and 5 hard, grouped in labelled bands.

## Files

- `data.ts` — prompts, given values, answers and difficulty for all 90 problems.
- `types.ts` — `BasicsProblem` / `BasicsSheet` / topic, difficulty and format unions.
- `expression.ts` — format resolution, given-value normalising and spoken labels.
- `BasicsSheet.astro` — page chrome and three difficulty bands.
- `BasicsProblem.astro` — question card, answer reveal and working space.
- Route: `src/pages/topic/basics/index.astro`.

## Constraints

- Keep six topic pages in this order: place value → order and compare → Roman numerals → rounding → negative numbers → BIDMAS.
- Keep 15 problems per page: exactly 5 easy, 5 medium and 5 hard, stored in that order.
- Every card keeps the same anatomy: numbered instruction, given value(s), answer line.
- Choose a `format`: `values` (default when `given` is set), `compare`, `expression`, or `text`.
- Write the instruction in `prompt` and the numbers in `given`; never mix numbers into the instruction. Omit `prompt` only for bare calculations.
- Store a list of numbers as a `given` array so each value renders as its own chip.
- Positions 4 and 5 of each band render in wide cards — put the longest prompts and calculations there.
- Use typographic operators (`×`, `÷`, `−`), `<` / `>` for comparisons, and superscript `²` for indices.
- Keep BIDMAS answers as whole numbers. Halfway rounding values round up.
- Roman numerals stay within KS2 range (I to M, values to 1,000).
- Given values and answers stay 14pt; question numbers stay 6.5pt.
- Do not shrink text to fix overflow — shorten a prompt instead.
- Answers stay hidden until the viewer toggle and must not print.

## Sheet shape

```ts
{
  page: number;
  title: string;
  label: string;
  topic: "place-value" | "order-compare" | "roman-numerals" | "rounding" | "negative-numbers" | "bidmas";
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
npm run check:layout -- --workbook=basics
```
