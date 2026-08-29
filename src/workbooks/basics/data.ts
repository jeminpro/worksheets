import type { BasicsSheet } from "./types";

/** 11+ number-skills assessment: six topics, five easy / medium / hard each. */
export const sheets = [
  {
    page: 1,
    title: "Basics: Place Value",
    label: "Basics place value",
    topic: "place-value",
    instruction:
      "Find the value of a digit, write expanded numbers, or name a place.",
    problems: [
      { difficulty: "easy", prompt: "Value of 6 in 64?", answer: "60" },
      { difficulty: "easy", prompt: "Value of 4 in 4,128?", answer: "4,000" },
      { difficulty: "easy", prompt: "Tens digit of 5,382?", answer: "8" },
      {
        difficulty: "easy",
        prompt: "3,000 + 200 + 50 + 7 =",
        answer: "3,257",
        display: "expression"
      },
      { difficulty: "easy", prompt: "Value of 9 in 905?", answer: "900" },
      { difficulty: "medium", prompt: "Value of 7 in 75,403?", answer: "70,000" },
      {
        difficulty: "medium",
        prompt: "Thousands digit of 286,419?",
        answer: "6"
      },
      {
        difficulty: "medium",
        prompt: "40,000 + 3,000 + 80 + 2 =",
        answer: "43,082",
        display: "expression"
      },
      {
        difficulty: "medium",
        prompt: "How many times greater is the 5 in 5,280 than the 5 in 350?",
        answer: "100"
      },
      {
        difficulty: "medium",
        prompt: "Expand 60,205.",
        answer: "60,000 + 200 + 5"
      },
      {
        difficulty: "hard",
        prompt: "Value of 8 in 8,406,219?",
        answer: "8,000,000"
      },
      {
        difficulty: "hard",
        prompt: "Hundred thousands digit of 3,752,681?",
        answer: "7"
      },
      {
        difficulty: "hard",
        prompt: "2,000,000 + 50,000 + 400 + 9 =",
        answer: "2,050,409",
        display: "expression"
      },
      {
        difficulty: "hard",
        prompt: "The 3 in 3,600 is how many times the 3 in 36?",
        answer: "100"
      },
      {
        difficulty: "hard",
        prompt: "4 millions, 7 ten thousands, 2 hundreds, 5 ones.",
        answer: "4,070,205"
      }
    ]
  },
  {
    page: 2,
    title: "Basics: Order & Compare",
    label: "Basics order and compare",
    topic: "order-compare",
    instruction:
      "Compare with < or >, pick the larger or smaller number, or order smallest first.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Which is greater: 3,472 or 3,427?",
        answer: "3,472"
      },
      {
        difficulty: "easy",
        prompt: "Which is smaller: 809 or 890?",
        answer: "809"
      },
      { difficulty: "easy", prompt: "2,605  ___  2,650", answer: "<" },
      {
        difficulty: "easy",
        prompt: "Smallest first: 45, 54, 40",
        answer: "40, 45, 54"
      },
      {
        difficulty: "easy",
        prompt: "Largest: 1,208  1,280  1,028",
        answer: "1,280"
      },
      {
        difficulty: "medium",
        prompt: "Which is greater: 47,308 or 47,380?",
        answer: "47,380"
      },
      { difficulty: "medium", prompt: "105,092  ___  105,029", answer: ">" },
      {
        difficulty: "medium",
        prompt: "Smallest first: 6,214  6,241  6,124",
        answer: "6,124  6,214  6,241"
      },
      {
        difficulty: "medium",
        prompt: "Closer to 8,000: 7,862 or 8,149?",
        answer: "7,862"
      },
      {
        difficulty: "medium",
        prompt: "Smallest: 90,405  90,450  90,045",
        answer: "90,045"
      },
      {
        difficulty: "hard",
        prompt: "Which is greater: 3,080,419 or 3,008,941?",
        answer: "3,080,419"
      },
      { difficulty: "hard", prompt: "2,506,070  ___  2,560,007", answer: "<" },
      {
        difficulty: "hard",
        prompt: "Smallest first: 415,207  451,027  405,721",
        answer: "405,721  415,207  451,027"
      },
      {
        difficulty: "hard",
        prompt: "Closer to 1,000,000: 987,650 or 1,014,200?",
        answer: "987,650"
      },
      {
        difficulty: "hard",
        prompt: "Largest: 2,099,999  2,109,000  2,090,999",
        answer: "2,109,000"
      }
    ]
  },
  {
    page: 3,
    title: "Basics: Roman Numerals",
    label: "Basics Roman numerals",
    topic: "roman-numerals",
    instruction: "Convert between Roman numerals and ordinary numbers.",
    problems: [
      { difficulty: "easy", prompt: "Write V as a number.", answer: "5" },
      { difficulty: "easy", prompt: "Write X as a number.", answer: "10" },
      { difficulty: "easy", prompt: "Write 3 in Roman numerals.", answer: "III" },
      { difficulty: "easy", prompt: "Write IV as a number.", answer: "4" },
      {
        difficulty: "easy",
        prompt: "Write 12 in Roman numerals.",
        answer: "XII"
      },
      { difficulty: "medium", prompt: "Write XXIV as a number.", answer: "24" },
      {
        difficulty: "medium",
        prompt: "Write 49 in Roman numerals.",
        answer: "XLIX"
      },
      { difficulty: "medium", prompt: "Write XL as a number.", answer: "40" },
      {
        difficulty: "medium",
        prompt: "Write 60 in Roman numerals.",
        answer: "LX"
      },
      { difficulty: "medium", prompt: "Write XC as a number.", answer: "90" },
      { difficulty: "hard", prompt: "Write CD as a number.", answer: "400" },
      {
        difficulty: "hard",
        prompt: "Write 900 in Roman numerals.",
        answer: "CM"
      },
      { difficulty: "hard", prompt: "Write DCCXLIX as a number.", answer: "749" },
      {
        difficulty: "hard",
        prompt: "Write 444 in Roman numerals.",
        answer: "CDXLIV"
      },
      { difficulty: "hard", prompt: "Write CMXCIX as a number.", answer: "999" }
    ]
  },
  {
    page: 4,
    title: "Basics: Rounding",
    label: "Basics rounding numbers",
    topic: "rounding",
    instruction:
      "Round each number to the place shown. Halfway values round up.",
    problems: [
      { difficulty: "easy", prompt: "Round 47 to the nearest 10.", answer: "50" },
      { difficulty: "easy", prompt: "Round 32 to the nearest 10.", answer: "30" },
      {
        difficulty: "easy",
        prompt: "Round 251 to the nearest 100.",
        answer: "300"
      },
      {
        difficulty: "easy",
        prompt: "Round 849 to the nearest 100.",
        answer: "800"
      },
      { difficulty: "easy", prompt: "Round 65 to the nearest 10.", answer: "70" },
      {
        difficulty: "medium",
        prompt: "Round 3,472 to the nearest 100.",
        answer: "3,500"
      },
      {
        difficulty: "medium",
        prompt: "Round 6,850 to the nearest 100.",
        answer: "6,900"
      },
      {
        difficulty: "medium",
        prompt: "Round 24,361 to the nearest 1,000.",
        answer: "24,000"
      },
      {
        difficulty: "medium",
        prompt: "Round 17,500 to the nearest 1,000.",
        answer: "18,000"
      },
      {
        difficulty: "medium",
        prompt: "Round 8,049 to the nearest 10.",
        answer: "8,050"
      },
      {
        difficulty: "hard",
        prompt: "Round 238,461 to the nearest 10,000.",
        answer: "240,000"
      },
      {
        difficulty: "hard",
        prompt: "Round 1,450,000 to the nearest 100,000.",
        answer: "1,500,000"
      },
      {
        difficulty: "hard",
        prompt: "Round 99,952 to the nearest 100.",
        answer: "100,000"
      },
      {
        difficulty: "hard",
        prompt: "Round 3,996 to the nearest 10.",
        answer: "4,000"
      },
      {
        difficulty: "hard",
        prompt: "Round 7,500,499 to the nearest 1,000.",
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
      "Add and subtract integers, compare signed numbers, and find temperature changes.",
    problems: [
      {
        difficulty: "easy",
        prompt: "−3 + 8",
        answer: "5",
        display: "expression"
      },
      {
        difficulty: "easy",
        prompt: "6 − 9",
        answer: "−3",
        display: "expression"
      },
      { difficulty: "easy", prompt: "Which is smaller: −2 or 1?", answer: "−2" },
      {
        difficulty: "easy",
        prompt: "Which is colder: −4°C or 2°C?",
        answer: "−4°C"
      },
      {
        difficulty: "easy",
        prompt: "−7 + 7",
        answer: "0",
        display: "expression"
      },
      {
        difficulty: "medium",
        prompt: "−8 + 15",
        answer: "7",
        display: "expression"
      },
      {
        difficulty: "medium",
        prompt: "4 − 12",
        answer: "−8",
        display: "expression"
      },
      {
        difficulty: "medium",
        prompt: "−6 − 5",
        answer: "−11",
        display: "expression"
      },
      {
        difficulty: "medium",
        prompt: "How much warmer is 3°C than −5°C?",
        answer: "8°C"
      },
      {
        difficulty: "medium",
        prompt: "Which is greater: −19 or −21?",
        answer: "−19"
      },
      {
        difficulty: "hard",
        prompt: "−14 + (−9)",
        answer: "−23",
        display: "expression"
      },
      {
        difficulty: "hard",
        prompt: "8 − (−6)",
        answer: "14",
        display: "expression"
      },
      {
        difficulty: "hard",
        prompt: "−25 − (−18)",
        answer: "−7",
        display: "expression"
      },
      {
        difficulty: "hard",
        prompt: "Temperature falls from 4°C to −11°C. By how much?",
        answer: "15°C"
      },
      {
        difficulty: "hard",
        prompt: "Difference between −7 and 9?",
        answer: "16"
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
        prompt: "8 + 3 × 4",
        answer: "20",
        display: "expression"
      },
      {
        difficulty: "easy",
        prompt: "30 − 18 ÷ 3",
        answer: "24",
        display: "expression"
      },
      {
        difficulty: "easy",
        prompt: "7 × 5 + 9",
        answer: "44",
        display: "expression"
      },
      {
        difficulty: "easy",
        prompt: "42 ÷ 6 + 13",
        answer: "20",
        display: "expression"
      },
      {
        difficulty: "easy",
        prompt: "50 − 7 × 6",
        answer: "8",
        display: "expression"
      },
      {
        difficulty: "medium",
        prompt: "3 × (8 + 4)",
        answer: "36",
        display: "expression"
      },
      {
        difficulty: "medium",
        prompt: "36 ÷ (7 − 3)",
        answer: "9",
        display: "expression"
      },
      {
        difficulty: "medium",
        prompt: "(24 + 12) ÷ 6",
        answer: "6",
        display: "expression"
      },
      {
        difficulty: "medium",
        prompt: "5 + 6 × 3 − 4",
        answer: "19",
        display: "expression"
      },
      {
        difficulty: "medium",
        prompt: "40 − 6 × (8 − 3)",
        answer: "10",
        display: "expression"
      },
      {
        difficulty: "hard",
        prompt: "3² × 5 − 7",
        answer: "38",
        display: "expression"
      },
      {
        difficulty: "hard",
        prompt: "(12 + 4) ÷ 2²",
        answer: "4",
        display: "expression"
      },
      {
        difficulty: "hard",
        prompt: "18 ÷ 3 × 2 + 5",
        answer: "17",
        display: "expression"
      },
      {
        difficulty: "hard",
        prompt: "2 × (4² − 7)",
        answer: "18",
        display: "expression"
      },
      {
        difficulty: "hard",
        prompt: "48 ÷ (2 + 2²) + 3 × 5",
        answer: "23",
        display: "expression"
      }
    ]
  }
] satisfies readonly BasicsSheet[];
