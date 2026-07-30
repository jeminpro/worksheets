import type { WorkbookMeta } from "./types";
import { withBase } from "../lib/base";
import { sheets as additionSheets } from "./addition/data";
import { sheets as subtractionSheets } from "./subtraction/data";
import { sheets as multiplicationSheets } from "./multiplication/data";
import { sheets as divisionSheets } from "./division/data";
import { sheets as bidmasSheets } from "./bidmas/data";
import { sheets as positiveNegativeSheets } from "./positive-negative/data";
import { sheets as algebraSubstitutionSheets } from "./algebra-substitution/data";
import { sheets as algebraSolvingEquationsSheets } from "./algebra-solving-equations/data";
import { sheets as formingExpressionsSheets } from "./forming-expressions/data";

export const workbooks = [
  {
    id: "addition",
    title: "Addition",
    description: "Three- and four-digit long addition with carry space.",
    href: withBase("topic/addition/"),
    pageCount: additionSheets.length,
    status: "ready",
    icon: "+"
  },
  {
    id: "subtraction",
    title: "Subtraction",
    description: "Three-, four- and five-digit column subtraction with borrowing.",
    href: withBase("topic/subtraction/"),
    pageCount: subtractionSheets.length,
    status: "ready",
    icon: "−"
  },
  {
    id: "positive-negative",
    title: "Adding + & −",
    description: "Six progressive sheets of three-term integer addition and subtraction.",
    href: withBase("topic/positive-negative/"),
    pageCount: positiveNegativeSheets.length,
    status: "ready",
    icon: "±"
  },
  {
    id: "multiplication",
    title: "Multiplication",
    description: "Two-digit and three-digit long multiplication with working space.",
    href: withBase("topic/multiplication/"),
    pageCount: multiplicationSheets.length,
    status: "ready",
    icon: "×"
  },
  {
    id: "division",
    title: "Division",
    description: "Single-digit into three-digit bus-stop division with working space.",
    href: withBase("topic/division/"),
    pageCount: divisionSheets.length,
    status: "ready",
    icon: "÷"
  },
  {
    id: "bidmas",
    title: "BIDMAS",
    description: "Progressive order-of-operations practice with brackets, indices, and roots.",
    href: withBase("topic/bidmas/"),
    pageCount: bidmasSheets.length,
    status: "ready",
    icon: "()"
  },
  {
    id: "algebra-substitution",
    title: "Algebra Substitution",
    description: "Substitute values into expressions — easy through expert across eight pages.",
    href: withBase("topic/algebra-substitution/"),
    pageCount: algebraSubstitutionSheets.length,
    status: "ready",
    icon: "x"
  },
  {
    id: "algebra-solving-equations",
    title: "Solving Equations",
    description: "Linear equations from one-step through brackets, powers and roots across ten pages.",
    href: withBase("topic/algebra-solving-equations/"),
    pageCount: algebraSolvingEquationsSheets.length,
    status: "ready",
    icon: "="
  },
  {
    id: "forming-expressions",
    title: "Forming Expressions",
    description: "Translate word problems into algebraic expressions, from one-step to multi-variable.",
    href: withBase("topic/forming-expressions/"),
    pageCount: formingExpressionsSheets.length,
    status: "ready",
    icon: "xy"
  }
] as const satisfies readonly WorkbookMeta[];

export function getWorkbook(id: string): WorkbookMeta | undefined {
  return workbooks.find((workbook) => workbook.id === id);
}
