# Geometry assessment workbook

Fourteen A4 11+ assessment pages covering triangles, quadrilaterals, polygons & circles, angles, position, transformations and 3D shapes. Each topic has 15 problems: 5 easy, 5 medium and 5 hard. Topics span two pages so diagrams stay readable — easy and medium on the first page, hard on the second.

## Files

- `data.ts` — prompts, diagrams, given values, answers and difficulty for all 105 problems.
- `types.ts` — `GeometryProblem` / `GeometrySheet` / topic, difficulty, format and diagram unions.
- `expression.ts` — format resolution, geometry text parsing and spoken accessibility labels.
- `GeometryDiagram.astro` — crisp SVG diagrams (triangles, quads, polygons, circles, angles, coordinate grids, compass, solids, nets).
- `GeometrySheet.astro` — page chrome and difficulty bands (skips empty bands on continued pages).
- `GeometryProblem.astro` — question card, diagram on the left, answer on the right, answer reveal and working space.
- Route: `src/pages/topic/geometry/index.astro`.

## Constraints

- Keep seven topics in this order: triangles → quadrilaterals → polygons & circles → angles → position → transformations → 3D shapes.
- Keep 15 problems per topic: exactly 5 easy, 5 medium and 5 hard, stored in that order. Split each topic across two pages (easy+medium, then hard).
- Continue question numbers 1–15 across a topic’s two pages using `questionOffset`.
- Every card keeps the same anatomy: numbered instruction, optional diagram on the left, given value(s), answer line on the right.
- Choose a `format`: `values` (default when `given` is set), `compare`, `expression`, or `text`.
- Write the instruction in `prompt` and the numbers in `given`; never mix numbers into the instruction. Omit `prompt` only for bare calculations. Word problems may keep numbers in `prompt`.
- Store a list of numbers as a `given` array so each value renders as its own chip.
- Positions 4 and 5 of each band render in wide cards — put the longest prompts, word problems and coordinate grids there.
- Use typographic operators (`×`, `÷`, `−`), `°` for angles, and `²` for area units (cm²).
- Given values and answers stay 14pt; question numbers stay 6.5pt.
- Do not shrink text to fix overflow — shorten a prompt instead, or let the topic continue on the next page.
- Answers stay hidden until the viewer toggle and must not print.

## Sheet shape

```ts
{
  page: number;
  title: string;
  label: string;
  topic:
    | "triangles"
    | "quadrilaterals"
    | "polygons-circles"
    | "angles"
    | "position"
    | "transformations"
    | "solids-3d";
  instruction: string;
  questionOffset?: number;
  problems: readonly {
    difficulty: "easy" | "medium" | "hard";
    prompt?: string;
    given?: string | readonly string[];
    format?: "values" | "compare" | "expression" | "text";
    diagram?: GeometryDiagram;
    answer: string;
  }[];
}
```

## Verify

```powershell
npm run check
npm run check:layout -- --workbook=geometry
```
