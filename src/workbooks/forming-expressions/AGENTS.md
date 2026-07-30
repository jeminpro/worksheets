# Forming expressions workbook

Six A4 word-problem sheets for translating situations into algebraic expressions. Pages 1–2 are easy, pages 3–4 are medium, and pages 5–6 are hard.

## Files

- `data.ts` — prompts and expression trees for all 36 problems.
- `types.ts` — recursive expression and sheet types.
- `expression.ts` — expression constructors plus visual and spoken formatting.
- `FormingExpressionsSheet.astro` — page header and six-row layout.
- `FormingExpressionProblem.astro` — word problem, answer reveal and blank working space.
- Route: `src/pages/topic/forming-expressions/index.astro`.

## Constraints

- Keep six pages with six full-width problems on each page.
- Keep two pages at each difficulty: easy, medium and hard.
- Each problem must state the meaning of every variable it uses.
- Store answers as expression trees and derive displayed and spoken expressions from them.
- Use conventional algebraic notation: omit multiplication signs before variables and brackets.
- Use a typographic minus (`−`) in displayed expressions.
- Keep expression answers at 14pt and question numbers at 6.5pt.
- Do not add dotted working lines; leave blank space for writing.
- Answers must remain hidden until the viewer answer toggle is used and must not print.
- Do not shrink text to fix overflow; shorten a prompt instead.

## Verify

```powershell
npm run check
npm run check:layout -- --workbook=forming-expressions
```
