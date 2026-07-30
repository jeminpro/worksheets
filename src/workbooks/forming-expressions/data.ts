import {
  constant,
  difference,
  product,
  quotient,
  sum,
  variable
} from "./expression";
import type { FormingExpressionsSheet } from "./types";

/** Word problems progressing from one-step expressions to multi-variable expressions. */
export const sheets = [
  {
    page: 1,
    title: "Forming Expressions: Easy",
    label: "Forming expressions easy practice",
    instruction: "Write an expression for each situation. You do not need to work out a value.",
    problems: [
      {
        prompt:
          "A cinema ticket costs £t and a box of popcorn costs £3. Write an expression for the total cost.",
        expression: sum(variable("t"), constant(3))
      },
      {
        prompt:
          "Maya has n stickers and gives 5 stickers to a friend. Write an expression for how many she has left.",
        expression: difference(variable("n"), constant(5))
      },
      {
        prompt:
          "Each box holds 6 pencils. Write an expression for the number of pencils in b boxes.",
        expression: product(constant(6), variable("b"))
      },
      {
        prompt:
          "A baker shares c cupcakes equally between 4 tables. Write an expression for the number on each table.",
        expression: quotient(variable("c"), constant(4))
      },
      {
        prompt:
          "Omar scores s points in a game and then scores 9 more. Write an expression for his total score.",
        expression: sum(variable("s"), constant(9))
      },
      {
        prompt:
          "A rope is m metres long. 4 metres are cut off. Write an expression for the length remaining.",
        expression: difference(variable("m"), constant(4))
      }
    ]
  },
  {
    page: 2,
    title: "Forming Expressions: Easy",
    label: "Forming expressions easy practice",
    instruction: "Choose the operation described, then write the expression.",
    problems: [
      {
        prompt:
          "A bus journey costs £f and a booking fee costs £2. Write an expression for the total cost.",
        expression: sum(variable("f"), constant(2))
      },
      {
        prompt:
          "A ribbon is r centimetres long. Priya cuts off 7 cm. Write an expression for the length remaining.",
        expression: difference(variable("r"), constant(7))
      },
      {
        prompt:
          "There are 8 apples in each crate. Write an expression for the number of apples in c crates.",
        expression: product(constant(8), variable("c"))
      },
      {
        prompt:
          "Leo reads p pages equally over 5 days. Write an expression for the number of pages he reads each day.",
        expression: quotient(variable("p"), constant(5))
      },
      {
        prompt:
          "A plant is h centimetres tall and grows by 6 cm. Write an expression for its new height.",
        expression: sum(variable("h"), constant(6))
      },
      {
        prompt:
          "Each packet holds 9 biscuits. Write an expression for the number of biscuits in k packets.",
        expression: product(constant(9), variable("k"))
      }
    ]
  },
  {
    page: 3,
    title: "Forming Expressions: Medium",
    label: "Forming expressions medium practice",
    instruction: "Some situations need two operations. Use brackets where they are needed.",
    problems: [
      {
        prompt:
          "A notebook costs £n. Aisha buys 3 notebooks and a £2 pen. Write an expression for the total cost.",
        expression: sum(product(constant(3), variable("n")), constant(2))
      },
      {
        prompt:
          "A taxi charges £4 plus £2 for every mile travelled. Write an expression for the cost of a journey of m miles.",
        expression: sum(product(constant(2), variable("m")), constant(4))
      },
      {
        prompt:
          "Six bags contain s sweets each. Two sweets are eaten from each bag. Write an expression for the sweets left.",
        expression: product(
          constant(6),
          difference(variable("s"), constant(2))
        )
      },
      {
        prompt:
          "Kiran adds 8 balloons to a box of k balloons, then shares them equally between 3 groups. Write an expression for each group.",
        expression: quotient(
          sum(variable("k"), constant(8)),
          constant(3)
        )
      },
      {
        prompt:
          "A meal costs £m. Two meals are ordered and a £5 tip is added. Write an expression for the total bill.",
        expression: sum(product(constant(2), variable("m")), constant(5))
      },
      {
        prompt:
          "Seven shelves each hold j jars, then 3 jars are removed. Write an expression for how many jars remain.",
        expression: difference(
          product(constant(7), variable("j")),
          constant(3)
        )
      }
    ]
  },
  {
    page: 4,
    title: "Forming Expressions: Medium",
    label: "Forming expressions medium practice",
    instruction: "Show the order of the operations clearly in each expression.",
    problems: [
      {
        prompt:
          "Five friends each buy a ticket costing £t and a drink costing £3. Write an expression for their total cost.",
        expression: product(
          constant(5),
          sum(variable("t"), constant(3))
        )
      },
      {
        prompt:
          "A machine makes x parts each hour for 7 hours. Ten parts are rejected. Write an expression for the parts accepted.",
        expression: difference(
          product(constant(7), variable("x")),
          constant(10)
        )
      },
      {
        prompt:
          "A book costs £b. Sam buys 2 books and uses a £5 voucher. Write an expression for the amount Sam pays.",
        expression: difference(
          product(constant(2), variable("b")),
          constant(5)
        )
      },
      {
        prompt:
          "Four teams each have p players and gain 1 reserve player. Write an expression for the total number of players.",
        expression: product(
          constant(4),
          sum(variable("p"), constant(1))
        )
      },
      {
        prompt:
          "A shop sells packs of 4 cards for £c. Freya buys 6 packs and pays a £1 delivery fee. Write an expression for the total cost.",
        expression: sum(product(constant(6), variable("c")), constant(1))
      },
      {
        prompt:
          "Amir has d sweets. He eats 3, then shares the rest equally between 4 friends. Write an expression for each friend’s share.",
        expression: quotient(
          difference(variable("d"), constant(3)),
          constant(4)
        )
      }
    ]
  },
  {
    page: 5,
    title: "Forming Expressions: Hard",
    label: "Forming expressions hard practice",
    instruction: "Use more than one variable when the situation requires it.",
    problems: [
      {
        prompt:
          "Adult concert tickets cost £a and child tickets cost £c. Write an expression for 3 adult tickets and 2 child tickets.",
        expression: sum(
          product(constant(3), variable("a")),
          product(constant(2), variable("c"))
        )
      },
      {
        prompt:
          "A rectangle has length l and width w. Write an expression for its perimeter.",
        expression: product(
          constant(2),
          sum(variable("l"), variable("w"))
        )
      },
      {
        prompt:
          "Each of 4 crates contains r red balls and b blue balls. Write an expression for the total number of balls.",
        expression: product(
          constant(4),
          sum(variable("r"), variable("b"))
        )
      },
      {
        prompt:
          "Pens cost £p and notebooks cost £n. Zara buys 3 pens and 2 notebooks, then uses a £4 voucher. Write an expression for the amount paid.",
        expression: difference(
          sum(
            product(constant(3), variable("p")),
            product(constant(2), variable("n"))
          ),
          constant(4)
        )
      },
      {
        prompt:
          "Apples cost £a each and oranges cost £o each. Write an expression for 5 apples and 3 oranges.",
        expression: sum(
          product(constant(5), variable("a")),
          product(constant(3), variable("o"))
        )
      },
      {
        prompt:
          "A triangle has sides of length x, y and z. Write an expression for its perimeter.",
        expression: sum(variable("x"), variable("y"), variable("z"))
      }
    ]
  },
  {
    page: 6,
    title: "Forming Expressions: Hard",
    label: "Forming expressions hard practice",
    instruction: "Form and simplify each expression where possible.",
    problems: [
      {
        prompt:
          "A rectangle has width w and is 5 cm longer than it is wide. Write an expression for its area.",
        expression: product(
          variable("w"),
          sum(variable("w"), constant(5))
        )
      },
      {
        prompt:
          "Three consecutive even numbers begin with n. Write a simplified expression for their total.",
        expression: sum(product(constant(3), variable("n")), constant(6))
      },
      {
        prompt:
          "Adult tickets cost £a and child tickets cost £c. A family buys 2 adult tickets and 3 child tickets, plus a £6 booking fee. Write an expression for the total.",
        expression: sum(
          product(constant(2), variable("a")),
          product(constant(3), variable("c")),
          constant(6)
        )
      },
      {
        prompt:
          "A prize fund contains £x from one sponsor and £y from another. It is shared equally between 5 winners. Write an expression for each winner’s share.",
        expression: quotient(
          sum(variable("x"), variable("y")),
          constant(5)
        )
      },
      {
        prompt:
          "Two consecutive odd numbers begin with n. Write a simplified expression for their total.",
        expression: sum(product(constant(2), variable("n")), constant(2))
      },
      {
        prompt:
          "A square of side s has a rectangle of length s and width 3 attached beside it. Write an expression for the total area.",
        expression: sum(
          product(variable("s"), variable("s")),
          product(constant(3), variable("s"))
        )
      }
    ]
  }
] satisfies readonly FormingExpressionsSheet[];
