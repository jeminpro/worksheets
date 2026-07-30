import type { PositiveNegativeSheet } from "./types";

/** Progressive integer addition and subtraction, easy through harder. */
export const sheets = [
  {
    page: 1,
    title: "Positive & Negative: Easy",
    label: "Positive and negative easy",
    instruction: "Add and subtract from left to right. Start with small numbers.",
    problems: [
      [5, 3, -2],
      [8, -4, 1],
      [-3, 7, -1],
      [6, -2, -3],
      [9, 5, -8],
      [-4, 6, 2],
      [7, -9, 4],
      [-5, -2, 9],
      [10, -3, -4],
      [-8, 5, 6],
      [4, 8, -7],
      [-2, -6, 10],
      [12, -5, -3],
      [-7, 9, -1],
      [3, -8, 5]
    ]
  },
  {
    page: 2,
    title: "Positive & Negative: Warm-up",
    label: "Positive and negative warm-up",
    instruction: "Keep working left to right. Watch for negative starts.",
    problems: [
      [14, 6, -9],
      [-8, 12, -3],
      [20, -15, 4],
      [-11, -5, 18],
      [16, -7, -8],
      [-9, 15, 2],
      [25, -10, -6],
      [-18, 7, 9],
      [13, -20, 5],
      [-6, -14, 22],
      [28, -12, -9],
      [-15, 20, -4],
      [19, -8, -11],
      [-22, 10, 8],
      [17, -25, 6]
    ]
  },
  {
    page: 3,
    title: "Positive & Negative Numbers",
    label: "Positive and negative numbers",
    instruction: "Add and subtract from left to right.",
    problems: [
      [7, 5, -12],
      [-6, 9, -4],
      [15, -20, 3],
      [-8, -7, 10],
      [25, -30, -5],
      [-14, 6, 9],
      [40, -15, -30],
      [-50, 25, -10],
      [18, -22, -6],
      [-35, 12, 8],
      [60, -75, 5],
      [-100, 40, -15],
      [32, -18, -25],
      [-45, -5, 60],
      [90, -120, 15]
    ]
  },
  {
    page: 4,
    title: "Positive & Negative: Medium",
    label: "Positive and negative medium",
    instruction: "Larger jumps — stay careful with consecutive minuses.",
    problems: [
      [45, -28, -17],
      [-36, 50, -12],
      [72, -40, -25],
      [-55, -18, 80],
      [63, -90, 15],
      [-48, 22, 19],
      [85, -35, -40],
      [-70, 45, -20],
      [54, -66, 8],
      [-92, 30, 50],
      [110, -65, -30],
      [-38, -42, 95],
      [76, -58, -24],
      [-84, 60, -15],
      [95, -120, 18]
    ]
  },
  {
    page: 5,
    title: "Positive & Negative: Challenge",
    label: "Positive and negative challenge",
    instruction: "Cross zero often. Check the sign of each step.",
    problems: [
      [125, -80, -55],
      [-90, 140, -35],
      [160, -95, -48],
      [-110, -40, 175],
      [85, -150, 40],
      [-135, 70, 55],
      [200, -125, -60],
      [-75, -95, 180],
      [145, -180, 25],
      [-160, 85, 70],
      [220, -90, -95],
      [-48, -132, 200],
      [175, -210, 30],
      [-155, 100, -45],
      [190, -250, 40]
    ]
  },
  {
    page: 6,
    title: "Positive & Negative: Harder",
    label: "Positive and negative harder",
    instruction: "Big values and tricky sign patterns — work carefully left to right.",
    problems: [
      [240, -175, -90],
      [-210, 165, -55],
      [280, -140, -125],
      [-195, -85, 310],
      [150, -265, 80],
      [-230, 120, 95],
      [320, -180, -160],
      [-145, -175, 350],
      [255, -300, 40],
      [-270, 140, 115],
      [310, -155, -170],
      [-95, -225, 340],
      [285, -350, 55],
      [-260, 185, -90],
      [360, -420, 75]
    ]
  }
] satisfies readonly PositiveNegativeSheet[];
