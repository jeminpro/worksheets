# Measurement assessment workbook

Seven A4 11+ assessment pages covering length & perimeter, money, time, metric units, area, volume, and imperial units. Each page has 15 problems: 5 easy, 5 medium and 5 hard, grouped in labelled bands with vector diagram support.

## Files

- `data.ts` — prompts, diagrams, given values, answers and difficulty for all 105 problems.
- `types.ts` — `MeasurementProblem` / `MeasurementSheet` / topic, difficulty, format and diagram unions.
- `expression.ts` — format resolution, measurement text parsing and spoken accessibility labels.
- `MeasurementDiagram.astro` — crisp SVG geometric diagrams (rectangles, triangles, compound L-shapes, cuboids, cubes, clocks, parallelograms, trapeziums).
- `MeasurementSheet.astro` — page chrome and three difficulty bands.
- `MeasurementProblem.astro` — question card, diagram integration, answer reveal and working space.
- Route: `src/pages/topic/measurement/index.astro`.

## Constraints

- Keep seven topic pages in this order: length & perimeter → money → time → metric units → area → volume → imperial units.
- Keep 15 problems per page: exactly 5 easy, 5 medium and 5 hard, stored in that order.
- Every card keeps the same anatomy: numbered instruction, optional diagram, given value(s), answer line.
- Choose a `format`: `values` (default when `given` is set), `compare`, `expression`, or `text`.
- Write the instruction in `prompt` and the numbers in `given`; never mix numbers into the instruction. Omit `prompt` only for bare calculations.
- Store a list of numbers as a `given` array so each value renders as its own chip.
- Positions 4 and 5 of each band render in wide cards — put the longest prompts and calculations there.
- Use typographic operators (`×`, `÷`, `−`), `<` / `>` for comparisons, `²` and `³` for units (cm², m³, etc.).
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
    | "length-perimeter"
    | "money"
    | "time"
    | "metric-units"
    | "area"
    | "volume"
    | "imperial-units";
  instruction: string;
  problems: readonly {
    difficulty: "easy" | "medium" | "hard";
    prompt?: string;
    given?: string | readonly string[];
    format?: "values" | "compare" | "expression" | "text";
    diagram?: MeasurementDiagram;
    answer: string;
  }[];
}
```

## Verify

```powershell
npm run check
npm run check:layout -- --workbook=measurement
```
