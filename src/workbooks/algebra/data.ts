import type { AlgebraSheet } from "./types";

/**
 * 11+ Algebra assessment workbook: 4 core topics across 4 A4 pages.
 * Each page features 15 problems structured into three progressive difficulty bands:
 * - 5 Easy (positions 1–3 narrow, 4–5 wide)
 * - 5 Medium (positions 6–8 narrow, 9–10 wide)
 * - 5 Hard (positions 11–13 narrow, 14–15 wide)
 */
export const sheets: readonly AlgebraSheet[] = [
  {
    page: 1,
    title: "Algebra: Simple Sequences",
    label: "Algebra simple sequences",
    topic: "simple-sequences",
    instruction:
      "Find term-to-term rules, extend arithmetic and geometric sequences, and determine nth terms.",
    problems: [
      {
        difficulty: "easy",
        prompt: "How many matchsticks are in Pattern 4?",
        diagram: {
          kind: "matchstick-sequence",
          patterns: [
            { label: "P1 (4)", count: 1 },
            { label: "P2 (7)", count: 2 },
            { label: "P3 (10)", count: 3 }
          ]
        },
        answer: "13 sticks"
      },
      {
        difficulty: "easy",
        prompt: "Find the next number in the sequence",
        given: "4, 7, 10, 13, ...",
        answer: "16 (+3 rule)"
      },
      {
        difficulty: "easy",
        prompt: "Find the next number in the sequence",
        given: "25, 21, 17, 13, ...",
        answer: "9 (−4 rule)"
      },
      {
        difficulty: "easy",
        prompt:
          "A sequence starts at 6 and adds 5 each time. What is the 8th term of the sequence?",
        answer: "41"
      },
      {
        difficulty: "easy",
        prompt:
          "The rule for a sequence is 'multiply by 2'. If the 1st term is 3, what is the 5th term?",
        answer: "48 (3, 6, 12, 24, 48)"
      },
      {
        difficulty: "medium",
        prompt: "How many matchsticks are in Pattern 6?",
        diagram: {
          kind: "matchstick-sequence",
          patterns: [
            { label: "P1 (4)", count: 1 },
            { label: "P2 (7)", count: 2 },
            { label: "P3 (10)", count: 3 }
          ]
        },
        answer: "19 sticks"
      },
      {
        difficulty: "medium",
        prompt: "Find the missing number in the sequence",
        given: "8, 15, _, 29, 36",
        answer: "22 (+7 rule)"
      },
      {
        difficulty: "medium",
        prompt: "Find the next term in the halving sequence",
        given: "96, 48, 24, 12, ...",
        answer: "6 (÷2 rule)"
      },
      {
        difficulty: "medium",
        prompt:
          "Fibonacci-type sequence where each term is the sum of the two before: 2, 3, 5, 8, 13, _, 34. Find the missing term.",
        answer: "21 (8 + 13)"
      },
      {
        difficulty: "medium",
        prompt:
          "The nth term rule of a sequence is 3n + 4. What is the 10th term of this sequence?",
        answer: "34"
      },
      {
        difficulty: "hard",
        prompt: "Which pattern number uses 40 matchsticks?",
        diagram: {
          kind: "matchstick-sequence",
          patterns: [
            { label: "P1 (4)", count: 1 },
            { label: "P2 (7)", count: 2 },
            { label: "P3 (10)", count: 3 }
          ]
        },
        answer: "Pattern 13"
      },
      {
        difficulty: "hard",
        prompt: "Find the next term in the sequence: 3, 7, 15, 31, 63, ...",
        answer: "127 (×2 + 1)"
      },
      {
        difficulty: "hard",
        prompt:
          "A sequence has nth term 5n − 2. Is 73 in the sequence? If yes, which term is it?",
        answer: "Yes, 15th term"
      },
      {
        difficulty: "hard",
        prompt:
          "A sequence starts at 100 and subtracts 7 each time. What is the first negative number in this sequence?",
        answer: "−5 (after 2)"
      },
      {
        difficulty: "hard",
        prompt:
          "The 3rd term of an arithmetic sequence is 14 and the 7th term is 30. What is the 1st term of the sequence?",
        answer: "6 (d = 4)"
      }
    ]
  },
  {
    page: 2,
    title: "Algebra: Substitution",
    label: "Algebra substitution",
    topic: "substitution",
    instruction:
      "Substitute numerical values into expressions, multi-variable formulas, and word problems.",
    problems: [
      {
        difficulty: "easy",
        prompt: "If a = 4, evaluate 3a + 2",
        answer: "14"
      },
      {
        difficulty: "easy",
        prompt: "If x = 7, evaluate 2x − 5",
        answer: "9"
      },
      {
        difficulty: "easy",
        prompt: "If b = 5, evaluate 20 − 3b",
        answer: "5"
      },
      {
        difficulty: "easy",
        prompt:
          "If p = 6 and q = 3, find the value of 2p + 4q.",
        answer: "24"
      },
      {
        difficulty: "easy",
        prompt:
          "A taxi fare is calculated using C = 3m + 4, where m is the distance in miles. What is the fare for a 5-mile journey?",
        answer: "£19"
      },
      {
        difficulty: "medium",
        prompt: "Find the output of the machine",
        diagram: {
          kind: "function-machine",
          input: "6",
          ops: ["× 4", "− 5"]
        },
        answer: "19"
      },
      {
        difficulty: "medium",
        prompt: "If x = 4 and y = 3, evaluate x² + 2y",
        answer: "22 (16 + 6)"
      },
      {
        difficulty: "medium",
        prompt: "If a = 8 and b = 2, evaluate (a + b) ÷ (a − b)",
        answer: "10/6 = 5/3 (1 2/3)"
      },
      {
        difficulty: "medium",
        prompt:
          "The area of a rectangle is given by A = l × w. If the length l is 12.5 cm and width w is 6 cm, what is the area A?",
        answer: "75 cm²"
      },
      {
        difficulty: "medium",
        prompt:
          "The velocity formula is v = u + at. If u = 4, a = 3, and t = 6, calculate the final velocity v.",
        answer: "22"
      },
      {
        difficulty: "hard",
        prompt: "If x = 5 cm, find the triangle perimeter",
        diagram: {
          kind: "algebra-shape",
          shape: "triangle",
          side1: "2x + 1",
          side2: "3x − 2",
          side3: "x + 4"
        },
        answer: "33 cm"
      },
      {
        difficulty: "hard",
        prompt: "If m = 6 and n = 2, evaluate 3m² − 4n³",
        answer: "76 (108 − 32)"
      },
      {
        difficulty: "hard",
        prompt: "If x = 3 and y = 4, calculate the value of √(x² + y²)",
        answer: "5 (√25)"
      },
      {
        difficulty: "hard",
        prompt:
          "A plumber charges £40 call-out fee plus £25 per hour (Total = 40 + 25h). If a bill comes to £165, how many hours h did he work?",
        answer: "5 hours"
      },
      {
        difficulty: "hard",
        prompt:
          "The formula to convert Celsius to Fahrenheit is F = 1.8C + 32. What is 25°C in degrees Fahrenheit?",
        answer: "77°F"
      }
    ]
  },
  {
    page: 3,
    title: "Algebra: Solving Equations",
    label: "Algebra solving equations",
    topic: "solving-equations",
    instruction:
      "Solve one-step, two-step, and bracketed linear equations, balance scales, and worded unknowns.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Find the value of x that balances the scale",
        diagram: {
          kind: "balance-scale",
          left: "x + 5",
          right: "12"
        },
        answer: "x = 7"
      },
      {
        difficulty: "easy",
        prompt: "Solve the equation for x",
        given: "x + 8 = 23",
        answer: "x = 15"
      },
      {
        difficulty: "easy",
        prompt: "Solve the equation for x",
        given: "4x = 36",
        answer: "x = 9"
      },
      {
        difficulty: "easy",
        prompt:
          "I think of a number, add 9 and get 25. What is the number?",
        answer: "16"
      },
      {
        difficulty: "easy",
        prompt: "Solve for x",
        given: "x − 14 = 29",
        answer: "x = 43"
      },
      {
        difficulty: "medium",
        prompt: "Find x to balance the scale",
        diagram: {
          kind: "balance-scale",
          left: "2x + 3",
          right: "17"
        },
        answer: "x = 7"
      },
      {
        difficulty: "medium",
        prompt: "Solve the two-step equation",
        given: "3x + 7 = 28",
        answer: "x = 7"
      },
      {
        difficulty: "medium",
        prompt: "Solve for x",
        given: "5x − 8 = 32",
        answer: "x = 8"
      },
      {
        difficulty: "medium",
        prompt: "Solve the equation with division: x/4 + 6 = 11",
        answer: "x = 20"
      },
      {
        difficulty: "medium",
        prompt:
          "Three consecutive integers sum to 48 (n + n+1 + n+2 = 48). What is the smallest integer n?",
        answer: "15"
      },
      {
        difficulty: "hard",
        prompt: "Find x to balance the beam",
        diagram: {
          kind: "balance-scale",
          left: "3x + 2",
          right: "x + 14"
        },
        answer: "x = 6"
      },
      {
        difficulty: "hard",
        prompt: "Solve the equation with brackets: 4(2x − 3) = 28",
        answer: "x = 5"
      },
      {
        difficulty: "hard",
        prompt: "Solve the equation with unknowns on both sides: 7x − 5 = 4x + 16",
        answer: "x = 7"
      },
      {
        difficulty: "hard",
        prompt:
          "Ben is 4 years older than twice Amy's age (B = 2A + 4). If the sum of their ages is 34, how old is Amy?",
        answer: "10 years old"
      },
      {
        difficulty: "hard",
        prompt: "Solve for x: (2x + 6) / 4 = 5",
        answer: "x = 7"
      }
    ]
  },
  {
    page: 4,
    title: "Algebra: Forming Expressions",
    label: "Algebra forming expressions",
    topic: "forming-expressions",
    instruction:
      "Translate worded statements into algebraic expressions and construct equations from geometric contexts.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Write the algebraic output expression",
        diagram: {
          kind: "function-machine",
          input: "n",
          ops: ["× 5", "+ 2"]
        },
        answer: "5n + 2"
      },
      {
        difficulty: "easy",
        prompt: "Write an expression for: 6 more than x",
        answer: "x + 6"
      },
      {
        difficulty: "easy",
        prompt: "Write an expression for: 4 less than 3 times y",
        answer: "3y − 4"
      },
      {
        difficulty: "easy",
        prompt:
          "Pens cost 50p each and rulers cost 80p each. Write an expression in pence for the total cost of x pens and y rulers.",
        answer: "50x + 80y"
      },
      {
        difficulty: "easy",
        prompt: "Write an expression for: Half of n increased by 7",
        answer: "n/2 + 7"
      },
      {
        difficulty: "medium",
        prompt: "Write an expression for the rectangle perimeter",
        diagram: {
          kind: "algebra-shape",
          shape: "rectangle",
          side1: "2x + 3",
          side2: "x"
        },
        answer: "6x + 6"
      },
      {
        difficulty: "medium",
        prompt: "Write the output expression",
        diagram: {
          kind: "function-machine",
          input: "a",
          ops: ["+ 4", "× 3"]
        },
        answer: "3(a + 4)"
      },
      {
        difficulty: "medium",
        prompt:
          "Sam has m marbles. Leo has 5 fewer than double Sam's marbles. Write an expression for Leo's marbles.",
        answer: "2m − 5"
      },
      {
        difficulty: "medium",
        prompt:
          "Adult cinema tickets cost £x and child tickets cost £(x − 3). Write a simplified expression for 2 adult and 3 child tickets.",
        answer: "5x − 9"
      },
      {
        difficulty: "medium",
        prompt:
          "Write a simplified expression for the sum of three consecutive whole numbers where the first number is n.",
        answer: "3n + 3"
      },
      {
        difficulty: "hard",
        prompt: "If the triangle perimeter is 36 cm, find x",
        diagram: {
          kind: "algebra-shape",
          shape: "triangle",
          side1: "2x − 1",
          side2: "x",
          side3: "x + 5"
        },
        answer: "x = 8"
      },
      {
        difficulty: "hard",
        prompt: "Simplify the output expression from the machine: input x → [× 4] → [− 6] → [÷ 2]",
        answer: "2x − 3"
      },
      {
        difficulty: "hard",
        prompt:
          "A rectangular garden is 3 m longer than twice its width w (length = 2w + 3). Write a simplified expression for its perimeter.",
        answer: "6w + 6"
      },
      {
        difficulty: "hard",
        prompt:
          "Ella is y years old. Her brother is 3 years younger than Ella, and her mother is 4 times as old as Ella. Write a simplified expression for their combined age.",
        answer: "6y − 3"
      },
      {
        difficulty: "hard",
        prompt:
          "A train has x carriages with 40 seats each and 2 carriages with 30 seats each. If there are 300 seats in total, form an equation and find x.",
        answer: "40x + 60 = 300 (x = 6)"
      }
    ]
  }
];
