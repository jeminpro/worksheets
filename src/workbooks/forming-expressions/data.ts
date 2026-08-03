import {
  constant,
  difference,
  product,
  quotient,
  sum,
  variable
} from "./expression";
import type { FormingExpressionsSheet } from "./types";

/** Word problems from one-step to multi-variable: easy, medium practice, then hard. */
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
    title: "Forming Expressions: Medium",
    label: "Forming expressions medium practice",
    instruction: "Decide which operation happens first, then write the expression.",
    problems: [
      {
        prompt:
          "A film ticket costs £f. Yasmin buys 4 tickets and a £6 popcorn deal. Write an expression for the total cost.",
        expression: sum(product(constant(4), variable("f")), constant(6))
      },
      {
        prompt:
          "A plumber charges £30 plus £15 for every hour of work. Write an expression for the cost of h hours of work.",
        expression: sum(product(constant(15), variable("h")), constant(30))
      },
      {
        prompt:
          "Eight trays each hold c cakes. One cake is taken from every tray. Write an expression for the cakes remaining.",
        expression: product(
          constant(8),
          difference(variable("c"), constant(1))
        )
      },
      {
        prompt:
          "Ravi has g grapes. He buys 12 more, then shares them equally between 5 bowls. Write an expression for each bowl.",
        expression: quotient(
          sum(variable("g"), constant(12)),
          constant(5)
        )
      },
      {
        prompt:
          "A magazine costs £m. Leila buys 3 magazines and pays a £2 postage fee. Write an expression for the total.",
        expression: sum(product(constant(3), variable("m")), constant(2))
      },
      {
        prompt:
          "Nine boxes each contain e eggs, then 4 eggs are broken. Write an expression for how many eggs remain.",
        expression: difference(
          product(constant(9), variable("e")),
          constant(4)
        )
      }
    ]
  },
{
    page: 6,
    title: "Forming Expressions: Medium",
    label: "Forming expressions medium practice",
    instruction: "Use brackets when a sum or difference is multiplied or divided.",
    problems: [
      {
        prompt:
          "Three classes each have s students and 2 visitors. Write an expression for the total number of people.",
        expression: product(
          constant(3),
          sum(variable("s"), constant(2))
        )
      },
      {
        prompt:
          "A factory packs w widgets every day for 5 days. Twelve widgets are damaged. Write an expression for the widgets left.",
        expression: difference(
          product(constant(5), variable("w")),
          constant(12)
        )
      },
      {
        prompt:
          "A scarf costs £r. Nina buys 3 scarves and uses a £4 voucher. Write an expression for the amount she pays.",
        expression: difference(
          product(constant(3), variable("r")),
          constant(4)
        )
      },
      {
        prompt:
          "Six bowls each hold a apples, then 1 more apple is added to each bowl. Write an expression for the total apples.",
        expression: product(
          constant(6),
          sum(variable("a"), constant(1))
        )
      },
      {
        prompt:
          "A gym membership costs £g per month. Tom pays for 8 months and a £10 joining fee. Write an expression for the total.",
        expression: sum(product(constant(8), variable("g")), constant(10))
      },
      {
        prompt:
          "Priya has q stickers. She gives away 5, then shares the rest equally between 3 albums. Write an expression for each album.",
        expression: quotient(
          difference(variable("q"), constant(5)),
          constant(3)
        )
      }
    ]
  },
{
    page: 7,
    title: "Forming Expressions: Medium",
    label: "Forming expressions medium practice",
    instruction: "Write an expression for each situation. You do not need to work out a value.",
    problems: [
      {
        prompt:
          "A pizza costs £p. Ben orders 2 pizzas and pays a £3 delivery charge. Write an expression for the total cost.",
        expression: sum(product(constant(2), variable("p")), constant(3))
      },
      {
        prompt:
          "A hire company charges £20 plus £8 for every day of hire. Write an expression for the cost of d days.",
        expression: sum(product(constant(8), variable("d")), constant(20))
      },
      {
        prompt:
          "Five jars each hold b beads. Three beads are removed from each jar. Write an expression for the beads left.",
        expression: product(
          constant(5),
          difference(variable("b"), constant(3))
        )
      },
      {
        prompt:
          "Sofia has n nuts. She finds 9 more, then shares them equally between 6 bags. Write an expression for each bag.",
        expression: quotient(
          sum(variable("n"), constant(9)),
          constant(6)
        )
      },
      {
        prompt:
          "A pen costs £u. Omar buys 5 pens and a £4 pencil case. Write an expression for the total cost.",
        expression: sum(product(constant(5), variable("u")), constant(4))
      },
      {
        prompt:
          "Ten crates each hold y yoghurts, then 6 yoghurts are sold. Write an expression for how many remain.",
        expression: difference(
          product(constant(10), variable("y")),
          constant(6)
        )
      }
    ]
  },
{
    page: 8,
    title: "Forming Expressions: Medium",
    label: "Forming expressions medium practice",
    instruction: "Read each sentence carefully, then form the matching expression.",
    problems: [
      {
        prompt:
          "Four friends each buy a sandwich costing £v and a drink costing £2. Write an expression for their total cost.",
        expression: product(
          constant(4),
          sum(variable("v"), constant(2))
        )
      },
      {
        prompt:
          "A printer makes z pages every minute for 9 minutes. Fifteen pages jam. Write an expression for the pages printed.",
        expression: difference(
          product(constant(9), variable("z")),
          constant(15)
        )
      },
      {
        prompt:
          "A hoodie costs £h. Mia buys 2 hoodies and uses a £7 voucher. Write an expression for the amount she pays.",
        expression: difference(
          product(constant(2), variable("h")),
          constant(7)
        )
      },
      {
        prompt:
          "Seven packs each have l lollies and gain 2 bonus lollies. Write an expression for the total number of lollies.",
        expression: product(
          constant(7),
          sum(variable("l"), constant(2))
        )
      },
      {
        prompt:
          "A lesson costs £k. Jade books 4 lessons and pays a £5 registration fee. Write an expression for the total.",
        expression: sum(product(constant(4), variable("k")), constant(5))
      },
      {
        prompt:
          "Ethan has w points. He loses 8, then shares the rest equally between 2 teams. Write an expression for each team.",
        expression: quotient(
          difference(variable("w"), constant(8)),
          constant(2)
        )
      }
    ]
  },
{
    page: 9,
    title: "Forming Expressions: Medium",
    label: "Forming expressions medium practice",
    instruction: "Some situations need two operations. Use brackets where they are needed.",
    problems: [
      {
        prompt:
          "A skateboard costs £s. Dev buys 2 skateboards and pays a £9 postage fee. Write an expression for the total.",
        expression: sum(product(constant(2), variable("s")), constant(9))
      },
      {
        prompt:
          "A parking meter charges £3 plus £2 for every hour parked. Write an expression for the cost of t hours.",
        expression: sum(product(constant(2), variable("t")), constant(3))
      },
      {
        prompt:
          "Four baskets each hold m mangoes. Two mangoes are removed from each basket. Write an expression for the mangoes left.",
        expression: product(
          constant(4),
          difference(variable("m"), constant(2))
        )
      },
      {
        prompt:
          "Hana has i ice cubes. She makes 10 more, then shares them equally between 5 drinks. Write an expression for each drink.",
        expression: quotient(
          sum(variable("i"), constant(10)),
          constant(5)
        )
      },
      {
        prompt:
          "A mug costs £u. Cara buys 6 mugs and a £3 gift box. Write an expression for the total cost.",
        expression: sum(product(constant(6), variable("u")), constant(3))
      },
      {
        prompt:
          "Eight drawers each hold f folders, then 5 folders are taken out. Write an expression for how many remain.",
        expression: difference(
          product(constant(8), variable("f")),
          constant(5)
        )
      }
    ]
  },
{
    page: 10,
    title: "Forming Expressions: Medium",
    label: "Forming expressions medium practice",
    instruction: "Show the order of the operations clearly in each expression.",
    problems: [
      {
        prompt:
          "Six pupils each buy a badge costing £b and a pencil costing £1. Write an expression for their total cost.",
        expression: product(
          constant(6),
          sum(variable("b"), constant(1))
        )
      },
      {
        prompt:
          "A bakery bakes r rolls every hour for 4 hours. Eighteen rolls are sold early. Write an expression for the rolls left.",
        expression: difference(
          product(constant(4), variable("r")),
          constant(18)
        )
      },
      {
        prompt:
          "A lamp costs £l. Noah buys 3 lamps and uses a £6 voucher. Write an expression for the amount he pays.",
        expression: difference(
          product(constant(3), variable("l")),
          constant(6)
        )
      },
      {
        prompt:
          "Five tents each sleep p people and gain 2 extra campers. Write an expression for the total number of people.",
        expression: product(
          constant(5),
          sum(variable("p"), constant(2))
        )
      },
      {
        prompt:
          "A subscription costs £c per month. Ava pays for 12 months and a £8 setup fee. Write an expression for the total.",
        expression: sum(product(constant(12), variable("c")), constant(8))
      },
      {
        prompt:
          "Jamal has o oranges. He eats 4, then shares the rest equally between 5 plates. Write an expression for each plate.",
        expression: quotient(
          difference(variable("o"), constant(4)),
          constant(5)
        )
      }
    ]
  },
{
    page: 11,
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
    page: 12,
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
