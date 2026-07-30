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
      { expression: "3 × (8 + 4)", answer: 36 },
      { expression: "36 ÷ (7 − 3)", answer: 9 },
      { expression: "5 × (9 − 2)", answer: 35 },
      { expression: "(24 + 12) ÷ 6", answer: 6 },
      { expression: "7 + (18 ÷ 3)", answer: 13 },
      { expression: "4 × (15 − 6)", answer: 36 },
      { expression: "48 ÷ (4 + 2)", answer: 8 },
      { expression: "3 × (11 + 5)", answer: 48 },
      { expression: "(32 − 12) ÷ 5", answer: 4 },
      { expression: "9 + (6 × 7)", answer: 51 },
      { expression: "(14 + 10) ÷ 3", answer: 8 },
      { expression: "6 × (13 − 8)", answer: 30 },
      { expression: "72 ÷ (5 + 4)", answer: 8 },
      { expression: "5 × (21 − 9)", answer: 60 },
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
      { expression: "2 × (7 + 5) − 3²", answer: 15 },
      { expression: "100 ÷ (6 + 4) + 2³", answer: 18 },
      { expression: "5 × (14 − 8) + 18 ÷ 3", answer: 36 },
      { expression: "64 ÷ 2³ + 4 × 6", answer: 32 },
      { expression: "3 × (20 − 4) ÷ (2 + 2)", answer: 12 },
      { expression: "50 − (3² + 4 × 7)", answer: 13 }
    ]
  },
  {
    page: 5,
    title: "BIDMAS: Nested Brackets",
    label: "BIDMAS nested brackets",
    instruction: "Start with the innermost brackets, then work outwards.",
    problems: [
      { expression: "(3 × (8 + 4)) − 10", answer: 26 },
      { expression: "(20 − 8) × (9 − 6)", answer: 36 },
      { expression: "5 × (3 + (12 ÷ 4))", answer: 30 },
      { expression: "((15 − 3) ÷ 4) + 7", answer: 10 },
      { expression: "2 × ((9 + 3) ÷ 3)", answer: 8 },
      { expression: "(6 + 2) × (5 − 1) − 9", answer: 23 },
      { expression: "48 ÷ (6 × 2)", answer: 4 },
      { expression: "(7 + 5) × (8 ÷ 4)", answer: 24 },
      { expression: "2 × ((18 + 6) ÷ 3)", answer: 16 },
      { expression: "9 + (4 × (8 − 5))", answer: 21 },
      { expression: "3 × ((24 ÷ 6) + 5)", answer: 27 },
      { expression: "3 × ((40 − 10) ÷ 5)", answer: 18 }
    ]
  },
  {
    page: 6,
    title: "BIDMAS: Left to Right",
    label: "BIDMAS left to right",
    instruction: "Multiply and divide left to right — do not jump ahead.",
    problems: [
      { expression: "24 ÷ 4 × 3 − 5", answer: 13 },
      { expression: "2 × (60 ÷ 5) ÷ 3", answer: 8 },
      { expression: "8 × 6 ÷ 4 + 7", answer: 19 },
      { expression: "100 − 40 ÷ 5 × 4", answer: 68 },
      { expression: "18 ÷ 2 × 5 − 3 × 4", answer: 33 },
      { expression: "72 ÷ 8 × 3 ÷ 9", answer: 3 },
      { expression: "5 + 36 ÷ 6 × 2", answer: 17 },
      { expression: "48 ÷ 6 × 4 − 2³", answer: 24 },
      { expression: "90 ÷ 9 × 2 + 4 × 3", answer: 32 },
      { expression: "7 × 8 ÷ 4 − 6", answer: 8 },
      { expression: "120 ÷ 10 × 5 ÷ 2", answer: 30 },
      { expression: "16 ÷ 2 × 3 − 4 × 2", answer: 16 }
    ]
  },
  {
    page: 7,
    title: "BIDMAS: Power Plays",
    label: "BIDMAS power plays",
    instruction: "Powers come before multiply and divide. Watch the brackets.",
    problems: [
      { expression: "(3 + 2)² − 4 × 3", answer: 13 },
      { expression: "2³ × (9 − 5) + 6", answer: 38 },
      { expression: "5² − (3 × 4) + 2", answer: 15 },
      { expression: "3 × (4² − 7)", answer: 27 },
      { expression: "3 × 2³ − (5 + 3)", answer: 16 },
      { expression: "(10 − 2²) × (3 + 1)", answer: 24 },
      { expression: "4³ ÷ (8 × 2) + 5", answer: 9 },
      { expression: "2⁴ + 3² × 2 − 10", answer: 24 },
      { expression: "(5² + 3) ÷ 4 × 2", answer: 14 },
      { expression: "6² − 4 × (8 − 3)", answer: 16 },
      { expression: "(2 + 1)³ − 5 × 4", answer: 7 },
      { expression: "7² − 3³ + 5", answer: 27 }
    ]
  },
  {
    page: 8,
    title: "BIDMAS: Trap Comparisons",
    label: "BIDMAS trap comparisons",
    instruction: "Each pair looks alike — brackets change the answer.",
    problems: [
      { expression: "8 + 12 ÷ 4 × 3 − 5", answer: 12 },
      { expression: "(8 + 12) ÷ 4 × 3 − 5", answer: 10 },
      { expression: "20 − 3 × 4 + 8", answer: 16 },
      { expression: "3 × (4 + 8) − 20", answer: 16 },
      { expression: "6 × 2 + 3²", answer: 21 },
      { expression: "6 × (2 + 3)²", answer: 150 },
      { expression: "48 ÷ 2 + 4 × 3", answer: 36 },
      { expression: "3 × 48 ÷ (2 + 4)", answer: 24 },
      { expression: "5 × 4 − 6 ÷ 2", answer: 17 },
      { expression: "5 × (4 − 6 ÷ 2)", answer: 5 },
      { expression: "36 ÷ 6 + 2³ × 3", answer: 30 },
      { expression: "(6 + 2)³ ÷ 8", answer: 64 }
    ]
  },
  {
    page: 9,
    title: "BIDMAS: Multi-Step Mix",
    label: "BIDMAS multi-step mix",
    instruction: "Combine brackets, indices and left-to-right carefully.",
    problems: [
      { expression: "2² × (7 + 5) − 18 ÷ 3", answer: 42 },
      { expression: "3 × (4² − 2 × 5) + 7", answer: 25 },
      { expression: "80 ÷ (5 × 2²) + 3 × 6", answer: 22 },
      { expression: "6² ÷ 4 × (8 − 5)", answer: 27 },
      { expression: "2³ × 5 − (16 ÷ 4)²", answer: 24 },
      { expression: "100 − 4 × (3² + 7)", answer: 36 },
      { expression: "(15 + 9) ÷ 3² × (10 − 4)", answer: 16 },
      { expression: "5² + 4 × (18 ÷ 6) − 3", answer: 34 },
      { expression: "6³ ÷ 9 − 4 × 2", answer: 16 },
      { expression: "6 × (2⁴ − 10) + 48 ÷ 8", answer: 42 },
      { expression: "(50 − 2 × 7) ÷ 4 × 3", answer: 27 },
      { expression: "3² × (8 − 2) − 5 × (9 − 6)", answer: 39 }
    ]
  },
  {
    page: 10,
    title: "BIDMAS: Expert Challenge",
    label: "BIDMAS expert challenge",
    instruction: "These need careful BIDMAS at every step. Show your working.",
    problems: [
      { expression: "3 × ((4 + 2)² − 8) − 10", answer: 74 },
      { expression: "2 × (5² − 3 × 4) + 16 ÷ 2", answer: 34 },
      { expression: "(81 ÷ 9)² − 5 × (8 − 3)", answer: 56 },
      { expression: "4³ − 5 × (6 + 2) + 9", answer: 33 },
      { expression: "((18 − 6) ÷ 3)² × 5 − 4", answer: 76 },
      { expression: "7 × (3² − 2) − 48 ÷ (4 × 2)", answer: 43 },
      { expression: "(2³ + 4) × (15 − 3²) − 6", answer: 66 },
      { expression: "100 ÷ (2² + 1) − 3 × (7 − 2)", answer: 5 },
      { expression: "((5 × 4) − 2²) ÷ 4 × (9 − 6)", answer: 12 },
      { expression: "3 × (2⁴ + 8 ÷ 4) − (11 − 5)²", answer: 18 },
      { expression: "2³ × (6² − 12) ÷ (9 − 5)", answer: 48 },
      { expression: "5 × ((3 + 1)² − 2 × 3) + 7", answer: 57 }
    ]
  }
] satisfies readonly BidmasSheet[];
