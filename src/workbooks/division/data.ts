import type { DivisionSheet } from "./types";

/** Exact 3-digit ÷ single-digit long division (whole-number quotients). */
export const sheets = [
  {
    page: 1,
    title: "Long Division",
    label: "Long division",
    problems: [
      [356, 4],
      [245, 7],
      [486, 6],
      [768, 2],
      [594, 9],
      [925, 5],
      [384, 8],
      [774, 3],
      [696, 6],
      [343, 7],
      [456, 4],
      [681, 3],
      [168, 8],
      [279, 9],
      [512, 8],
      [639, 3],
      [864, 6],
      [728, 4],
      [945, 5],
      [816, 2]
    ]
  }
] satisfies readonly DivisionSheet[];
