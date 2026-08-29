# Basics assessment workbook

Six A4 11+ assessment pages covering place value, ordering, Roman numerals, rounding, negative numbers and BIDMAS. Each page has 15 problems: 5 easy, 5 medium and 5 hard, grouped in labelled bands.

## Files

- `data.ts` — prompts, answers and difficulty for all 90 problems.
- `types.ts` — `BasicsProblem` / `BasicsSheet` / topic and difficulty unions.
- `expression.ts` — display mode and accessible prompt helpers.
- `BasicsSheet.astro` — page chrome and three difficulty bands.
- `BasicsProblem.astro` — prompt or 14pt expression, answer reveal and working space.
- Route: `src/pages/topic/basics/index.astro`.

## Constraints

- Keep six topic pages in this order: place value → order and compare → Roman numerals → rounding → negative numbers → BIDMAS.
- Keep 15 problems per page: exactly 5 easy, 5 medium and 5 hard, stored in that order.
- Store each problem as `{ difficulty, prompt, answer, display? }`. Use `display: "expression"` for bare calculations.
- Use typographic operators (`×`, `÷`, `−`) and superscript `²` for indices.
- Keep BIDMAS answers as whole numbers. Halfway rounding values round up.
- Roman numerals stay within KS2 range (I to M, values to 1,000).
- Expression and answer digits stay 14pt; question numbers stay 6.5pt.
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
    prompt: string;
    answer: string;
    display?: "prompt" | "expression";
  }[];
}
```

## Verify

```powershell
npm run check
npm run check:layout -- --workbook=basics
```
