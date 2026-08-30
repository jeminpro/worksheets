import type { RatioSheet } from "./types";

/**
 * 11+ Ratio and Proportion assessment: 3 topics across 6 A4 pages.
 * Each topic has 15 problems (5 easy, 5 medium, 5 hard) split over two pages
 * so diagrams stay readable: easy + medium, then hard.
 */
export const sheets: readonly RatioSheet[] = [
  {
    page: 1,
    title: "Ratio: Order & Compare %",
    label: "Ratio order and compare percentages",
    topic: "order-compare-percentages",
    instruction: "Convert, compare and order percentages, fractions and decimals.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Write this fraction as a percentage.",
        given: "1/2",
        format: "expression",
        answer: "50%"
      },
      {
        difficulty: "easy",
        prompt: "Write <, > or = between the percentages.",
        given: ["20%", "15%"],
        format: "compare",
        answer: ">"
      },
      {
        difficulty: "easy",
        prompt: "Write <, > or =.",
        given: ["40%", "1/4"],
        format: "compare",
        answer: ">"
      },
      {
        difficulty: "easy",
        prompt: "What percentage of the hundred square is shaded?",
        diagram: { kind: "hundred-square", shaded: 35 },
        answer: "35%"
      },
      {
        difficulty: "easy",
        prompt: "Class A had 30% of pupils pass. Class B had 25% pass. Which class did better?",
        diagram: {
          kind: "compare-bars",
          bars: [
            { label: "A", percent: 30 },
            { label: "B", percent: 25 }
          ]
        },
        answer: "Class A"
      },
      {
        difficulty: "medium",
        prompt: "Write these percentages in order, smallest first.",
        given: ["12%", "20%", "8%"],
        answer: "8%, 12%, 20%"
      },
      {
        difficulty: "medium",
        prompt: "Write <, > or =.",
        given: ["3/5", "50%"],
        format: "compare",
        answer: ">"
      },
      {
        difficulty: "medium",
        prompt: "Write this decimal as a percentage.",
        given: "0.35",
        format: "expression",
        answer: "35%"
      },
      {
        difficulty: "medium",
        prompt: "Write in order, smallest first.",
        given: ["1/4", "30%", "0.2"],
        answer: "0.2, 1/4, 30%"
      },
      {
        difficulty: "medium",
        prompt: "A jumper is 15% off. A coat is 1/5 off. Which has the bigger discount?",
        answer: "The coat"
      }
    ]
  },
  {
    page: 2,
    title: "Ratio: Order & Compare %",
    label: "Ratio order and compare percentages continued",
    topic: "order-compare-percentages",
    instruction: "Harder ordering of percentages, fractions and decimals. Show your working.",
    questionOffset: 10,
    problems: [
      {
        difficulty: "hard",
        prompt: "Write in order, smallest first.",
        given: ["2/5", "0.45", "38%", "1/2"],
        answer: "38%, 2/5, 0.45, 1/2"
      },
      {
        difficulty: "hard",
        prompt: "Which is larger: 25% of 80 or 20% of 90?",
        answer: "25% of 80"
      },
      {
        difficulty: "hard",
        prompt: "Write <, > or =.",
        given: ["3/8", "40%"],
        format: "compare",
        answer: "<"
      },
      {
        difficulty: "hard",
        prompt: "Which marked value is the smallest?",
        diagram: {
          kind: "number-line",
          min: 0,
          max: 100,
          marks: [
            { value: 35, label: "35%" },
            { value: 25, label: "1/4" },
            { value: 40, label: "0.4" }
          ]
        },
        answer: "1/4"
      },
      {
        difficulty: "hard",
        prompt: "Three test scores are 17/25, 70% and 0.72. Write them in order, lowest first.",
        answer: "17/25, 70%, 0.72"
      }
    ]
  },
  {
    page: 3,
    title: "Ratio: Calculating %",
    label: "Ratio calculating percentages",
    topic: "calculating-percentages",
    instruction: "Find percentages of amounts, including simple increases and decreases.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Find 50% of 80.",
        given: "50% of 80",
        format: "expression",
        answer: "40"
      },
      {
        difficulty: "easy",
        prompt: "Find 10% of 70.",
        given: "10% of 70",
        format: "expression",
        answer: "7"
      },
      {
        difficulty: "easy",
        prompt: "Find 25% of 40.",
        given: "25% of 40",
        format: "expression",
        answer: "10"
      },
      {
        difficulty: "easy",
        prompt: "The bar shows 50% of £20. What amount is shaded?",
        diagram: {
          kind: "percent-bar",
          percent: 50,
          label: "50%",
          totalLabel: "£20"
        },
        answer: "£10"
      },
      {
        difficulty: "easy",
        prompt: "A book costs £20. In a sale it is 50% off. What is the sale price?",
        answer: "£10"
      },
      {
        difficulty: "medium",
        prompt: "Find 20% of 85.",
        given: "20% of 85",
        format: "expression",
        answer: "17"
      },
      {
        difficulty: "medium",
        prompt: "Find 15% of 80.",
        given: "15% of 80",
        format: "expression",
        answer: "12"
      },
      {
        difficulty: "medium",
        prompt: "Increase 60 by 10%.",
        given: "60 + 10%",
        format: "expression",
        answer: "66"
      },
      {
        difficulty: "medium",
        prompt: "Decrease 80 by 25%.",
        given: "80 − 25%",
        format: "expression",
        answer: "60"
      },
      {
        difficulty: "medium",
        prompt: "A coat costs £40. In the sale it is 30% off. What is the sale price?",
        answer: "£28"
      }
    ]
  },
  {
    page: 4,
    title: "Ratio: Calculating %",
    label: "Ratio calculating percentages continued",
    topic: "calculating-percentages",
    instruction: "Harder percentage of amounts, reverse percentages and VAT. Show your working.",
    questionOffset: 10,
    problems: [
      {
        difficulty: "hard",
        prompt: "Find 12% of 250.",
        given: "12% of 250",
        format: "expression",
        answer: "30"
      },
      {
        difficulty: "hard",
        prompt: "A price of £80 is increased by 15%. What is the new price?",
        answer: "£92"
      },
      {
        difficulty: "hard",
        prompt: "After a 20% decrease, a bike costs £64. What was the original price?",
        answer: "£80"
      },
      {
        difficulty: "hard",
        prompt: "Express 18 as a percentage of 24.",
        given: ["18", "24"],
        answer: "75%"
      },
      {
        difficulty: "hard",
        prompt: "A shop adds 20% VAT to an item priced £45. What is the total price?",
        answer: "£54"
      }
    ]
  },
  {
    page: 5,
    title: "Ratio: Relative Quantities",
    label: "Ratio relative quantities",
    topic: "relative-quantities",
    instruction: "Simplify ratios, share in a ratio, and use proportion in recipes, prices and scale.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Write the ratio of red to blue counters in its simplest form.",
        diagram: {
          kind: "counters",
          groups: [
            { label: "R", count: 2 },
            { label: "B", count: 6 }
          ]
        },
        answer: "1:3"
      },
      {
        difficulty: "easy",
        prompt: "Simplify the ratio.",
        given: "4:8",
        format: "expression",
        answer: "1:2"
      },
      {
        difficulty: "easy",
        prompt: "Share £20 in the ratio 1:3. How much is the smaller share?",
        given: ["£20", "1:3"],
        answer: "£5"
      },
      {
        difficulty: "easy",
        prompt: "The tape is in the ratio 2:3. Each square is worth 4. What is the total?",
        diagram: {
          kind: "tape",
          parts: [
            { label: "2", count: 2 },
            { label: "3", count: 3 }
          ],
          unitLabel: "4 each"
        },
        answer: "20"
      },
      {
        difficulty: "easy",
        prompt: "For every 1 boy there are 2 girls. There are 4 boys. How many girls are there?",
        answer: "8"
      },
      {
        difficulty: "medium",
        prompt: "Simplify the ratio.",
        given: "12:18",
        format: "expression",
        answer: "2:3"
      },
      {
        difficulty: "medium",
        prompt: "Share 35 sweets in the ratio 3:4. How many are in the larger share?",
        given: ["35", "3:4"],
        answer: "20"
      },
      {
        difficulty: "medium",
        prompt: "A recipe for 8 people uses 2 eggs. How many eggs are needed for 12 people?",
        answer: "3"
      },
      {
        difficulty: "medium",
        prompt: "3 pens cost £1.50. How much do 5 pens cost?",
        given: ["3 for £1.50"],
        answer: "£2.50"
      },
      {
        difficulty: "medium",
        prompt: "A map has scale 1:100. A path is 3 cm on the map. How long is the path in metres?",
        answer: "3 m"
      }
    ]
  },
  {
    page: 6,
    title: "Ratio: Relative Quantities",
    label: "Ratio relative quantities continued",
    topic: "relative-quantities",
    instruction: "Harder sharing, scaling recipes and finding totals from a ratio. Show your working.",
    questionOffset: 10,
    problems: [
      {
        difficulty: "hard",
        prompt: "Share £84 in the ratio 2:5. How much more does the larger share get?",
        diagram: {
          kind: "tape",
          parts: [
            { label: "2", count: 2 },
            { label: "5", count: 5 }
          ]
        },
        answer: "£36"
      },
      {
        difficulty: "hard",
        prompt: "A recipe for 6 people uses 240 g of flour. How much flour is needed for 15 people?",
        answer: "600 g"
      },
      {
        difficulty: "hard",
        prompt: "The ratio of boys to girls is 3:5. There are 24 boys. How many children are there in total?",
        diagram: {
          kind: "tape",
          parts: [
            { label: "boys", count: 3 },
            { label: "girls", count: 5 }
          ]
        },
        answer: "64"
      },
      {
        difficulty: "hard",
        prompt: "Two amounts are in the ratio 4:7. Their difference is 18. Find the smaller amount.",
        given: ["4:7", "difference 18"],
        answer: "24"
      },
      {
        difficulty: "hard",
        prompt: "5 identical books cost £35. How many of the same books can you buy for £49?",
        answer: "7"
      }
    ]
  }
];
