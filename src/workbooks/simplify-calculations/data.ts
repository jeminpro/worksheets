import type { SimplifyCalculationsSheet } from "./types";

/**
 * Cancel common factors, then evaluate.
 * Easy: a×b / c · Medium: three factors total · Hard: multi-factor top and bottom.
 */
export const sheets = [
  {
    page: 1,
    title: "Simplify Calculations: Easy",
    label: "Simplify calculations easy practice",
    instruction: "Cancel common factors, then work out the value.",
    problems: [
      { factors: [25, 21], divisors: [35] },
      { factors: [16, 15], divisors: [20] },
      { factors: [18, 14], divisors: [21] },
      { factors: [24, 15], divisors: [20] },
      { factors: [12, 25], divisors: [20] },
      { factors: [9, 28], divisors: [21] },
      { factors: [15, 16], divisors: [12] },
      { factors: [8, 35], divisors: [14] },
      { factors: [27, 20], divisors: [15] },
      { factors: [14, 18], divisors: [21] },
      { factors: [10, 21], divisors: [14] },
      { factors: [16, 21], divisors: [28] }
    ]
  },
  {
    page: 2,
    title: "Simplify Calculations: Easy",
    label: "Simplify calculations easy practice",
    instruction: "Cancel common factors, then work out the value.",
    problems: [
      { factors: [22, 15], divisors: [10] },
      { factors: [21, 16], divisors: [28] },
      { factors: [35, 12], divisors: [21] },
      { factors: [18, 25], divisors: [15] },
      { factors: [28, 9], divisors: [21] },
      { factors: [20, 21], divisors: [28] },
      { factors: [15, 24], divisors: [18] },
      { factors: [14, 25], divisors: [10] },
      { factors: [27, 14], divisors: [21] },
      { factors: [16, 35], divisors: [28] },
      { factors: [12, 35], divisors: [21] },
      { factors: [18, 28], divisors: [21] }
    ]
  },
  {
    page: 3,
    title: "Simplify Calculations: Medium",
    label: "Simplify calculations medium practice",
    instruction: "Cancel common factors across the fraction, then work out the value.",
    problems: [
      { factors: [12, 15, 14], divisors: [21] },
      { factors: [16, 25], divisors: [10, 8] },
      { factors: [18, 20, 7], divisors: [28] },
      { factors: [24, 15], divisors: [10, 9] },
      { factors: [21, 16, 5], divisors: [28] },
      { factors: [14, 27], divisors: [21, 6] },
      { factors: [25, 18, 4], divisors: [20] },
      { factors: [35, 16], divisors: [14, 8] },
      { factors: [12, 21, 10], divisors: [28] },
      { factors: [27, 20], divisors: [15, 9] },
      { factors: [15, 16, 14], divisors: [20] },
      { factors: [28, 18], divisors: [21, 12] }
    ]
  },
  {
    page: 4,
    title: "Simplify Calculations: Medium",
    label: "Simplify calculations medium practice",
    instruction: "Cancel common factors across the fraction, then work out the value.",
    problems: [
      { factors: [20, 21, 9], divisors: [28] },
      { factors: [18, 35], divisors: [21, 10] },
      { factors: [16, 15, 21], divisors: [28] },
      { factors: [24, 25], divisors: [20, 15] },
      { factors: [14, 27, 5], divisors: [21] },
      { factors: [32, 21], divisors: [28, 8] },
      { factors: [15, 28, 6], divisors: [21] },
      { factors: [25, 24], divisors: [15, 10] },
      { factors: [18, 14, 10], divisors: [21] },
      { factors: [27, 16], divisors: [12, 9] },
      { factors: [35, 12, 8], divisors: [28] },
      { factors: [20, 21], divisors: [14, 15] }
    ]
  },
  {
    page: 5,
    title: "Simplify Calculations: Hard",
    label: "Simplify calculations hard practice",
    instruction: "Cancel as far as you can on both sides, then work out the value.",
    problems: [
      { factors: [12, 15, 14], divisors: [21, 10] },
      { factors: [16, 25, 9], divisors: [20, 12] },
      { factors: [18, 20, 21], divisors: [28, 15] },
      { factors: [24, 15, 7], divisors: [21, 10] },
      { factors: [14, 27, 16], divisors: [21, 12] },
      { factors: [25, 18, 8], divisors: [20, 15] },
      { factors: [21, 16, 20], divisors: [28, 15] },
      { factors: [35, 12, 18], divisors: [21, 20] },
      { factors: [15, 28, 16], divisors: [21, 20] },
      { factors: [27, 20, 14], divisors: [21, 15] },
      { factors: [32, 21, 15], divisors: [28, 20] },
      { factors: [18, 35, 16], divisors: [28, 15] }
    ]
  },
  {
    page: 6,
    title: "Simplify Calculations: Hard",
    label: "Simplify calculations hard practice",
    instruction: "Cancel as far as you can on both sides, then work out the value.",
    problems: [
      { factors: [24, 25, 21], divisors: [35, 20] },
      { factors: [16, 27, 14], divisors: [21, 12] },
      { factors: [18, 28, 15], divisors: [21, 20] },
      { factors: [35, 16, 18], divisors: [28, 20] },
      { factors: [12, 25, 21], divisors: [28, 15] },
      { factors: [27, 20, 16], divisors: [24, 15] },
      { factors: [14, 25, 18], divisors: [21, 20] },
      { factors: [32, 15, 21], divisors: [28, 20] },
      { factors: [24, 21, 10], divisors: [28, 15] },
      { factors: [15, 28, 18], divisors: [21, 20] },
      { factors: [25, 16, 21], divisors: [28, 20] },
      { factors: [27, 14, 20], divisors: [21, 18] }
    ]
  }
] as const satisfies readonly SimplifyCalculationsSheet[];
