# Worksheet Workbooks

Print-first maths worksheets built with Astro and TypeScript. Pick a topic on the home page, open the workbook, reveal answers on screen, and print A4 pages.

## Features

- **Home workbook picker** — choose multiplication, division, or any topic you add later
- **Printable A4 sheets** — exact `210mm × 297mm` pages with student name/date lines, tips, and score boxes
- **Answers toggle** — show/hide answers in the viewer; answers never print
- **One source of truth** — problem data lives in typed `data.ts`; markup and answers are derived from it
- **Isolated topics** — each workbook owns its components and styles, so changing one topic does not break another
- **Scoped layout checks** — Playwright verifies A4 size, clipping, and overflow for one workbook at a time

## Quick start

```powershell
npm install
npm run dev
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321). From the home page, open a workbook, then use **Answers** or **Print**.

### Other commands

| Command | Purpose |
| --- | --- |
| `npm run check` | TypeScript / Astro diagnostics |
| `npm run build` | Static production build into `dist/` |
| `npm run preview` | Serve the production build |
| `npm run check:layout` | A4 layout check for every workbook |
| `npm run check:layout -- --workbook=multiplication` | Layout check for one workbook |
| `npm run watch:layout -- --workbook=multiplication` | Re-check on save while editing one topic |

## Architecture

```text
src/
  pages/
    index.astro                      # home picker
    topic/<id>/index.astro           # one route per workbook
  workbooks/
    registry.ts                      # home-page catalog
    types.ts                         # shared workbook metadata types
    multiplication/                  # ready workbook
      data.ts                        # sheets + factor pairs
      MultiplicationSheet.astro
      MultiplicationProblem.astro
      AGENTS.md
    division/                        # template workbook
      data.ts
      DivisionSheet.astro
      DivisionProblem.astro
      AGENTS.md
  components/                        # shared A4 chrome
  layouts/                           # site + workbook layouts
scripts/
  check-layout.mjs                   # Playwright A4 checks
```

**How it fits together**

1. `registry.ts` lists workbooks on the home page.
2. Each workbook route imports only that topic’s `data.ts` and local sheet/problem components.
3. Shared layouts provide the viewer toolbar, A4 page frame, student details, and page number.
4. Topic-specific look and problem markup stay inside the workbook folder so styles do not leak across topics.

## Create worksheets with an LLM

Point the agent at this repo and the relevant `AGENTS.md` files. Prefer small, scoped edits and the targeted layout check.

### Add more pages to an existing workbook

Example prompt:

> Add 2 more pages to the multiplication workbook. Follow `src/workbooks/multiplication/AGENTS.md`. Put the new sheets in `data.ts` only, then run `npm run check:layout -- --workbook=multiplication`.

What the LLM should do:

1. Extend `src/workbooks/<id>/data.ts` with new sheet objects (`badge`, `tip`, `footer`, `problems`, optional `title` / `grid` / `workingLines`).
2. Leave shared layouts alone unless the A4 contract must change.
3. Run the **scoped** layout check for that workbook only.

### Create a new workbook (new topic)

Use the division folder as the template. Example prompt:

> Create an addition workbook by copying `src/workbooks/division/`. Add typed data, sheet/problem components, a route, and a registry entry. Follow root `AGENTS.md`. Verify with `npm run check` and `npm run check:layout -- --workbook=addition`.

Checklist the LLM should follow:

1. Copy `src/workbooks/division/` → `src/workbooks/<id>/` and rename types/components.
2. Fill `data.ts` with real problems for the topic.
3. Adjust `<Topic>Problem.astro` for the operation (symbol, aria label, answer formula).
4. Add `src/pages/topic/<id>/index.astro`.
5. Register the workbook in `src/workbooks/registry.ts`.
6. Write `src/workbooks/<id>/AGENTS.md`.
7. Run:

```powershell
npm run check
npm run check:layout -- --workbook=<id>
```

### Editing rules that keep LLM work fast

- Change content in `data.ts`, not by hand-editing generated HTML.
- Keep styles inside that workbook’s Astro components.
- Do not import another workbook’s components.
- After shared component/layout edits, run the **full** `npm run check:layout`.
- While iterating on one topic, use `--workbook=<id>` so other workbooks are not retested.

## Current workbooks

| Workbook | Status | Notes |
| --- | --- | --- |
| [Long Multiplication](/topic/multiplication/) | Ready | 22 pages, 540 questions |
| [Long Division](/topic/division/) | Template | One sample page to copy from |

More agent-oriented detail lives in root [`AGENTS.md`](AGENTS.md) and each workbook’s own `AGENTS.md`.
