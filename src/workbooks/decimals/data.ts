import type { DecimalsSheet } from "./types";

/**
 * 11+ Decimals assessment workbook: 5 core topics across 5 A4 pages.
 * Each page features 15 problems structured into three progressive difficulty bands:
 * - 5 Easy (positions 1–3 narrow, 4–5 wide)
 * - 5 Medium (positions 6–8 narrow, 9–10 wide)
 * - 5 Hard (positions 11–13 narrow, 14–15 wide)
 */
export const sheets = [
  {
    page: 1,
    title: "Decimals: Decimal Place Value",
    label: "Decimals place value",
    topic: "decimal-place-value",
    instruction:
      "Identify the place value of digits in decimals, partition numbers, and scale by powers of 10.",
    problems: [
      {
        difficulty: "easy",
        prompt: "What is the value of the digit 4?",
        given: "6.48",
        answer: "4 tenths (0.4)"
      },
      {
        difficulty: "easy",
        prompt: "What is the value of the digit 7?",
        given: "15.37",
        answer: "7 hundredths (0.07)"
      },
      {
        difficulty: "easy",
        prompt: "Which digit is in the tenths place?",
        given: "28.53",
        answer: "5"
      },
      {
        difficulty: "easy",
        prompt: "How many tenths are there altogether in the number 3.6?",
        answer: "36 tenths"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Write as a single decimal",
        given: "5 + 0.3 + 0.08",
        answer: "5.38"
      },
      {
        difficulty: "medium",
        prompt: "What is the value of the digit 9?",
        given: "4.095",
        answer: "9 hundredths (0.09)"
      },
      {
        difficulty: "medium",
        prompt: "Which digit is in the thousandths place?",
        given: "12.784",
        answer: "4"
      },
      {
        difficulty: "medium",
        prompt: "How many times greater is the 4 in 4.8 than the 4 in 0.48?",
        answer: "10"
      },
      {
        difficulty: "medium",
        format: "expression",
        prompt: "Write as a single decimal",
        given: "30 + 6 + 0.7 + 0.005",
        answer: "36.705"
      },
      {
        difficulty: "medium",
        prompt:
          "A runner's split time is 14.85 seconds. What is the value of the 5 in this time?",
        answer: "5 hundredths of a second"
      },
      {
        difficulty: "hard",
        prompt: "The 8 in 80.5 is how many times the 8 in 0.082?",
        answer: "1,000"
      },
      {
        difficulty: "hard",
        prompt: "What number is formed by 15 tenths and 24 hundredths?",
        answer: "1.74"
      },
      {
        difficulty: "hard",
        prompt: "Find the missing digit *: 5.8*4 = 5 + 8/10 + 6/100 + 4/1000",
        answer: "6"
      },
      {
        difficulty: "hard",
        prompt:
          "In 247.385, what is the product of the value of the digit 4 and the value of the digit 5?",
        answer: "0.2"
      },
      {
        difficulty: "hard",
        prompt:
          "A scientist measures 0.048 kg of salt and 0.5 kg of sugar. How many times heavier is the sugar than the 4 hundredths of salt?",
        answer: "12.5"
      }
    ]
  },
  {
    page: 2,
    title: "Decimals: Adding & Subtracting",
    label: "Decimals adding and subtracting",
    topic: "add-sub-decimals",
    instruction:
      "Add and subtract decimals with like and unlike decimal places, money, and word problems.",
    problems: [
      {
        difficulty: "easy",
        format: "expression",
        given: "4.3 + 2.5",
        answer: "6.8"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "8.7 − 3.4",
        answer: "5.3"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "£5.40 + £3.25",
        answer: "£8.65"
      },
      {
        difficulty: "easy",
        prompt:
          "Emma buys a notebook for £2.45 and a pen for £1.30. How much change does she receive from a £5 note?",
        answer: "£1.25"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Add three decimals",
        given: "1.2 + 3.4 + 2.1",
        answer: "6.7"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "5.8 + 3.47",
        answer: "9.27"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "12.4 − 4.65",
        answer: "7.75"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "£20.00 − £13.68",
        answer: "£6.32"
      },
      {
        difficulty: "medium",
        prompt:
          "A triangle has side lengths of 4.8 cm, 6.25 cm and 5.7 cm. What is the perimeter of the triangle?",
        answer: "16.75 cm"
      },
      {
        difficulty: "medium",
        format: "expression",
        prompt: "Add ragged decimals",
        given: "18.35 + 4.9 + 2.06",
        answer: "25.31"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "45.2 − 18.735",
        answer: "26.465"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "14.8 + 6.25 − 3.175",
        answer: "17.875"
      },
      {
        difficulty: "hard",
        prompt: "Find the missing decimal *: 8.45 + * = 14.2",
        answer: "5.75"
      },
      {
        difficulty: "hard",
        prompt:
          "Two parcels together weigh 9.25 kg. Parcel A weighs 4.675 kg. How much heavier is Parcel A than Parcel B?",
        answer: "0.1 kg (100 g)"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Three-term decimal calculation",
        given: "100 − 34.68 − 28.7",
        answer: "36.62"
      }
    ]
  },
  {
    page: 3,
    title: "Decimals: Multiplying & Dividing",
    label: "Decimals multiplying and dividing",
    topic: "mul-div-decimals",
    instruction:
      "Multiply and divide decimals by powers of 10, whole numbers, decimals, and solve word problems.",
    problems: [
      {
        difficulty: "easy",
        format: "expression",
        given: "3.4 × 10",
        answer: "34"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "48.5 ÷ 10",
        answer: "4.85"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "0.72 × 100",
        answer: "72"
      },
      {
        difficulty: "easy",
        prompt:
          "6 identical rulers cost £4.80 in total. What is the cost of 1 ruler?",
        answer: "80p (£0.80)"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Multiply decimal by single digit",
        given: "2.4 × 3",
        answer: "7.2"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "4.6 × 5",
        answer: "23"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "17.4 ÷ 6",
        answer: "2.9"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "3.85 × 4",
        answer: "15.4"
      },
      {
        difficulty: "medium",
        prompt:
          "A spool holds 18.4 m of ribbon. It is cut into 8 equal pieces. What is the length of each piece?",
        answer: "2.3 m"
      },
      {
        difficulty: "medium",
        format: "expression",
        prompt: "Divide by 100",
        given: "542.8 ÷ 100",
        answer: "5.428"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "0.6 × 0.4",
        answer: "0.24"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "7.2 ÷ 0.8",
        answer: "9"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "14.5 × 1.2",
        answer: "17.4"
      },
      {
        difficulty: "hard",
        prompt:
          "If 28 × 45 = 1,260, what is the exact value of 0.28 × 4.5?",
        answer: "1.26"
      },
      {
        difficulty: "hard",
        prompt:
          "A car consumes 6.4 litres of petrol for every 100 km travelled. How many litres are needed for a 250 km journey?",
        answer: "16 litres"
      }
    ]
  },
  {
    page: 4,
    title: "Decimals: Decimals & Fractions",
    label: "Decimals converting decimals and fractions",
    topic: "convert-decimals-fractions",
    instruction:
      "Convert decimals to simplified fractions and fractions to decimals.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Convert to a fraction in simplest form",
        given: "0.5",
        answer: "1/2"
      },
      {
        difficulty: "easy",
        prompt: "Convert to a fraction in simplest form",
        given: "0.25",
        answer: "1/4"
      },
      {
        difficulty: "easy",
        prompt: "Convert to a decimal",
        given: "3/10",
        answer: "0.3"
      },
      {
        difficulty: "easy",
        prompt: "Convert to a decimal",
        given: "3/4",
        answer: "0.75"
      },
      {
        difficulty: "easy",
        prompt:
          "In a survey, 0.8 of pupils enjoy swimming. Write 0.8 as a fraction in simplest form.",
        answer: "4/5"
      },
      {
        difficulty: "medium",
        prompt: "Convert to a fraction in simplest form",
        given: "0.65",
        answer: "13/20"
      },
      {
        difficulty: "medium",
        prompt: "Convert to a decimal",
        given: "7/20",
        answer: "0.35"
      },
      {
        difficulty: "medium",
        prompt: "Convert to a decimal",
        given: "3/8",
        answer: "0.375"
      },
      {
        difficulty: "medium",
        prompt: "Convert to a mixed number in simplest form",
        given: "2.4",
        answer: "2 2/5"
      },
      {
        difficulty: "medium",
        prompt:
          "Sam ate 0.4 of a pizza and Leo ate 3/8 of the same pizza. Who ate the larger share?",
        answer: "Sam (0.4 > 0.375)"
      },
      {
        difficulty: "hard",
        prompt: "Convert to a fraction in simplest form",
        given: "0.048",
        answer: "6/125"
      },
      {
        difficulty: "hard",
        prompt: "Convert to a decimal",
        given: "7/40",
        answer: "0.175"
      },
      {
        difficulty: "hard",
        prompt: "Convert to a mixed number in simplest form",
        given: "3.375",
        answer: "3 3/8"
      },
      {
        difficulty: "hard",
        prompt:
          "A bottle contains 0.84 litres of juice. Write 0.84 as a fraction of a litre in simplest form.",
        answer: "21/25 litres"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Calculate as a decimal",
        given: "1/4 + 0.65",
        answer: "0.9"
      }
    ]
  },
  {
    page: 5,
    title: "Decimals: Order & Compare",
    label: "Decimals order and compare",
    topic: "order-compare-decimals",
    instruction:
      "Compare decimals using <, > or =, order decimal sets, and identify bounds.",
    problems: [
      {
        difficulty: "easy",
        format: "compare",
        given: ["0.6", "0.4"],
        answer: ">"
      },
      {
        difficulty: "easy",
        format: "compare",
        given: ["0.35", "0.53"],
        answer: "<"
      },
      {
        difficulty: "easy",
        format: "compare",
        given: ["0.8", "0.80"],
        answer: "="
      },
      {
        difficulty: "easy",
        prompt: "Order from smallest to largest",
        given: ["0.4", "0.15", "0.7"],
        answer: "0.15, 0.4, 0.7"
      },
      {
        difficulty: "easy",
        prompt: "Which number is the largest: 0.28, 0.3 or 0.19?",
        answer: "0.3"
      },
      {
        difficulty: "medium",
        format: "compare",
        given: ["0.4", "0.09"],
        answer: ">"
      },
      {
        difficulty: "medium",
        format: "compare",
        given: ["0.375", "0.38"],
        answer: "<"
      },
      {
        difficulty: "medium",
        format: "compare",
        given: ["1.05", "1.005"],
        answer: ">"
      },
      {
        difficulty: "medium",
        prompt: "Order from smallest to largest",
        given: ["0.5", "0.05", "0.55", "0.505"],
        answer: "0.05, 0.5, 0.505, 0.55"
      },
      {
        difficulty: "medium",
        prompt:
          "Four sprinters clocked race times in seconds: Amy 12.35, Beth 12.4, Cat 12.08, Dan 12.305. Who won the race?",
        answer: "Cat (12.08 s)"
      },
      {
        difficulty: "hard",
        format: "compare",
        given: ["0.605", "0.65"],
        answer: "<"
      },
      {
        difficulty: "hard",
        format: "compare",
        given: ["0.089", "0.09"],
        answer: "<"
      },
      {
        difficulty: "hard",
        prompt: "Order from smallest to largest",
        given: ["0.7", "3/4", "0.72", "0.075"],
        answer: "0.075, 0.7, 0.72, 3/4"
      },
      {
        difficulty: "hard",
        prompt:
          "Write a decimal with 3 decimal places that lies strictly between 0.34 and 0.35.",
        answer: "0.345 (or any between 0.341 and 0.349)"
      },
      {
        difficulty: "hard",
        prompt:
          "Five weights in kg are 0.48 kg, 0.5 kg, 0.409 kg, 0.52 kg and 0.495 kg. What is the difference between the heaviest and lightest weight?",
        answer: "0.111 kg"
      }
    ]
  }
] satisfies readonly DecimalsSheet[];
