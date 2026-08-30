import type { OperationsSheet } from "./types";

/**
 * 11+ Operations assessment workbook: 12 topics across 12 A4 pages.
 * Each page features 15 problems structured into three progressive difficulty bands:
 * - 5 Easy (positions 1–3 narrow, 4–5 wide)
 * - 5 Medium (positions 6–8 narrow, 9–10 wide)
 * - 5 Hard (positions 11–13 narrow, 14–15 wide)
 */
export const sheets = [
  {
    page: 1,
    title: "Operations: Written Addition",
    label: "Operations written addition",
    topic: "written-addition",
    instruction:
      "Use column addition for multi-digit whole numbers, decimals, money and word problems.",
    problems: [
      {
        difficulty: "easy",
        format: "expression",
        given: "348 + 275",
        answer: "623"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "529 + 186",
        answer: "715"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "£4.65 + £3.80",
        answer: "£8.45"
      },
      {
        difficulty: "easy",
        prompt:
          "A bakery sells 245 rolls in the morning and 178 in the afternoon. How many rolls were sold in total?",
        answer: "423"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Add three numbers",
        given: "618 + 49 + 137",
        answer: "804"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "3,485 + 2,749",
        answer: "6,234"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "48.7 + 36.5",
        answer: "85.2"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "£28.50 + £19.75",
        answer: "£48.25"
      },
      {
        difficulty: "medium",
        prompt:
          "A school has 384 boys, 419 girls and 12 staff in assembly. What is the total attendance?",
        answer: "815"
      },
      {
        difficulty: "medium",
        format: "expression",
        prompt: "Add four-digit numbers",
        given: "4,085 + 392 + 1,274",
        answer: "5,751"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "45,827 + 28,495",
        answer: "74,322"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "138.4 + 29.75 + 6.08",
        answer: "174.23"
      },
      {
        difficulty: "hard",
        prompt:
          "Find the missing digit * in the addition: 4,*72 + 2,845 = 7,417",
        answer: "5"
      },
      {
        difficulty: "hard",
        prompt:
          "A charity raised £1,450 on Friday, £2,875 on Saturday and £965 on Sunday. Find the total raised.",
        answer: "£5,290"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Add six-digit numbers",
        given: "350,480 + 189,625",
        answer: "540,105"
      }
    ]
  },
  {
    page: 2,
    title: "Operations: Written Subtraction",
    label: "Operations written subtraction",
    topic: "written-subtraction",
    instruction:
      "Use column subtraction with exchanging across multi-digit numbers, decimals and money.",
    problems: [
      {
        difficulty: "easy",
        format: "expression",
        given: "524 − 187",
        answer: "337"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "703 − 248",
        answer: "455"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "£10.00 − £3.65",
        answer: "£6.35"
      },
      {
        difficulty: "easy",
        prompt:
          "Liam had £50. He spent £18.75 on a game. How much money does he have left?",
        answer: "£31.25"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Subtract across a zero",
        given: "840 − 365",
        answer: "475"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "4,000 − 1,675",
        answer: "2,325"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "6,214 − 3,488",
        answer: "2,726"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "84.3 − 37.8",
        answer: "46.5"
      },
      {
        difficulty: "medium",
        prompt:
          "A stadium holds 5,200 spectators. 3,845 tickets are sold. How many seats remain empty?",
        answer: "1,355"
      },
      {
        difficulty: "medium",
        format: "expression",
        prompt: "Subtract decimals",
        given: "50.00 − 24.68",
        answer: "25.32"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "50,030 − 24,185",
        answer: "25,845"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "140.2 − 68.75",
        answer: "71.45"
      },
      {
        difficulty: "hard",
        prompt:
          "Find the missing digit * in the subtraction: 8,3*4 − 3,652 = 4,672",
        answer: "2"
      },
      {
        difficulty: "hard",
        prompt:
          "A loaded lorry weighs 12,450 kg. The empty lorry weighs 4,785 kg. What is the weight of the load?",
        answer: "7,665 kg"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Subtract across multiple zeros",
        given: "200,000 − 73,482",
        answer: "126,518"
      }
    ]
  },
  {
    page: 3,
    title: "Operations: Written Multiplication",
    label: "Operations written multiplication",
    topic: "written-multiplication",
    instruction:
      "Multiply multi-digit whole numbers and decimals using short and long multiplication.",
    problems: [
      {
        difficulty: "easy",
        format: "expression",
        given: "48 × 6",
        answer: "288"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "135 × 4",
        answer: "540"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "74 × 8",
        answer: "592"
      },
      {
        difficulty: "easy",
        prompt:
          "Each box contains 24 pencils. How many pencils are in 7 full boxes?",
        answer: "168"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Multiply three digits by one digit",
        given: "206 × 5",
        answer: "1,030"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "47 × 23",
        answer: "1,081"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "164 × 18",
        answer: "2,952"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "£3.45 × 8",
        answer: "£27.60"
      },
      {
        difficulty: "medium",
        prompt:
          "A cinema sells 145 adult tickets at £12 each. What is the total ticket income?",
        answer: "£1,740"
      },
      {
        difficulty: "medium",
        format: "expression",
        prompt: "Long multiplication",
        given: "328 × 34",
        answer: "11,152"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "425 × 36",
        answer: "15,300"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "24.8 × 15",
        answer: "372"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "1,308 × 45",
        answer: "58,860"
      },
      {
        difficulty: "hard",
        prompt:
          "A train has 8 carriages with 74 seats each. If all seats are filled on 14 journeys, how many passengers travel?",
        answer: "8,288"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Four digits by two digits",
        given: "2,456 × 28",
        answer: "68,768"
      }
    ]
  },
  {
    page: 4,
    title: "Operations: Written Division",
    label: "Operations written division",
    topic: "written-division",
    instruction:
      "Use short and long division to find exact quotients, remainders, and solve word problems.",
    problems: [
      {
        difficulty: "easy",
        format: "expression",
        given: "168 ÷ 4",
        answer: "42"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "255 ÷ 5",
        answer: "51"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "432 ÷ 6",
        answer: "72"
      },
      {
        difficulty: "easy",
        prompt:
          "184 sweets are shared equally among 8 children. How many sweets does each child receive?",
        answer: "23"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Divide three digits by one digit",
        given: "371 ÷ 7",
        answer: "53"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "1,458 ÷ 6",
        answer: "243"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "3,144 ÷ 8",
        answer: "393"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "435 ÷ 15",
        answer: "29"
      },
      {
        difficulty: "medium",
        prompt:
          "A ribbon 225 cm long is cut into 9 equal pieces. What is the length of each piece?",
        answer: "25 cm"
      },
      {
        difficulty: "medium",
        format: "expression",
        prompt: "Quotient and remainder",
        given: "178 ÷ 5",
        answer: "35 r 3"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "3,570 ÷ 42",
        answer: "85"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Quotient and remainder",
        given: "7,544 ÷ 26",
        answer: "290 r 4"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "£79.20 ÷ 12",
        answer: "£6.60"
      },
      {
        difficulty: "hard",
        prompt:
          "350 pupils and 25 teachers go on a trip. Each coach seats 48 people. How many coaches are needed?",
        answer: "8"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Four digits by two digits",
        given: "5,616 ÷ 36",
        answer: "156"
      }
    ]
  },
  {
    page: 5,
    title: "Operations: Mental Add & Subtract",
    label: "Operations mental addition and subtraction",
    topic: "mental-add-sub",
    instruction:
      "Use mental calculation strategies including bridging, compensation and complements.",
    problems: [
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Complement to 100",
        given: "100 − 37",
        answer: "63"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "48 + 35",
        answer: "83"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "92 − 46",
        answer: "46"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Add 99 (compensation)",
        given: "245 + 99",
        answer: "344"
      },
      {
        difficulty: "easy",
        prompt:
          "A toy costs £3.40. You pay with a £5 note. How much change do you receive?",
        answer: "£1.60"
      },
      {
        difficulty: "medium",
        format: "expression",
        prompt: "Complement to 1,000",
        given: "1,000 − 365",
        answer: "635"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "350 + 480",
        answer: "830"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "4.8 + 3.7",
        answer: "8.5"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "720 − 390",
        answer: "330"
      },
      {
        difficulty: "medium",
        prompt:
          "What number is exactly 150 less than 1,200?",
        answer: "1,050"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Complement to 10,000",
        given: "10,000 − 4,280",
        answer: "5,720"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "1.0 − 0.38",
        answer: "0.62"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "85 + 47 − 35",
        answer: "97"
      },
      {
        difficulty: "hard",
        prompt:
          "The temperature was 4.5°C at noon and dropped by 7.8°C overnight. What was the overnight temperature?",
        answer: "−3.3°C"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Three-term mental calculation",
        given: "2,400 + 3,800 − 1,900",
        answer: "4,300"
      }
    ]
  },
  {
    page: 6,
    title: "Operations: Mental Multiply & Divide",
    label: "Operations mental multiplication and division",
    topic: "mental-mul-div",
    instruction:
      "Apply mental multiplication and division rules, doubling, halving, and scaling facts.",
    problems: [
      {
        difficulty: "easy",
        format: "expression",
        given: "60 × 7",
        answer: "420"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "480 ÷ 6",
        answer: "80"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Double twice",
        given: "35 × 4",
        answer: "140"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Halve 350",
        given: "350 ÷ 2",
        answer: "175"
      },
      {
        difficulty: "easy",
        prompt:
          "9 packs of stickers cost £4.50 in total. What is the cost of 1 pack?",
        answer: "50p"
      },
      {
        difficulty: "medium",
        format: "expression",
        prompt: "Multiply by 5 (×10 ÷2)",
        given: "84 × 5",
        answer: "420"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "640 ÷ 20",
        answer: "32"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "45 × 20",
        answer: "900"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "700 ÷ 25",
        answer: "28"
      },
      {
        difficulty: "medium",
        prompt:
          "If 6 concert tickets cost £42, how much do 15 concert tickets cost?",
        answer: "£105"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "3.6 ÷ 9",
        answer: "0.4"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "0.8 × 40",
        answer: "32"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Mental percentage",
        given: "15% of £80",
        answer: "£12"
      },
      {
        difficulty: "hard",
        prompt:
          "If 24 × 18 = 432, what is the value of 2.4 × 180?",
        answer: "432"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Multiply by 0.2 (÷5)",
        given: "450 × 0.2",
        answer: "90"
      }
    ]
  },
  {
    page: 7,
    title: "Operations: Square & Cube Numbers",
    label: "Operations square and cube numbers",
    topic: "square-cube",
    instruction:
      "Calculate squares, cubes, square roots and cube roots, and solve geometric problems.",
    problems: [
      {
        difficulty: "easy",
        format: "expression",
        given: "7²",
        answer: "49"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "9²",
        answer: "81"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "3³",
        answer: "27"
      },
      {
        difficulty: "easy",
        format: "expression",
        given: "√64",
        answer: "8"
      },
      {
        difficulty: "easy",
        prompt:
          "What is the area of a square whose side length is 8 cm?",
        answer: "64 cm²"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "12²",
        answer: "144"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "15²",
        answer: "225"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "5³",
        answer: "125"
      },
      {
        difficulty: "medium",
        format: "expression",
        given: "∛64",
        answer: "4"
      },
      {
        difficulty: "medium",
        format: "expression",
        prompt: "Sum of two squares",
        given: "6² + 8²",
        answer: "100"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "4³ − 5²",
        answer: "39"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "√144 + ∛216",
        answer: "18"
      },
      {
        difficulty: "hard",
        format: "expression",
        given: "20² − 16²",
        answer: "144"
      },
      {
        difficulty: "hard",
        prompt:
          "A solid cube has a volume of 512 cm³. What is the length of one edge of the cube?",
        answer: "8 cm"
      },
      {
        difficulty: "hard",
        prompt:
          "Find the square number that lies between 150 and 180.",
        answer: "169"
      }
    ]
  },
  {
    page: 8,
    title: "Operations: Multiples",
    label: "Operations multiples",
    topic: "multiples",
    instruction:
      "Find multiples, common multiples and the lowest common multiple (LCM) of numbers.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Write the first 5 multiples of 6",
        answer: "6, 12, 18, 24, 30"
      },
      {
        difficulty: "easy",
        prompt: "Is 48 a multiple of 7? (Yes or No)",
        answer: "No"
      },
      {
        difficulty: "easy",
        prompt: "Smallest common multiple of 4 and 6",
        answer: "12"
      },
      {
        difficulty: "easy",
        prompt:
          "Which of these numbers is NOT a multiple of 8: 24, 40, 58, 72?",
        answer: "58"
      },
      {
        difficulty: "easy",
        prompt: "What is the 9th multiple of 7?",
        answer: "63"
      },
      {
        difficulty: "medium",
        prompt: "Find the lowest common multiple (LCM) of",
        given: ["6", "8"],
        answer: "24"
      },
      {
        difficulty: "medium",
        prompt: "Find the lowest common multiple (LCM) of",
        given: ["9", "12"],
        answer: "36"
      },
      {
        difficulty: "medium",
        prompt: "How many multiples of 4 lie between 25 and 50?",
        answer: "6"
      },
      {
        difficulty: "medium",
        prompt:
          "Find a common multiple of 5, 6 and 10 that is less than 50.",
        answer: "30"
      },
      {
        difficulty: "medium",
        prompt:
          "A bell rings every 6 minutes and a buzzer sounds every 8 minutes. After how many minutes will they next sound together?",
        answer: "24 minutes"
      },
      {
        difficulty: "hard",
        prompt: "Find the lowest common multiple (LCM) of",
        given: ["4", "6", "10"],
        answer: "60"
      },
      {
        difficulty: "hard",
        prompt: "Find the lowest common multiple (LCM) of",
        given: ["8", "12", "15"],
        answer: "120"
      },
      {
        difficulty: "hard",
        prompt: "What is the smallest 3-digit multiple of 14?",
        answer: "112"
      },
      {
        difficulty: "hard",
        prompt:
          "Lighthouse A flashes every 15 seconds and B every 25 seconds. If they flash together at 8:00 pm, after how many seconds do they next flash together?",
        answer: "75 seconds"
      },
      {
        difficulty: "hard",
        prompt:
          "Find the sum of all the multiples of 9 between 20 and 60.",
        answer: "162"
      }
    ]
  },
  {
    page: 9,
    title: "Operations: Factors",
    label: "Operations factors",
    topic: "factors",
    instruction:
      "Find factor pairs, list factors, and determine the highest common factor (HCF).",
    problems: [
      {
        difficulty: "easy",
        prompt: "Write all factor pairs of 20",
        answer: "1 × 20, 2 × 10, 4 × 5"
      },
      {
        difficulty: "easy",
        prompt: "List all factors of 18 in order",
        answer: "1, 2, 3, 6, 9, 18"
      },
      {
        difficulty: "easy",
        prompt: "Is 6 a factor of 42? (Yes or No)",
        answer: "Yes"
      },
      {
        difficulty: "easy",
        prompt: "How many factors does 12 have in total?",
        answer: "6"
      },
      {
        difficulty: "easy",
        prompt: "List all common factors of 12 and 18",
        answer: "1, 2, 3, 6"
      },
      {
        difficulty: "medium",
        prompt: "Find the highest common factor (HCF) of",
        given: ["18", "24"],
        answer: "6"
      },
      {
        difficulty: "medium",
        prompt: "Find the highest common factor (HCF) of",
        given: ["28", "42"],
        answer: "14"
      },
      {
        difficulty: "medium",
        prompt: "List all factors of 36 in order",
        answer: "1, 2, 3, 4, 6, 9, 12, 18, 36"
      },
      {
        difficulty: "medium",
        prompt:
          "Which number between 20 and 30 has exactly 3 factors?",
        answer: "25"
      },
      {
        difficulty: "medium",
        prompt:
          "A teacher has 24 red pens and 36 blue pens. What is the greatest number of identical packs she can make?",
        answer: "12"
      },
      {
        difficulty: "hard",
        prompt: "Find the highest common factor (HCF) of",
        given: ["36", "54", "90"],
        answer: "18"
      },
      {
        difficulty: "hard",
        prompt: "Find the highest common factor (HCF) of",
        given: ["48", "72", "120"],
        answer: "24"
      },
      {
        difficulty: "hard",
        prompt: "How many factors does 64 have in total?",
        answer: "7"
      },
      {
        difficulty: "hard",
        prompt:
          "Two planks of lengths 48 cm and 84 cm are cut into equal maximum pieces with no waste. What is each piece length?",
        answer: "12 cm"
      },
      {
        difficulty: "hard",
        prompt:
          "A number has factors 1, 2, 3, 4, 6 and itself. What is the number?",
        answer: "12"
      }
    ]
  },
  {
    page: 10,
    title: "Operations: Primes & Factor Trees",
    label: "Operations prime numbers and factor trees",
    topic: "primes-factors",
    instruction:
      "Identify prime numbers, construct factor trees, and write products of prime factors.",
    problems: [
      {
        difficulty: "easy",
        prompt: "What is the smallest prime number?",
        answer: "2"
      },
      {
        difficulty: "easy",
        prompt: "What is the only even prime number?",
        answer: "2"
      },
      {
        difficulty: "easy",
        prompt: "Is 27 a prime number? (Yes or No)",
        answer: "No"
      },
      {
        difficulty: "easy",
        prompt: "List all prime numbers between 10 and 20 in order",
        answer: "11, 13, 17, 19"
      },
      {
        difficulty: "easy",
        prompt: "Is 31 prime or composite?",
        answer: "Prime"
      },
      {
        difficulty: "medium",
        prompt: "Which of these numbers is NOT prime?",
        given: ["41", "43", "47", "49", "53"],
        answer: "49"
      },
      {
        difficulty: "medium",
        prompt: "Write 24 as a product of prime factors",
        answer: "2 × 2 × 2 × 3"
      },
      {
        difficulty: "medium",
        prompt: "Write 36 as a product of prime factors",
        answer: "2 × 2 × 3 × 3"
      },
      {
        difficulty: "medium",
        prompt: "Find the sum of all prime numbers between 20 and 30.",
        answer: "52"
      },
      {
        difficulty: "medium",
        prompt:
          "Two prime numbers multiply together to give 91. What are the two prime numbers?",
        answer: "7 and 13"
      },
      {
        difficulty: "hard",
        prompt: "Write 180 as a product of primes in index form",
        answer: "2² × 3² × 5"
      },
      {
        difficulty: "hard",
        prompt: "Write 72 as a product of primes in index form",
        answer: "2³ × 3²"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Work out the number",
        given: "2³ × 3 × 5",
        answer: "120"
      },
      {
        difficulty: "hard",
        prompt:
          "Two prime numbers add to 40 and have a difference of 6. What are the two prime numbers?",
        answer: "17 and 23"
      },
      {
        difficulty: "hard",
        prompt:
          "How many distinct prime factors does 210 have in total?",
        answer: "4"
      }
    ]
  },
  {
    page: 11,
    title: "Operations: Estimating",
    label: "Operations estimating",
    topic: "estimating",
    instruction:
      "Round numbers to 1 significant figure or nearest 10/100 to estimate calculations quickly.",
    problems: [
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Estimate (nearest 10)",
        given: "42 + 79",
        answer: "120"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Estimate (nearest 10)",
        given: "198 − 71",
        answer: "130"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Estimate (nearest 10)",
        given: "48 × 6",
        answer: "300"
      },
      {
        difficulty: "easy",
        prompt:
          "A book costs £4.95. Estimate the cost of 6 copies to the nearest pound.",
        answer: "£30"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Estimate using a friendly multiple",
        given: "243 ÷ 6",
        answer: "40"
      },
      {
        difficulty: "medium",
        format: "expression",
        prompt: "Estimate (nearest 100)",
        given: "389 + 512",
        answer: "900"
      },
      {
        difficulty: "medium",
        format: "expression",
        prompt: "Estimate (nearest 10)",
        given: "49 × 31",
        answer: "1,500"
      },
      {
        difficulty: "medium",
        format: "expression",
        prompt: "Estimate (1 sig fig)",
        given: "6,280 ÷ 69",
        answer: "90"
      },
      {
        difficulty: "medium",
        prompt:
          "A hall has 28 rows of 19 seats. Estimate the total number of seats to 1 sig fig.",
        answer: "600"
      },
      {
        difficulty: "medium",
        prompt:
          "Which is the best estimate for 7.9 × 4.1: 24, 28, 32 or 40?",
        answer: "32"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Estimate (1 sig fig)",
        given: "(48.6 × 21.3) ÷ 9.8",
        answer: "100"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Estimate to nearest integer",
        given: "√82",
        answer: "9"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Estimate using 4,000 × 0.5",
        given: "3,985 × 0.48",
        answer: "2,000"
      },
      {
        difficulty: "hard",
        prompt:
          "A bus travels at an average 38 mph for 4.8 hours. Estimate the distance travelled.",
        answer: "200 miles"
      },
      {
        difficulty: "hard",
        prompt:
          "A factory produces 4,920 parts daily for 295 days a year. Estimate the annual output (1 sig fig).",
        answer: "1,500,000"
      }
    ]
  },
  {
    page: 12,
    title: "Operations: Worded Problems",
    label: "Operations worded number problems",
    topic: "worded-problems",
    instruction:
      "Solve multi-step word problems involving arithmetic, money, measure, ratios and logic.",
    problems: [
      {
        difficulty: "easy",
        prompt:
          "Sam has £15. He buys a sandwich for £4.50 and a drink for £1.80. How much change remains?",
        answer: "£8.70"
      },
      {
        difficulty: "easy",
        prompt:
          "A pack of 6 identical pens costs £4.20. What is the cost of 1 pen?",
        answer: "70p"
      },
      {
        difficulty: "easy",
        prompt:
          "Ella is 9 years old. Her brother is 4 years older. Her mother is 3 times the brother's age. How old is the mother?",
        answer: "39 years"
      },
      {
        difficulty: "easy",
        prompt:
          "140 reward stickers are shared equally among 4 pupils. How many stickers does each pupil receive?",
        answer: "35"
      },
      {
        difficulty: "easy",
        prompt:
          "A train departs at 09:45 and arrives at 11:20. How long did the journey take in minutes?",
        answer: "95 minutes"
      },
      {
        difficulty: "medium",
        prompt:
          "3 notebooks and 2 rulers cost £7.20. If 1 ruler costs 90p, how much does 1 notebook cost?",
        answer: "£1.80"
      },
      {
        difficulty: "medium",
        prompt:
          "A hall sells 250 adult tickets at £14 each and 120 child tickets at £8 each. What is the total revenue?",
        answer: "£4,460"
      },
      {
        difficulty: "medium",
        prompt:
          "The sum of two numbers is 65 and their difference is 17. What is the larger number?",
        answer: "41"
      },
      {
        difficulty: "medium",
        prompt:
          "4 kg of apples cost £6.00. What is the total cost of 7 kg of the same apples?",
        answer: "£10.50"
      },
      {
        difficulty: "medium",
        prompt:
          "A recipe for 8 muffins requires 200 g of flour. How much flour is needed to make 28 muffins?",
        answer: "700 g"
      },
      {
        difficulty: "hard",
        prompt:
          "A pen costs 40p more than a pencil. 3 pens and 5 pencils cost £6.00 in total. Find the cost of 1 pen.",
        answer: "£1.00"
      },
      {
        difficulty: "hard",
        prompt:
          "Maya and Jay share £180 in the ratio 4 : 5. How much more money does Jay receive than Maya?",
        answer: "£20"
      },
      {
        difficulty: "hard",
        prompt:
          "The mean of four numbers is 18. Three of the numbers are 14, 22 and 19. What is the fourth number?",
        answer: "17"
      },
      {
        difficulty: "hard",
        prompt:
          "A shop offers: 'Buy 2 games, get 1 free.' Each game costs £18. How much does Liam pay for 9 games?",
        answer: "£108"
      },
      {
        difficulty: "hard",
        prompt:
          "In a car park with 84 vehicles (cars and motorbikes), there are 304 wheels in total. How many cars are there?",
        answer: "68"
      }
    ]
  }
] satisfies readonly OperationsSheet[];
