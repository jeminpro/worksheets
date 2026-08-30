# Algebra assessment workbook

Four A4 11+ assessment pages covering simple sequences, substitution, solving equations, and forming expressions. Each page has 15 problems: 5 easy, 5 medium and 5 hard, grouped in labelled bands with vector diagram support (matchstick patterns, function machines, balance scales, algebraic geometry shapes).

## Files

- `data.ts` — prompts, diagrams, given values, answers and difficulty for all 60 problems.
- `types.ts` — `AlgebraProblem` / `AlgebraSheet` / topic, difficulty, format and diagram unions.
- `expression.ts` — format resolution, algebraic text parsing and spoken accessibility labels.
- `AlgebraDiagram.astro` — crisp SVG geometric diagrams and function machines (matchstick sequences, function machines, balance scales, algebraic shapes).
- `AlgebraSheet.astro` — page chrome and three difficulty bands.
- `AlgebraProblem.astro` — question card, diagram integration (drawing on left, answer on right), answer reveal and working space.
- Route: `src/pages/topic/algebra/index.astro`.

## Constraints

- Keep four topic pages in this order: simple sequences → substitution → solving equations → forming expressions.
- Keep 15 problems per page: exactly 5 easy, 5 medium and 5 hard, stored in that order.
- Every card keeps the same anatomy: numbered instruction, optional diagram on the left, given value(s), answer line on the right.
- Choose a `format`: `values` (default when `given` is set), `compare`, `expression`, or `text`.
- Write the instruction in `prompt` and the numbers/equations in `given`; never mix numbers into the instruction. Omit `prompt` only for bare calculations.
- Store a list of numbers as a `given` array so each value renders as its own chip.
- Positions 4 and 5 of each band render in wide cards — put the longest prompts and calculations there.
- Use typographic operators (`×`, `÷`, `−`), `<` / `>` for comparisons, `²` and `³` for powers.
- Given values and answers stay 13.5–14pt; question numbers stay 6.5pt.
- Do not shrink text to fix overflow — shorten a prompt instead.
- Answers stay hidden until the viewer toggle and must not print.

## Sheet shape

```ts
{
  page: number;
  title: string;
  label: string;
  topic:
    | "simple-sequences"
    | "substitution"
    | "solving-equations"
    | "forming-expressions";
  instruction: string;
  problems: readonly {
    difficulty: "easy" | "medium" | "hard";
    prompt?: string;
    given?: string | readonly string[];
    format?: "values" | "compare" | "expression" | "text";
    diagram?: AlgebraDiagram;
    answer: string;
  }[];
}
```

## Verify

```powershell
npm run check
npm run check:layout -- --workbook=algebra
```
