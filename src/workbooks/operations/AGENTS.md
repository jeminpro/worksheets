# Operations assessment workbook

Twelve A4 11+ assessment pages covering written addition, subtraction, multiplication, division, mental calculations, squares/cubes, multiples, factors, primes, estimating, and worded problems. Each page has 15 problems: 5 easy, 5 medium and 5 hard, grouped in labelled bands.

## Files

- `data.ts` — prompts, given values, answers and difficulty for all 180 problems.
- `types.ts` — `OperationsProblem` / `OperationsSheet` / topic, difficulty and format unions.
- `expression.ts` — format resolution, given-value normalising and spoken labels.
- `OperationsSheet.astro` — page chrome and three difficulty bands.
- `OperationsProblem.astro` — question card, answer reveal and working space.
- Route: `src/pages/topic/operations/index.astro`.

## Constraints

- Keep twelve topic pages in this order: written addition → written subtraction → written multiplication → written division → mental add/sub → mental mul/div → square & cube numbers → multiples → factors → prime numbers & factor trees → estimating → worded number problems.
- Keep 15 problems per page: exactly 5 easy, 5 medium and 5 hard, stored in that order.
- Every card keeps the same anatomy: numbered instruction, given value(s), answer line.
- Choose a `format`: `values` (default when `given` is set), `compare`, `expression`, or `text`.
- Write the instruction in `prompt` and the numbers in `given`; never mix numbers into the instruction. Omit `prompt` only for bare calculations.
- Store a list of numbers as a `given` array so each value renders as its own chip.
- Positions 4 and 5 of each band render in wide cards — put the longest prompts and calculations there.
- Use typographic operators (`×`, `÷`, `−`), `<` / `>` for comparisons, `²` and `³` for powers, and `√` / `∛` for roots.
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
    | "written-addition"
    | "written-subtraction"
    | "written-multiplication"
    | "written-division"
    | "mental-add-sub"
    | "mental-mul-div"
    | "square-cube"
    | "multiples"
    | "factors"
    | "primes-factors"
    | "estimating"
    | "worded-problems";
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
npm run check:layout -- --workbook=operations
```
