import type { AlgebraSubstitutionSheet } from "./types";

/** Progressive substitution practice: single variable, two variables, then powers and brackets. */
export const sheets = [
  {
    page: 1,
    title: "Substitution: Easy",
    label: "Algebra substitution easy",
    instruction: "Replace the letter with its value, then work out the answer.",
    problems: [
      { substitution: "x = 2", expression: "2x + 3", answer: 7 },
      { substitution: "x = 5", expression: "x + 4", answer: 9 },
      { substitution: "x = 3", expression: "3x", answer: 9 },
      { substitution: "x = 7", expression: "x − 2", answer: 5 },
      { substitution: "x = 4", expression: "2x + 1", answer: 9 },
      { substitution: "x = 6", expression: "x + 5", answer: 11 },
      { substitution: "x = 3", expression: "4x", answer: 12 },
      { substitution: "x = 8", expression: "x − 3", answer: 5 },
      { substitution: "x = 5", expression: "3x + 2", answer: 17 },
      { substitution: "x = 2", expression: "5x + 1", answer: 11 },
      { substitution: "x = 9", expression: "x − 4", answer: 5 },
      { substitution: "x = 4", expression: "6x", answer: 24 },
      { substitution: "x = 7", expression: "2x − 1", answer: 13 },
      { substitution: "x = 3", expression: "x + 8", answer: 11 },
      { substitution: "x = 6", expression: "2x + 4", answer: 16 }
    ]
  },
  {
    page: 2,
    title: "Substitution: Warm-up",
    label: "Algebra substitution warm-up",
    instruction: "Substitute the value, then calculate step by step.",
    problems: [
      { substitution: "a = 3", expression: "a + 6", answer: 9 },
      { substitution: "a = 5", expression: "2a", answer: 10 },
      { substitution: "a = 4", expression: "3a + 2", answer: 14 },
      { substitution: "a = 8", expression: "a − 5", answer: 3 },
      { substitution: "a = 2", expression: "4a + 3", answer: 11 },
      { substitution: "a = 7", expression: "a + 3", answer: 10 },
      { substitution: "a = 3", expression: "5a", answer: 15 },
      { substitution: "a = 6", expression: "2a + 5", answer: 17 },
      { substitution: "a = 9", expression: "a − 7", answer: 2 },
      { substitution: "a = 4", expression: "3a + 1", answer: 13 },
      { substitution: "a = 5", expression: "6a", answer: 30 },
      { substitution: "a = 8", expression: "2a − 3", answer: 13 },
      { substitution: "a = 3", expression: "a + 9", answer: 12 },
      { substitution: "a = 7", expression: "4a + 2", answer: 30 },
      { substitution: "a = 6", expression: "a − 1", answer: 5 }
    ]
  },
  {
    page: 3,
    title: "Substitution: Medium",
    label: "Algebra substitution medium",
    instruction: "Two letters this time. Replace both values before you calculate.",
    problems: [
      { substitution: "x = 3, y = 2", expression: "x + y", answer: 5 },
      { substitution: "x = 4, y = 3", expression: "x + y", answer: 7 },
      { substitution: "x = 5, y = 2", expression: "2x + y", answer: 12 },
      { substitution: "x = 3, y = 4", expression: "x + 2y", answer: 11 },
      { substitution: "x = 2, y = 5", expression: "3x + y", answer: 11 },
      { substitution: "x = 4, y = 1", expression: "2x + 3y", answer: 11 },
      { substitution: "x = 6, y = 2", expression: "x − y", answer: 4 },
      { substitution: "x = 5, y = 3", expression: "2x − y", answer: 7 },
      { substitution: "x = 3, y = 6", expression: "x + y", answer: 9 },
      { substitution: "x = 4, y = 4", expression: "3x + 2y", answer: 20 },
      { substitution: "x = 7, y = 2", expression: "x + 3y", answer: 13 },
      { substitution: "x = 2, y = 8", expression: "4x + y", answer: 16 },
      { substitution: "x = 5, y = 4", expression: "2x + 2y", answer: 18 },
      { substitution: "x = 8, y = 1", expression: "x − 2y", answer: 6 },
      { substitution: "x = 3, y = 5", expression: "5x − y", answer: 10 }
    ]
  },
  {
    page: 4,
    title: "Substitution: Two Variables",
    label: "Algebra substitution two variables",
    instruction: "Some values are negative. Watch the signs carefully.",
    problems: [
      { substitution: "x = −2, y = 3", expression: "x + y", answer: 1 },
      { substitution: "x = 4, y = −1", expression: "x + y", answer: 3 },
      { substitution: "x = −3, y = 5", expression: "2x + y", answer: -1 },
      { substitution: "x = 5, y = −2", expression: "x − y", answer: 7 },
      { substitution: "x = −1, y = 4", expression: "3x + 2y", answer: 5 },
      { substitution: "x = 2, y = −3", expression: "x + 3y", answer: -7 },
      { substitution: "x = −4, y = 2", expression: "2x + y", answer: -6 },
      { substitution: "x = 3, y = −2", expression: "2x − y", answer: 8 },
      { substitution: "x = −2, y = −3", expression: "x + y", answer: -5 },
      { substitution: "x = 6, y = −1", expression: "x + 2y", answer: 4 },
      { substitution: "x = −5, y = 8", expression: "3x + y", answer: -7 },
      { substitution: "x = 4, y = −3", expression: "2x + 3y", answer: -1 },
      { substitution: "x = −1, y = 6", expression: "4x − y", answer: -10 },
      { substitution: "x = 3, y = −4", expression: "x − 2y", answer: 11 },
      { substitution: "x = −2, y = 5", expression: "5x + 2y", answer: 0 }
    ]
  },
  {
    page: 5,
    title: "Substitution: Hard",
    label: "Algebra substitution hard",
    instruction: "Squares and brackets appear now. Work inside brackets first.",
    problems: [
      { substitution: "x = 3", expression: "x² + 1", answer: 10 },
      { substitution: "x = 4", expression: "2x²", answer: 32 },
      { substitution: "x = 2", expression: "x² + 3x", answer: 10 },
      { substitution: "x = 5", expression: "x² − x", answer: 20 },
      { substitution: "x = 3", expression: "2(x + 1)", answer: 8 },
      { substitution: "x = 4", expression: "3(x − 1)", answer: 9 },
      { substitution: "x = 2", expression: "x² + 2x + 1", answer: 9 },
      { substitution: "x = 5", expression: "2x² − x", answer: 45 },
      { substitution: "x = 3", expression: "(x + 2)²", answer: 25 },
      { substitution: "x = 4", expression: "x² + 5", answer: 21 },
      { substitution: "x = 2", expression: "3x² − 2", answer: 10 },
      { substitution: "x = 6", expression: "x² − x", answer: 30 }
    ]
  },
  {
    page: 6,
    title: "Substitution: Challenge",
    label: "Algebra substitution challenge",
    instruction: "Combine two variables with squares, brackets and products.",
    problems: [
      { substitution: "x = −2", expression: "x² + 3", answer: 7 },
      { substitution: "x = −3", expression: "2x² − 1", answer: 17 },
      { substitution: "x = 2, y = 3", expression: "x² + y²", answer: 13 },
      { substitution: "x = 3, y = 4", expression: "2x² + y", answer: 22 },
      { substitution: "x = −1, y = 2", expression: "x² + 3y", answer: 7 },
      { substitution: "x = 4, y = 1", expression: "x² − 2y", answer: 14 },
      { substitution: "x = 2, y = 3", expression: "2(x + y)", answer: 10 },
      { substitution: "x = 5, y = 2", expression: "(x − y)²", answer: 9 },
      { substitution: "x = −2, y = 1", expression: "x² + 2xy", answer: 0 },
      { substitution: "x = 3, y = 2", expression: "x² + xy", answer: 15 },
      { substitution: "x = −3, y = 2", expression: "2x² − y", answer: 16 },
      { substitution: "x = 4, y = 3", expression: "3x + 2y²", answer: 30 }
    ]
  },
  {
    page: 7,
    title: "Substitution: Advanced",
    label: "Algebra substitution advanced",
    instruction: "Nested brackets and squared terms — work from the inside out.",
    problems: [
      { substitution: "x = 2, y = 3", expression: "2x² + 3y − (x + y)", answer: 12 },
      { substitution: "x = −1, y = 4", expression: "x² + 2(x − y)", answer: -9 },
      { substitution: "x = 3, y = 2", expression: "(2x − y)² − x", answer: 13 },
      { substitution: "x = 4, y = 1", expression: "3(x + y)² − 2x", answer: 67 },
      { substitution: "x = −2, y = 3", expression: "2(x² + y) − x", answer: 16 },
      { substitution: "x = 5, y = 2", expression: "x² − 2xy + y²", answer: 9 },
      { substitution: "x = 3, y = 4", expression: "2(x + 2y) − (x − y)", answer: 23 },
      { substitution: "x = −3, y = 2", expression: "(x + y)² + 2x²", answer: 19 },
      { substitution: "x = 2, y = 5", expression: "3x² + 2(x − y)", answer: 6 }
    ]
  },
  {
    page: 8,
    title: "Substitution: Expert",
    label: "Algebra substitution expert",
    instruction: "Three variables and longer expressions — substitute every letter first.",
    problems: [
      { substitution: "x = 2, y = 3, z = 1", expression: "x² + y² + z²", answer: 14 },
      { substitution: "x = 3, y = 2, z = 4", expression: "2(x + y) − z", answer: 6 },
      { substitution: "x = −1, y = 2, z = 3", expression: "x² + 2y + z²", answer: 14 },
      { substitution: "x = 4, y = 1, z = 2", expression: "(x + y + z)² − x²", answer: 33 },
      { substitution: "x = 2, y = 3, z = −1", expression: "x² + y² − 2z", answer: 15 },
      { substitution: "x = −2, y = 3, z = 1", expression: "2(x + y) + z²", answer: 3 },
      { substitution: "x = 3, y = −2, z = 4", expression: "x² + xy + z", answer: 7 },
      { substitution: "x = 5, y = 2, z = 3", expression: "(x − y)(x + z) − y²", answer: 20 },
      { substitution: "x = −1, y = 4, z = 2", expression: "2(x² + yz) − x", answer: 19 }
    ]
  }
] satisfies readonly AlgebraSubstitutionSheet[];
