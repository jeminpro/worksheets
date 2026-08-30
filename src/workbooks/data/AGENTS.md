# Data assessment workbook

Eight A4 11+ assessment pages covering pictograms, bar charts, line graphs, pie charts, tables, Venn diagrams, mean, and mode/median/range. Each page has 15 problems: 5 easy, 5 medium and 5 hard, grouped in labelled bands with vector diagram and table support.

## Files

- `data.ts` — prompts, diagrams, given values, answers and difficulty for all 120 problems.
- `types.ts` — `DataProblem` / `DataSheet` / topic, difficulty, format and diagram unions.
- `expression.ts` — format resolution, text parsing and spoken accessibility labels.
- `DataDiagram.astro` — crisp SVG charts and tables (pictograms, bar charts, line graphs, pie charts, tables, Venn diagrams, Carroll diagrams).
- `DataSheet.astro` — page chrome and three difficulty bands.
- `DataProblem.astro` — question card, diagram integration (drawing on left, answer on right), answer reveal and working space.
- Route: `src/pages/topic/data/index.astro`.

## Constraints

- Keep eight topic pages in this order: pictograms → bar charts → line graphs → pie charts → tables → Venn diagrams → mean → mode/median/range.
- Keep 15 problems per page: exactly 5 easy, 5 medium and 5 hard, stored in that order.
- Every card keeps the same anatomy: numbered instruction, optional diagram on the left, given value(s), answer line on the right.
- Choose a `format`: `values` (default when `given` is set), `compare`, `expression`, or `text`.
- Write the instruction in `prompt` and the numbers in `given`; never mix numbers into the instruction. Omit `prompt` only for bare calculations.
- Store a list of numbers as a `given` array so each value renders as its own chip.
- Positions 4 and 5 of each band render in wide cards — put the longest prompts and calculations there.
- Use typographic operators (`×`, `÷`, `−`), `<` / `>` for comparisons, `²` and `³` for units.
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
    | "pictograms"
    | "bar-charts"
    | "line-graphs"
    | "pie-charts"
    | "tables"
    | "venn-diagrams"
    | "mean"
    | "mode-median-range";
  instruction: string;
  problems: readonly {
    difficulty: "easy" | "medium" | "hard";
    prompt?: string;
    given?: string | readonly string[];
    format?: "values" | "compare" | "expression" | "text";
    diagram?: DataDiagram;
    answer: string;
  }[];
}
```

## Verify

```powershell
npm run check
npm run check:layout -- --workbook=data
```
