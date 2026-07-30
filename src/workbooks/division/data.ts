import type { DivisionSheet } from "./types";

/** Exact long division sheets (whole-number quotients). */
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
  },
  {
    page: 2,
    title: "Long Division",
    label: "Long division",
    problems: [
      [1452, 4],
      [2367, 3],
      [3848, 8],
      [5675, 5],
      [6729, 9],
      [4816, 8],
      [3528, 6],
      [2947, 7],
      [8192, 2],
      [4536, 6],
      [7389, 3],
      [1568, 4],
      [9270, 9],
      [5832, 8],
      [4158, 6],
      [7644, 4]
    ]
  }
] satisfies readonly DivisionSheet[];
