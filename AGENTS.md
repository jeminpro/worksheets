# Worksheet workbooks agent guide

Astro + TypeScript print-first site. Each maths topic is an isolated workbook with typed problem data, local components/styles, and a home-page registry entry.

## Commands

```powershell
npm run dev
npm run check
npm run build
npm run check:layout
npm run check:layout -- --workbook=multiplication
npm run watch:layout -- --workbook=multiplication
```

- `npm run check` — TypeScript/Astro diagnostics only.
- `npm run check:layout -- --workbook=<id>` — browser A4 layout check for one workbook. Prefer this while editing a topic.
- Full `npm run check:layout` — required after shared component/layout edits, or before finishing a multi-workbook change.

## Project map

- `src/pages/index.astro` — home picker.
- `src/workbooks/registry.ts` — workbook cards on the home page.
- `src/workbooks/<id>/` — topic data, components, and `AGENTS.md`.
- `src/pages/topic/<id>/index.astro` — workbook route.
- `src/components/` and `src/layouts/` — shared A4 shell, toolbar, details, page number.
- `scripts/check-layout.mjs` — Playwright A4 checks against the Astro server.

## Add a workbook

1. Copy `src/workbooks/division/` to `src/workbooks/<id>/` and rename the local components/types.
2. Add `src/pages/topic/<id>/index.astro` that imports only that workbook’s data/components.
3. Register metadata in `src/workbooks/registry.ts`, including a `group` (`written-methods` | `quick-practice` | `number-skills` | `algebra` | `assessment`).
4. Write `src/workbooks/<id>/AGENTS.md`.
5. Run `npm run check` and `npm run check:layout -- --workbook=<id>`.

## Ownership boundary

- Edit shared files only when changing the A4 contract or viewer chrome. Shared edits require a full layout check.
- Keep topic styles inside that workbook’s Astro components. Do not import another workbook’s components.
- Avoid `:global()` for workbook-specific rules.
- Content lives once in `data.ts`. Answers and aria labels are derived from the same tuples.

## A4 invariants

- `.page` remains exactly `210mm × 297mm`.
- `@page` remains `size: A4` with `margin: 0`.
- `.page-inner` stays a four-row grid: `20mm 12mm minmax(0, 1fr) 8mm`.
- Do not shrink text to fix overflow. Problem digits stay `14pt`; question numbers stay `6.5pt`.
- Viewer chrome and revealed answers must not print.
- On screen, `.page-frame` may scale sheets to fit the viewport width; print and layout checks stay unscaled A4.
