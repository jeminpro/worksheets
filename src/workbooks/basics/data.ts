import type { BasicsSheet } from "./types";

/**
 * 11+ number-skills assessment: six topics, five easy / medium / hard each.
 * Within each band the last two problems sit in wide cards, so the longest
 * prompts and calculations belong in positions 4 and 5.
 */
export const sheets = [
  {
    page: 1,
    title: "Basics: Place Value",
    label: "Basics place value",
    topic: "place-value",
    instruction:
      "Find digit values, identify places, multiply or divide by 10/100, and partition numbers.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Value of the digit 6 in",
        given: "640",
        answer: "600"
      },
      {
        difficulty: "easy",
        prompt: "Value of the digit 4 in",
        given: "4,128",
        answer: "4,000"
      },
      {
        difficulty: "easy",
        prompt: "Which digit is in the tens place?",
        given: "5,382",
        answer: "8"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Write as a single number",
        given: "3,000 + 200 + 50 + 7",
        answer: "3,257"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Multiply by 10",
        given: "45 × 10",
        answer: "450"
      },
      {
        difficulty: "medium",
        prompt: "Value of the digit 7 in",
        given: "75,403",
        answer: "70,000"
      },
      {
        difficulty: "medium",
        prompt: "Which digit is in the tenths place?",
        given: "48.35",
        answer: "3"
      },
      {
        difficulty: "medium",
        prompt: "Value of the digit 9 in",
        given: "6.92",
        answer: "0.9"
      },
      {
        difficulty: "medium",
        format: "expression",
        prompt: "Multiply by 100",
        given: "3.4 × 100",
        answer: "340"
      },
      {
        difficulty: "medium",
        prompt: "How many times greater is the 5 in 5,280 than the 5 in 350?",
        answer: "100"
      },
      {
        difficulty: "hard",
        prompt: "Value of the digit 8 in",
        given: "8,406,219",
        answer: "8,000,000"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Divide by 100",
        given: "420 ÷ 100",
        answer: "4.2"
      },
      {
        difficulty: "hard",
        prompt: "Which digit is in the hundred thousands place?",
        given: "3,752,681",
        answer: "7"
      },
      {
        difficulty: "hard",
        prompt: "The 3 in 3,600 is how many times the 3 in 36?",
        answer: "100"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Write as a single number",
        given: "2,000,000 + 50,000 + 400 + 9",
        answer: "2,050,409"
      }
    ]
  },
  {
    page: 2,
    title: "Basics: Order & Compare",
    label: "Basics order and compare",
    topic: "order-compare",
    instruction:
      "Choose the number described, compare with < and >, or order numbers from smallest to largest.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Which is greater?",
        given: ["3,472", "3,427"],
        answer: "3,472"
      },
      {
        difficulty: "easy",
        prompt: "Which is smaller?",
        given: ["809", "890"],
        answer: "809"
      },
      {
        difficulty: "easy",
        format: "compare",
        prompt: "Write < or > in the box",
        given: ["2,605", "2,650"],
        answer: "<"
      },
      {
        difficulty: "easy",
        prompt: "Which is largest?",
        given: ["1,208", "1,280", "1,028"],
        answer: "1,280"
      },
      {
        difficulty: "easy",
        prompt: "Order smallest to largest",
        given: ["450", "405", "455"],
        answer: "405, 450, 455"
      },
      {
        difficulty: "medium",
        prompt: "Which is greater?",
        given: ["47,308", "47,380"],
        answer: "47,380"
      },
      {
        difficulty: "medium",
        prompt: "Which is closer to 8,000?",
        given: ["7,862", "8,149"],
        answer: "7,862"
      },
      {
        difficulty: "medium",
        format: "compare",
        prompt: "Write < or > in the box",
        given: ["105,092", "105,029"],
        answer: ">"
      },
      {
        difficulty: "medium",
        prompt: "Which is smallest?",
        given: ["90,405", "90,450", "90,045"],
        answer: "90,045"
      },
      {
        difficulty: "medium",
        prompt: "Order smallest to largest",
        given: ["6,214", "6,241", "6,124"],
        answer: "6,124, 6,214, 6,241"
      },
      {
        difficulty: "hard",
        prompt: "Which is greater?",
        given: ["3,080,419", "3,008,941"],
        answer: "3,080,419"
      },
      {
        difficulty: "hard",
        prompt: "Which is closer to 1,000,000?",
        given: ["987,650", "1,014,200"],
        answer: "987,650"
      },
      {
        difficulty: "hard",
        format: "compare",
        prompt: "Write < or > in the box",
        given: ["2,506,070", "2,560,007"],
        answer: "<"
      },
      {
        difficulty: "hard",
        prompt: "Which is smaller?",
        given: ["2,099,999", "2,090,999"],
        answer: "2,090,999"
      },
      {
        difficulty: "hard",
        prompt: "Order smallest to largest",
        given: ["415,207", "451,027", "405,721"],
        answer: "405,721, 415,207, 451,027"
      }
    ]
  },
  {
    page: 3,
    title: "Basics: Roman Numerals",
    label: "Basics Roman numerals",
    topic: "roman-numerals",
    instruction:
      "Convert between Roman numerals and ordinary numbers, or work out Roman calculations.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Write as an ordinary number",
        given: "VIII",
        answer: "8"
      },
      {
        difficulty: "easy",
        prompt: "Write as an ordinary number",
        given: "XIV",
        answer: "14"
      },
      {
        difficulty: "easy",
        prompt: "Write in Roman numerals",
        given: "9",
        answer: "IX"
      },
      {
        difficulty: "easy",
        prompt: "Write in Roman numerals",
        given: "27",
        answer: "XXVII"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Work out the sum",
        given: "X + VII",
        answer: "17"
      },
      {
        difficulty: "medium",
        prompt: "Write as an ordinary number",
        given: "XLIV",
        answer: "44"
      },
      {
        difficulty: "medium",
        prompt: "Write as an ordinary number",
        given: "LXVIII",
        answer: "68"
      },
      {
        difficulty: "medium",
        prompt: "Write in Roman numerals",
        given: "49",
        answer: "XLIX"
      },
      {
        difficulty: "medium",
        prompt: "Write in Roman numerals",
        given: "94",
        answer: "XCIV"
      },
      {
        difficulty: "medium",
        format: "expression",
        prompt: "Work out the calculation",
        given: "L − XV",
        answer: "35"
      },
      {
        difficulty: "hard",
        prompt: "Write as an ordinary number",
        given: "CDXL",
        answer: "440"
      },
      {
        difficulty: "hard",
        prompt: "Write as an ordinary number",
        given: "DCCXLIX",
        answer: "749"
      },
      {
        difficulty: "hard",
        prompt: "Write in Roman numerals",
        given: "990",
        answer: "CMXC"
      },
      {
        difficulty: "hard",
        prompt: "Write as an ordinary year",
        given: "MCMXCIV",
        answer: "1994"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Work out the product",
        given: "IV × IX",
        answer: "36"
      }
    ]
  },
  {
    page: 4,
    title: "Basics: Rounding",
    label: "Basics rounding numbers",
    topic: "rounding",
    instruction:
      "Round whole numbers and decimals, or find the smallest / largest possible number.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Round to the nearest 10",
        given: "47",
        answer: "50"
      },
      {
        difficulty: "easy",
        prompt: "Round to the nearest 10",
        given: "65",
        answer: "70"
      },
      {
        difficulty: "easy",
        prompt: "Round to the nearest 100",
        given: "249",
        answer: "200"
      },
      {
        difficulty: "easy",
        prompt: "Round to the nearest 100",
        given: "850",
        answer: "900"
      },
      {
        difficulty: "easy",
        prompt: "Round to the nearest whole number",
        given: "7.6",
        answer: "8"
      },
      {
        difficulty: "medium",
        prompt: "Round to the nearest 100",
        given: "3,472",
        answer: "3,500"
      },
      {
        difficulty: "medium",
        prompt: "Round to the nearest 1,000",
        given: "24,500",
        answer: "25,000"
      },
      {
        difficulty: "medium",
        prompt: "Round to 1 decimal place",
        given: "4.38",
        answer: "4.4"
      },
      {
        difficulty: "medium",
        prompt: "Round to the nearest 10,000",
        given: "68,419",
        answer: "70,000"
      },
      {
        difficulty: "medium",
        prompt: "Smallest whole number that rounds to 80 (nearest 10)",
        answer: "75"
      },
      {
        difficulty: "hard",
        prompt: "Round to the nearest 10",
        given: "3,996",
        answer: "4,000"
      },
      {
        difficulty: "hard",
        prompt: "Round to the nearest 100",
        given: "99,952",
        answer: "100,000"
      },
      {
        difficulty: "hard",
        prompt: "Round to the nearest 100,000",
        given: "1,450,000",
        answer: "1,500,000"
      },
      {
        difficulty: "hard",
        prompt: "Largest whole number that rounds to 500 (nearest 100)",
        answer: "549"
      },
      {
        difficulty: "hard",
        prompt: "Round to the nearest 1,000",
        given: "7,500,499",
        answer: "7,500,000"
      }
    ]
  },
  {
    page: 5,
    title: "Basics: Negative Numbers",
    label: "Basics negative numbers",
    topic: "negative-numbers",
    instruction:
      "Add and subtract integers, compare temperatures, and find differences or sequence terms.",
    problems: [
      {
        difficulty: "easy",
        format: "expression",
        given: "−3 + 8",
        answer: "5"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "6 − 9",
        answer: "−3"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "−7 + 7",
        answer: "0"
      },
      {
        difficulty: "easy",
        prompt: "Which temperature is colder?",
        given: ["−4°C", "2°C"],
        answer: "−4°C"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Temperature rises by 6°C from −2°C",
        given: "−2 + 6",
        answer: "4°C"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "−8 + 15",
        answer: "7"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "4 − 12",
        answer: "−8"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "−6 − 5",
        answer: "−11"
      },
      {
        difficulty: "medium",
        prompt: "What is the difference between",
        given: ["−5°C", "3°C"],
        answer: "8°C"
      },
      {
        difficulty: "medium",
        prompt: "Which number is greater?",
        given: ["−19", "−21"],
        answer: "−19"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "−14 + (−9)",
        answer: "−23"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "8 − (−6)",
        answer: "14"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "−25 − (−18)",
        answer: "−7"
      },
      {
        difficulty: "hard",
        prompt: "What is the difference between",
        given: ["−7", "9"],
        answer: "16"
      },
      {
        difficulty: "hard",
        prompt: "Find the next number in the sequence",
        given: ["8", "3", "−2", "−7"],
        answer: "−12"
      }
    ]
  },
  {
    page: 6,
    title: "Basics: BIDMAS",
    label: "Basics BIDMAS",
    topic: "bidmas",
    instruction:
      "Use BIDMAS. Work left to right when operations have the same priority.",
    problems: [
      {
        difficulty: "easy",
        format: "expression",
        given: "8 + 3 × 4",
        answer: "20"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "7 × 5 + 9",
        answer: "44"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "50 − 7 × 6",
        answer: "8"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "30 − 18 ÷ 3",
        answer: "24"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "42 ÷ 6 + 13",
        answer: "20"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "3 × (8 + 4)",
        answer: "36"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "36 ÷ (7 − 3)",
        answer: "9"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "(24 + 12) ÷ 6",
        answer: "6"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "5 + 6 × 3 − 4",
        answer: "19"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "40 − 6 × (8 − 3)",
        answer: "10"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "3² × 5 − 7",
        answer: "38"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "(12 + 4) ÷ 2²",
        answer: "4"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "2 × (4² − 7)",
        answer: "18"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "18 ÷ 3 × 2 + 5",
        answer: "17"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "48 ÷ (2 + 2²) + 3 × 5",
        answer: "23"
      }
    ]
  }
] satisfies readonly BasicsSheet[];
