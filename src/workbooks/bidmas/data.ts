import type { BidmasSheet } from "./types";

/** Progressive order-of-operations practice, using ÷, × and superscript powers. */
export const sheets = [
  {
    page: 1,
    title: "BIDMAS: First Steps",
    label: "BIDMAS first steps",
    instruction: "Multiply and divide before you add and subtract.",
    problems: [
      { expression: "8 + 3 × 4", answer: 20 },
      { expression: "30 − 18 ÷ 3", answer: 24 },
      { expression: "7 × 5 + 9", answer: 44 },
      { expression: "42 ÷ 6 + 13", answer: 20 },
      { expression: "6 + 24 ÷ 4", answer: 12 },
      { expression: "50 − 7 × 6", answer: 8 },
      { expression: "9 × 3 − 8", answer: 19 },
      { expression: "64 ÷ 8 + 17", answer: 25 },
      { expression: "15 + 6 × 5", answer: 45 },
      { expression: "72 ÷ 9 − 3", answer: 5 },
      { expression: "4 × 8 + 11", answer: 43 },
      { expression: "36 − 20 ÷ 5", answer: 32 },
      { expression: "14 + 7 × 3", answer: 35 },
      { expression: "81 ÷ 9 + 12", answer: 21 },
      { expression: "45 − 5 × 7", answer: 10 }
    ]
  },
  {
    page: 2,
    title: "BIDMAS: Brackets",
    label: "BIDMAS brackets",
    instruction: "Work out anything inside brackets first.",
    problems: [
      { expression: "(8 + 4) × 3", answer: 36 },
      { expression: "36 ÷ (7 − 3)", answer: 9 },
      { expression: "5 × (9 − 2)", answer: 35 },
      { expression: "(24 + 12) ÷ 6", answer: 6 },
      { expression: "7 + (18 ÷ 3)", answer: 13 },
      { expression: "(15 − 6) × 4", answer: 36 },
      { expression: "48 ÷ (4 + 2)", answer: 8 },
      { expression: "3 × (11 + 5)", answer: 48 },
      { expression: "(32 − 12) ÷ 5", answer: 4 },
      { expression: "9 + (6 × 7)", answer: 51 },
      { expression: "(14 + 10) ÷ 3", answer: 8 },
      { expression: "6 × (13 − 8)", answer: 30 },
      { expression: "72 ÷ (5 + 4)", answer: 8 },
      { expression: "(21 − 9) × 5", answer: 60 },
      { expression: "8 + (36 ÷ 6)", answer: 14 }
    ]
  },
  {
    page: 3,
    title: "BIDMAS: Indices",
    label: "BIDMAS indices",
    instruction: "Calculate powers after brackets, then multiply or divide.",
    problems: [
      { expression: "3² + 7", answer: 16 },
      { expression: "5 + 2³", answer: 13 },
      { expression: "4 × 3²", answer: 36 },
      { expression: "6² ÷ 4", answer: 9 },
      { expression: "2³ + 5 × 3", answer: 23 },
      { expression: "30 − 4²", answer: 14 },
      { expression: "(2 + 3)²", answer: 25 },
      { expression: "48 ÷ 2³", answer: 6 },
      { expression: "7 + 5²", answer: 32 },
      { expression: "3 × 2⁴", answer: 48 },
      { expression: "10² ÷ 5", answer: 20 },
      { expression: "2 × (4² − 7)", answer: 18 }
    ]
  },
  {
    page: 4,
    title: "BIDMAS: Mixed Challenge",
    label: "BIDMAS mixed challenge",
    instruction: "Use the full BIDMAS order. Work left to right for tied operations.",
    problems: [
      { expression: "18 ÷ 3 × 2 + 5", answer: 17 },
      { expression: "40 − 6 × (8 − 3)", answer: 10 },
      { expression: "(12 + 4) ÷ 2²", answer: 4 },
      { expression: "3² × 5 − 7", answer: 38 },
      { expression: "72 ÷ (3 × 4) + 11", answer: 17 },
      { expression: "2³ + (15 − 3) ÷ 4", answer: 11 },
      { expression: "(7 + 5) × 2 − 3²", answer: 15 },
      { expression: "100 ÷ (6 + 4) + 2³", answer: 18 },
      { expression: "5 × (14 − 8) + 18 ÷ 3", answer: 36 },
      { expression: "64 ÷ 2³ + 4 × 6", answer: 32 },
      { expression: "(20 − 4) ÷ (2 + 2) × 3", answer: 12 },
      { expression: "50 − (3² + 4 × 7)", answer: 13 }
    ]
  }
] satisfies readonly BidmasSheet[];
