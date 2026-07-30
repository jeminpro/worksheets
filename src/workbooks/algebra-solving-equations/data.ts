import type { AlgebraSolvingEquationsSheet } from "./types";

/** Progressive equation solving: one-step, two-step, brackets, both sides, then powers and roots. */
export const sheets = [
  {
    page: 1,
    title: "Solving Equations: Easy",
    label: "Algebra solving equations easy",
    instruction: "Find the value of x. Use inverse operations to isolate the letter.",
    problems: [
      { equation: "x + 5 = 12", variable: "x", answer: 7 },
      { equation: "x − 3 = 4", variable: "x", answer: 7 },
      { equation: "x + 8 = 15", variable: "x", answer: 7 },
      { equation: "x − 6 = 2", variable: "x", answer: 8 },
      { equation: "x + 4 = 11", variable: "x", answer: 7 },
      { equation: "x − 1 = 9", variable: "x", answer: 10 },
      { equation: "x + 7 = 14", variable: "x", answer: 7 },
      { equation: "x − 5 = 3", variable: "x", answer: 8 },
      { equation: "x + 2 = 10", variable: "x", answer: 8 },
      { equation: "x − 4 = 6", variable: "x", answer: 10 },
      { equation: "x + 9 = 16", variable: "x", answer: 7 },
      { equation: "x − 2 = 5", variable: "x", answer: 7 },
      { equation: "x + 6 = 13", variable: "x", answer: 7 },
      { equation: "x − 7 = 1", variable: "x", answer: 8 },
      { equation: "x + 3 = 12", variable: "x", answer: 9 }
    ]
  },
  {
    page: 2,
    title: "Solving Equations: Warm-up",
    label: "Algebra solving equations warm-up",
    instruction: "One-step equations with multiplication or division.",
    problems: [
      { equation: "2x = 10", variable: "x", answer: 5 },
      { equation: "3x = 15", variable: "x", answer: 5 },
      { equation: "4x = 20", variable: "x", answer: 5 },
      { equation: "5x = 25", variable: "x", answer: 5 },
      { equation: "6x = 18", variable: "x", answer: 3 },
      { equation: "x ÷ 2 = 4", variable: "x", answer: 8 },
      { equation: "7x = 21", variable: "x", answer: 3 },
      { equation: "8x = 32", variable: "x", answer: 4 },
      { equation: "x ÷ 3 = 2", variable: "x", answer: 6 },
      { equation: "x ÷ 4 = 3", variable: "x", answer: 12 },
      { equation: "3x = 24", variable: "x", answer: 8 },
      { equation: "2x = 16", variable: "x", answer: 8 },
      { equation: "x ÷ 5 = 2", variable: "x", answer: 10 },
      { equation: "9x = 27", variable: "x", answer: 3 },
      { equation: "x ÷ 2 = 7", variable: "x", answer: 14 }
    ]
  },
  {
    page: 3,
    title: "Solving Equations: Medium",
    label: "Algebra solving equations medium",
    instruction: "Two-step equations. Undo addition or subtraction first, then division.",
    problems: [
      { equation: "2x + 3 = 11", variable: "x", answer: 4 },
      { equation: "3x − 5 = 10", variable: "x", answer: 5 },
      { equation: "4x + 1 = 21", variable: "x", answer: 5 },
      { equation: "5x − 2 = 18", variable: "x", answer: 4 },
      { equation: "2x + 7 = 15", variable: "x", answer: 4 },
      { equation: "3x + 4 = 19", variable: "x", answer: 5 },
      { equation: "4x − 3 = 13", variable: "x", answer: 4 },
      { equation: "6x + 2 = 20", variable: "x", answer: 3 },
      { equation: "2x − 1 = 9", variable: "x", answer: 5 },
      { equation: "5x + 5 = 30", variable: "x", answer: 5 },
      { equation: "3x − 6 = 12", variable: "x", answer: 6 },
      { equation: "7x − 4 = 17", variable: "x", answer: 3 },
      { equation: "2x + 8 = 18", variable: "x", answer: 5 },
      { equation: "4x + 6 = 26", variable: "x", answer: 5 },
      { equation: "3x − 9 = 6", variable: "x", answer: 5 }
    ]
  },
  {
    page: 4,
    title: "Solving Equations: Two-step",
    label: "Algebra solving equations two-step",
    instruction: "Equations with division and two operations — work step by step.",
    problems: [
      { equation: "x ÷ 2 + 3 = 7", variable: "x", answer: 8 },
      { equation: "x ÷ 3 + 4 = 7", variable: "x", answer: 9 },
      { equation: "2x + 1 = 9", variable: "x", answer: 4 },
      { equation: "x ÷ 4 + 2 = 5", variable: "x", answer: 12 },
      { equation: "3x − 2 = 13", variable: "x", answer: 5 },
      { equation: "x ÷ 2 + 5 = 10", variable: "x", answer: 10 },
      { equation: "4x + 3 = 15", variable: "x", answer: 3 },
      { equation: "x ÷ 5 + 1 = 4", variable: "x", answer: 15 },
      { equation: "2x − 3 = 11", variable: "x", answer: 7 },
      { equation: "5x + 2 = 17", variable: "x", answer: 3 },
      { equation: "x ÷ 3 + 2 = 6", variable: "x", answer: 12 },
      { equation: "6x − 5 = 19", variable: "x", answer: 4 },
      { equation: "3x + 7 = 22", variable: "x", answer: 5 },
      { equation: "x ÷ 2 + 4 = 9", variable: "x", answer: 10 },
      { equation: "4x − 7 = 13", variable: "x", answer: 5 }
    ]
  },
  {
    page: 5,
    title: "Solving Equations: Hard",
    label: "Algebra solving equations hard",
    instruction: "Expand brackets first, then solve.",
    problems: [
      { equation: "2(x + 3) = 14", variable: "x", answer: 4 },
      { equation: "3(x − 2) = 12", variable: "x", answer: 6 },
      { equation: "4(x + 1) = 20", variable: "x", answer: 4 },
      { equation: "5(x − 1) = 20", variable: "x", answer: 5 },
      { equation: "2(x + 5) = 18", variable: "x", answer: 4 },
      { equation: "3(x + 2) = 21", variable: "x", answer: 5 },
      { equation: "4(x − 3) = 8", variable: "x", answer: 5 },
      { equation: "2(x − 4) = 6", variable: "x", answer: 7 },
      { equation: "3(x + 4) = 24", variable: "x", answer: 4 },
      { equation: "5(x − 2) = 25", variable: "x", answer: 7 },
      { equation: "2(x + 1) = 12", variable: "x", answer: 5 },
      { equation: "4(x − 1) = 16", variable: "x", answer: 5 }
    ]
  },
  {
    page: 6,
    title: "Solving Equations: Challenge",
    label: "Algebra solving equations challenge",
    instruction: "Variables on both sides and longer expressions — collect like terms.",
    problems: [
      { equation: "2x + 5 = x + 12", variable: "x", answer: 7 },
      { equation: "3x − 7 = 2x + 5", variable: "x", answer: 12 },
      { equation: "4x + 3 = 2x + 15", variable: "x", answer: 6 },
      { equation: "5x − 2 = 3x + 10", variable: "x", answer: 6 },
      { equation: "2x + 8 = x + 15", variable: "x", answer: 7 },
      { equation: "3x + 4 = x + 16", variable: "x", answer: 6 },
      { equation: "−2x + 10 = 4", variable: "x", answer: 3 },
      { equation: "4x − 5 = 2x + 7", variable: "x", answer: 6 },
      { equation: "5x + 1 = 2x + 16", variable: "x", answer: 5 },
      { equation: "2(x + 4) − 3 = 15", variable: "x", answer: 5 },
      { equation: "3(x − 1) + 2 = 14", variable: "x", answer: 5 },
      { equation: "2x − 3 = x + 8", variable: "x", answer: 11 }
    ]
  },
  {
    page: 7,
    title: "Solving Equations: Squares",
    label: "Algebra solving equations squares",
    instruction: "Square the unknown or take the square root — undo powers carefully.",
    problems: [
      { equation: "x² = 9", variable: "x", answer: 3 },
      { equation: "x² = 16", variable: "x", answer: 4 },
      { equation: "x² = 25", variable: "x", answer: 5 },
      { equation: "x² = 36", variable: "x", answer: 6 },
      { equation: "x² = 49", variable: "x", answer: 7 },
      { equation: "2x² = 18", variable: "x", answer: 3 },
      { equation: "3x² = 27", variable: "x", answer: 3 },
      { equation: "4x² = 64", variable: "x", answer: 4 },
      { equation: "5x² = 45", variable: "x", answer: 3 },
      { equation: "x² = 64", variable: "x", answer: 8 },
      { equation: "2x² = 32", variable: "x", answer: 4 },
      { equation: "x² = 81", variable: "x", answer: 9 },
      { equation: "3x² = 48", variable: "x", answer: 4 },
      { equation: "x² = 100", variable: "x", answer: 10 },
      { equation: "4x² = 100", variable: "x", answer: 5 }
    ]
  },
  {
    page: 8,
    title: "Solving Equations: Roots",
    label: "Algebra solving equations roots",
    instruction: "Equations with square roots and cubes — undo roots by squaring or cubing.",
    problems: [
      { equation: "√x = 3", variable: "x", answer: 9 },
      { equation: "√x = 4", variable: "x", answer: 16 },
      { equation: "√x = 5", variable: "x", answer: 25 },
      { equation: "√x = 6", variable: "x", answer: 36 },
      { equation: "x³ = 8", variable: "x", answer: 2 },
      { equation: "x³ = 27", variable: "x", answer: 3 },
      { equation: "x³ = 64", variable: "x", answer: 4 },
      { equation: "∛x = 2", variable: "x", answer: 8 },
      { equation: "∛x = 3", variable: "x", answer: 27 },
      { equation: "∛x = 4", variable: "x", answer: 64 },
      { equation: "2 × √x = 8", variable: "x", answer: 16 },
      { equation: "3 × √x = 15", variable: "x", answer: 25 },
      { equation: "2 × ∛x = 6", variable: "x", answer: 27 },
      { equation: "x³ = 125", variable: "x", answer: 5 },
      { equation: "√x = 7", variable: "x", answer: 49 }
    ]
  },
  {
    page: 9,
    title: "Solving Equations: Powers",
    label: "Algebra solving equations powers",
    instruction: "Two-step equations with squares — isolate x² first, then take the square root.",
    problems: [
      { equation: "x² + 3 = 12", variable: "x", answer: 3 },
      { equation: "x² − 5 = 20", variable: "x", answer: 5 },
      { equation: "x² + 7 = 23", variable: "x", answer: 4 },
      { equation: "x² − 1 = 15", variable: "x", answer: 4 },
      { equation: "2x² + 2 = 10", variable: "x", answer: 2 },
      { equation: "x² + 4 = 29", variable: "x", answer: 5 },
      { equation: "x² − 9 = 16", variable: "x", answer: 5 },
      { equation: "3x² − 3 = 24", variable: "x", answer: 3 },
      { equation: "x² + 1 = 17", variable: "x", answer: 4 },
      { equation: "x² − 4 = 12", variable: "x", answer: 4 },
      { equation: "4x² + 4 = 68", variable: "x", answer: 4 },
      { equation: "x² + 8 = 33", variable: "x", answer: 5 }
    ]
  },
  {
    page: 10,
    title: "Solving Equations: Mixed Powers",
    label: "Algebra solving equations mixed powers",
    instruction: "Combine squares, roots, cubes and other operations — work in reverse order.",
    problems: [
      { equation: "√x + 3 = 8", variable: "x", answer: 25 },
      { equation: "√x − 2 = 3", variable: "x", answer: 25 },
      { equation: "√x + 1 = 6", variable: "x", answer: 25 },
      { equation: "x² ÷ 2 + 1 = 9", variable: "x", answer: 4 },
      { equation: "x² ÷ 4 + 3 = 7", variable: "x", answer: 4 },
      { equation: "∛x + 2 = 5", variable: "x", answer: 27 },
      { equation: "∛x − 1 = 3", variable: "x", answer: 64 },
      { equation: "2 × √x + 1 = 11", variable: "x", answer: 25 },
      { equation: "x³ + 1 = 9", variable: "x", answer: 2 },
      { equation: "3 × ∛x = 6", variable: "x", answer: 8 },
      { equation: "x² − 3 = 6", variable: "x", answer: 3 },
      { equation: "√x ÷ 2 + 4 = 7", variable: "x", answer: 36 }
    ]
  }
] satisfies readonly AlgebraSolvingEquationsSheet[];
