import type { FractionsSheet } from "./types";

/**
 * 11+ Fractions assessment workbook: 5 core topics across 5 A4 pages.
 * Each page features 15 problems structured into three progressive difficulty bands:
 * - 5 Easy (positions 1–3 narrow, 4–5 wide)
 * - 5 Medium (positions 6–8 narrow, 9–10 wide)
 * - 5 Hard (positions 11–13 narrow, 14–15 wide)
 */
export const sheets = [
  {
    page: 1,
    title: "Fractions: Calculating Fractions",
    label: "Fractions calculating fractions",
    topic: "calculating-fractions",
    instruction:
      "Find fractions of amounts, multiply and divide fractions, and solve fraction word problems.",
    problems: [
      {
        difficulty: "easy",
        format: "expression",
        given: "3/4 of 24",
        answer: "18"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "2/5 of 35",
        answer: "14"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "1/3 of £27",
        answer: "£9"
      },
      {
        difficulty: "easy",
        prompt:
          "A box contains 36 chocolates. Liam eats 1/4 of them. How many chocolates does Liam eat?",
        answer: "9"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Multiply fraction by whole number",
        given: "2/3 × 12",
        answer: "8"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "5/8 of 64",
        answer: "40"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "3/7 of 56 kg",
        answer: "24 kg"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "4/5 of £65",
        answer: "£52"
      },
      {
        difficulty: "medium",
        prompt:
          "In a class of 30 pupils, 2/5 walk to school and 1/3 cycle. How many pupils do neither?",
        answer: "8"
      },
      {
        difficulty: "medium",
        format: "expression",
        prompt: "Multiply two fractions",
        given: "3/4 × 2/5",
        answer: "3/10"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "7/12 of 144",
        answer: "84"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Divide fraction by whole number",
        given: "4/5 ÷ 2",
        answer: "2/5"
      },
      {
        difficulty: "hard",
        prompt:
          "3/5 of a mystery number is 45. What is the mystery number?",
        answer: "75"
      },
      {
        difficulty: "hard",
        prompt:
          "A coat costs £120. In a seasonal sale, its price is reduced by 3/8. What is the new sale price?",
        answer: "£75"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Multiply mixed number by fraction",
        given: "1 1/2 × 3/5",
        answer: "9/10"
      }
    ]
  },
  {
    page: 2,
    title: "Fractions: Adding & Subtracting",
    label: "Fractions adding and subtracting",
    topic: "adding-subtracting",
    instruction:
      "Add and subtract fractions with common and different denominators, mixed numbers, and word problems.",
    problems: [
      {
        difficulty: "easy",
        format: "expression",
        given: "2/7 + 3/7",
        answer: "5/7"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "8/9 − 5/9",
        answer: "1/3"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "1/4 + 2/4",
        answer: "3/4"
      },
      {
        difficulty: "easy",
        prompt:
          "Maya reads 2/9 of a book on Saturday and 4/9 on Sunday. What fraction of the book has she read in total?",
        answer: "2/3"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Add with related denominator",
        given: "1/2 + 1/4",
        answer: "3/4"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "1/3 + 2/5",
        answer: "11/15"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "5/6 − 1/4",
        answer: "7/12"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "3/8 + 1/6",
        answer: "13/24"
      },
      {
        difficulty: "medium",
        prompt:
          "A wooden plank is 7/8 m long. A piece of length 1/2 m is cut off. What length of plank remains?",
        answer: "3/8 m"
      },
      {
        difficulty: "medium",
        format: "expression",
        prompt: "Add mixed numbers",
        given: "1 1/3 + 2 1/4",
        answer: "3 7/12"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "7/10 − 2/15",
        answer: "17/30"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "2 3/4 + 1 2/3",
        answer: "4 5/12"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "3 1/5 − 1 3/4",
        answer: "1 9/20"
      },
      {
        difficulty: "hard",
        prompt:
          "A baker mixes 1 1/2 kg of white flour and 3/4 kg of rye flour. What is the total weight of flour?",
        answer: "2 1/4 kg"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Three-term fraction calculation",
        given: "5/6 − 1/3 + 1/4",
        answer: "3/4"
      }
    ]
  },
  {
    page: 3,
    title: "Fractions: Equivalent Fractions",
    label: "Fractions equivalent fractions",
    topic: "equivalent-fractions",
    instruction:
      "Simplify fractions to lowest terms, find missing terms, and identify equivalent sets.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Simplify to lowest terms",
        given: "6/8",
        answer: "3/4"
      },
      {
        difficulty: "easy",
        prompt: "Simplify to lowest terms",
        given: "10/15",
        answer: "2/3"
      },
      {
        difficulty: "easy",
        prompt: "Find the missing numerator: 2/3 = ?/12",
        answer: "8"
      },
      {
        difficulty: "easy",
        prompt:
          "Which fraction is NOT equivalent to 1/2: 3/6, 5/10, 4/9, 6/12?",
        answer: "4/9"
      },
      {
        difficulty: "easy",
        prompt: "Find the missing denominator: 3/5 = 15/?",
        answer: "25"
      },
      {
        difficulty: "medium",
        prompt: "Simplify to lowest terms",
        given: "24/36",
        answer: "2/3"
      },
      {
        difficulty: "medium",
        prompt: "Simplify to lowest terms",
        given: "35/49",
        answer: "5/7"
      },
      {
        difficulty: "medium",
        prompt: "Find the missing numerator: 5/8 = ?/40",
        answer: "25"
      },
      {
        difficulty: "medium",
        prompt:
          "In a spelling test, Sam scores 18 out of 24. Write his score as a simplified fraction.",
        answer: "3/4"
      },
      {
        difficulty: "medium",
        prompt:
          "4/7 = 12/a = b/35. Find the values of a and b.",
        answer: "a = 21, b = 20"
      },
      {
        difficulty: "hard",
        prompt: "Simplify to lowest terms",
        given: "84/108",
        answer: "7/9"
      },
      {
        difficulty: "hard",
        prompt: "Simplify to lowest terms",
        given: "65/91",
        answer: "5/7"
      },
      {
        difficulty: "hard",
        prompt: "Find the missing value: 9/24 = ?/56",
        answer: "21"
      },
      {
        difficulty: "hard",
        prompt:
          "Which two fractions are equivalent: 15/20, 18/25, 27/36, 14/21?",
        answer: "15/20 and 27/36"
      },
      {
        difficulty: "hard",
        prompt:
          "A fraction is equivalent to 3/8. The sum of its numerator and denominator is 77. Find the fraction.",
        answer: "21/56"
      }
    ]
  },
  {
    page: 4,
    title: "Fractions: Mixed & Improper",
    label: "Fractions mixed numbers and improper fractions",
    topic: "mixed-improper",
    instruction:
      "Convert between improper fractions and mixed numbers, compare forms, and solve worded problems.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Convert to a mixed number",
        given: "7/2",
        answer: "3 1/2"
      },
      {
        difficulty: "easy",
        prompt: "Convert to a mixed number",
        given: "11/4",
        answer: "2 3/4"
      },
      {
        difficulty: "easy",
        prompt: "Convert to an improper fraction",
        given: "2 1/3",
        answer: "7/3"
      },
      {
        difficulty: "easy",
        prompt: "Convert to an improper fraction",
        given: "3 2/5",
        answer: "17/5"
      },
      {
        difficulty: "easy",
        prompt:
          "13 quarter-pizzas are shared at a club. How many whole pizzas and quarters is this?",
        answer: "3 1/4"
      },
      {
        difficulty: "medium",
        prompt: "Convert to a mixed number in simplest form",
        given: "22/6",
        answer: "3 2/3"
      },
      {
        difficulty: "medium",
        prompt: "Convert to a mixed number in simplest form",
        given: "38/8",
        answer: "4 3/4"
      },
      {
        difficulty: "medium",
        prompt: "Convert to an improper fraction",
        given: "5 4/7",
        answer: "39/7"
      },
      {
        difficulty: "medium",
        prompt:
          "A recipe uses 1 3/4 cups of milk for one batch. How many cups of milk are needed for 3 batches?",
        answer: "5 1/4 cups"
      },
      {
        difficulty: "medium",
        prompt: "Convert to a mixed number in simplest form",
        given: "50/12",
        answer: "4 1/6"
      },
      {
        difficulty: "hard",
        prompt: "Convert to an improper fraction",
        given: "8 5/9",
        answer: "77/9"
      },
      {
        difficulty: "hard",
        prompt: "Convert to a mixed number in simplest form",
        given: "94/14",
        answer: "6 5/7"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Work out as a mixed number",
        given: "2 3/8 + 1 7/8",
        answer: "4 1/4"
      },
      {
        difficulty: "hard",
        prompt:
          "How many 3/4-litre bottles can be completely filled from a 10-litre container of juice?",
        answer: "13"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Work out and simplify",
        given: "4 1/3 − 1 5/6",
        answer: "2 1/2"
      }
    ]
  },
  {
    page: 5,
    title: "Fractions: Order & Compare",
    label: "Fractions order and compare",
    topic: "order-compare",
    instruction:
      "Compare fractions using <, > or =, order fraction sets, and identify bounds.",
    problems: [
      {
        difficulty: "easy",
        format: "compare",
        given: ["3/7", "5/7"],
        answer: "<"
      },
      {
        difficulty: "easy",
        format: "compare",
        given: ["4/5", "3/5"],
        answer: ">"
      },
      {
        difficulty: "easy",
        format: "compare",
        given: ["1/3", "1/4"],
        answer: ">"
      },
      {
        difficulty: "easy",
        prompt: "Order from smallest to largest",
        given: ["1/6", "5/6", "3/6"],
        answer: "1/6, 3/6, 5/6"
      },
      {
        difficulty: "easy",
        prompt: "Which fraction is larger: 3/8 or 5/8?",
        answer: "5/8"
      },
      {
        difficulty: "medium",
        format: "compare",
        given: ["3/4", "7/10"],
        answer: ">"
      },
      {
        difficulty: "medium",
        format: "compare",
        given: ["5/6", "7/8"],
        answer: "<"
      },
      {
        difficulty: "medium",
        format: "compare",
        given: ["2/3", "8/12"],
        answer: "="
      },
      {
        difficulty: "medium",
        prompt: "Order from smallest to largest",
        given: ["1/2", "3/8", "3/4", "5/8"],
        answer: "3/8, 1/2, 5/8, 3/4"
      },
      {
        difficulty: "medium",
        prompt:
          "Tom ate 3/5 of a pie and Ben ate 2/3 of an identical pie. Who ate more pie?",
        answer: "Ben"
      },
      {
        difficulty: "hard",
        format: "compare",
        given: ["5/7", "7/10"],
        answer: ">"
      },
      {
        difficulty: "hard",
        format: "compare",
        given: ["7/12", "11/18"],
        answer: "<"
      },
      {
        difficulty: "hard",
        prompt: "Order from smallest to largest",
        given: ["2/3", "3/5", "7/10", "13/15"],
        answer: "3/5, 2/3, 7/10, 13/15"
      },
      {
        difficulty: "hard",
        prompt:
          "Find a fraction with denominator 12 that lies strictly between 1/3 and 1/2.",
        answer: "5/12"
      },
      {
        difficulty: "hard",
        prompt:
          "Four runners complete fractions of a track: Amy 3/4, Ben 7/10, Cal 4/5, Dan 13/20. Who is furthest ahead?",
        answer: "Cal"
      }
    ]
  }
] satisfies readonly FractionsSheet[];
