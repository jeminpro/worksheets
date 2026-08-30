import type { WorkbookGroupMeta, WorkbookMeta } from "./types";
import { withBase } from "../lib/base";
import { sheets as additionSheets } from "./addition/data";
import { sheets as quickAdditionSheets } from "./quick-addition/data";
import { sheets as subtractionSheets } from "./subtraction/data";
import { sheets as quickSubtractionSheets } from "./quick-subtraction/data";
import { sheets as quickMultiplicationSheets } from "./quick-multiplication/data";
import { sheets as quickDivisionSheets } from "./quick-division/data";
import { sheets as mentalMathSheets } from "./mental-math/data";
import { sheets as multiplicationSheets } from "./multiplication/data";
import { sheets as divisionSheets } from "./division/data";
import { sheets as bidmasSheets } from "./bidmas/data";
import { sheets as positiveNegativeSheets } from "./positive-negative/data";
import { sheets as algebraSubstitutionSheets } from "./algebra-substitution/data";
import { sheets as algebraSolvingEquationsSheets } from "./algebra-solving-equations/data";
import { sheets as formingExpressionsSheets } from "./forming-expressions/data";
import { sheets as simplifyCalculationsSheets } from "./simplify-calculations/data";
import { sheets as basicsSheets } from "./basics/data";
import { sheets as operationsSheets } from "./operations/data";
import { sheets as fractionsSheets } from "./fractions/data";
import { sheets as decimalsSheets } from "./decimals/data";
import { sheets as measurementSheets } from "./measurement/data";
import { sheets as dataSheets } from "./data/data";
import { sheets as algebraSheets } from "./algebra/data";

export const workbookGroups = [
  {
    id: "written-methods",
    title: "Written methods",
    description: "Column addition, subtraction, multiplication and division."
  },
  {
    id: "quick-practice",
    title: "Quick practice",
    description: "Timed drills and mental strategies for speed and fluency."
  },
  {
    id: "number-skills",
    title: "Number skills",
    description: "Integers, order of operations, and simplifying calculations."
  },
  {
    id: "algebra",
    title: "Algebra",
    description: "Substitute, solve, and form expressions from word problems."
  },
  {
    id: "assessment",
    title: "Assessment",
    description: "11 plus mixed checks across the core number topics."
  }
] as const satisfies readonly WorkbookGroupMeta[];

export const workbooks = [
  {
    id: "addition",
    title: "Addition",
    description: "Three- and four-digit long addition with carry space.",
    href: withBase("topic/addition/"),
    pageCount: additionSheets.length,
    status: "ready",
    icon: "+",
    group: "written-methods"
  },
  {
    id: "quick-addition",
    title: "Quick Addition",
    description:
      "Single-digit timed drills — simple, medium and hard mixed on every page.",
    href: withBase("topic/quick-addition/"),
    pageCount: quickAdditionSheets.length,
    status: "ready",
    icon: "++",
    group: "quick-practice"
  },
  {
    id: "subtraction",
    title: "Subtraction",
    description: "Three-, four- and five-digit column subtraction with borrowing.",
    href: withBase("topic/subtraction/"),
    pageCount: subtractionSheets.length,
    status: "ready",
    icon: "−",
    group: "written-methods"
  },
  {
    id: "quick-subtraction",
    title: "Quick Subtraction",
    description:
      "Subtract 1–9 from 1–19 — simple, medium and hard mixed on every page.",
    href: withBase("topic/quick-subtraction/"),
    pageCount: quickSubtractionSheets.length,
    status: "ready",
    icon: "−−",
    group: "quick-practice"
  },
  {
    id: "quick-multiplication",
    title: "Quick Multiplication",
    description:
      "1–12 times tables — simple, medium and hard mixed on every page.",
    href: withBase("topic/quick-multiplication/"),
    pageCount: quickMultiplicationSheets.length,
    status: "ready",
    icon: "××",
    group: "quick-practice"
  },
  {
    id: "quick-division",
    title: "Quick Division",
    description:
      "1–12 times-table division — simple, medium and hard mixed on every page.",
    href: withBase("topic/quick-division/"),
    pageCount: quickDivisionSheets.length,
    status: "ready",
    icon: "÷÷",
    group: "quick-practice"
  },
  {
    id: "mental-math",
    title: "Mental Maths",
    description:
      "Partitioning, compensation, bridging and difference — then four mixed practice pages.",
    href: withBase("topic/mental-math/"),
    pageCount: mentalMathSheets.length,
    status: "ready",
    icon: "∑",
    group: "quick-practice"
  },
  {
    id: "positive-negative",
    title: "Adding + & −",
    description: "Six progressive sheets of three-term integer addition and subtraction.",
    href: withBase("topic/positive-negative/"),
    pageCount: positiveNegativeSheets.length,
    status: "ready",
    icon: "±",
    group: "number-skills"
  },
  {
    id: "multiplication",
    title: "Multiplication",
    description: "Two-digit and three-digit long multiplication with working space.",
    href: withBase("topic/multiplication/"),
    pageCount: multiplicationSheets.length,
    status: "ready",
    icon: "×",
    group: "written-methods"
  },
  {
    id: "division",
    title: "Division",
    description: "Single-digit into three-digit bus-stop division with working space.",
    href: withBase("topic/division/"),
    pageCount: divisionSheets.length,
    status: "ready",
    icon: "÷",
    group: "written-methods"
  },
  {
    id: "simplify-calculations",
    title: "Simplify Calculations",
    description: "Cancel common factors in product fractions, then evaluate — easy through hard.",
    href: withBase("topic/simplify-calculations/"),
    pageCount: simplifyCalculationsSheets.length,
    status: "ready",
    icon: "∕",
    group: "number-skills"
  },
  {
    id: "bidmas",
    title: "BIDMAS",
    description: "Progressive order-of-operations practice with brackets, indices, and roots.",
    href: withBase("topic/bidmas/"),
    pageCount: bidmasSheets.length,
    status: "ready",
    icon: "()",
    group: "number-skills"
  },
  {
    id: "algebra-substitution",
    title: "Algebra Substitution",
    description: "Substitute values into expressions — easy through expert across eight pages.",
    href: withBase("topic/algebra-substitution/"),
    pageCount: algebraSubstitutionSheets.length,
    status: "ready",
    icon: "x",
    group: "algebra"
  },
  {
    id: "algebra-solving-equations",
    title: "Solving Equations",
    description: "Linear equations from one-step through brackets, powers and roots across ten pages.",
    href: withBase("topic/algebra-solving-equations/"),
    pageCount: algebraSolvingEquationsSheets.length,
    status: "ready",
    icon: "=",
    group: "algebra"
  },
  {
    id: "forming-expressions",
    title: "Forming Expressions",
    description: "Translate word problems into algebraic expressions, from one-step to multi-variable, with extra medium practice.",
    href: withBase("topic/forming-expressions/"),
    pageCount: formingExpressionsSheets.length,
    status: "ready",
    icon: "xy",
    group: "algebra"
  },
  {
    id: "basics",
    title: "Basics",
    description:
      "Place value, ordering, Roman numerals, rounding, negatives and BIDMAS — easy, medium and hard.",
    href: withBase("topic/basics/"),
    pageCount: basicsSheets.length,
    status: "ready",
    icon: "11+",
    group: "assessment"
  },
  {
    id: "operations",
    title: "Operations",
    description:
      "Written & mental arithmetic, squares, cubes, multiples, factors, primes, estimating and word problems.",
    href: withBase("topic/operations/"),
    pageCount: operationsSheets.length,
    status: "ready",
    icon: "+−×",
    group: "assessment"
  },
  {
    id: "fractions",
    title: "Fractions",
    description:
      "Calculating fractions, addition & subtraction, equivalent fractions, mixed numbers and ordering.",
    href: withBase("topic/fractions/"),
    pageCount: fractionsSheets.length,
    status: "ready",
    icon: "½",
    group: "assessment"
  },
  {
    id: "decimals",
    title: "Decimals",
    description:
      "Decimal place value, arithmetic, multiplying, dividing, fraction conversions and ordering.",
    href: withBase("topic/decimals/"),
    pageCount: decimalsSheets.length,
    status: "ready",
    icon: ".0",
    group: "assessment"
  },
  {
    id: "measurement",
    title: "Measurement",
    description:
      "Length, perimeter, money, time, metric & imperial conversions, area and volume with diagrams.",
    href: withBase("topic/measurement/"),
    pageCount: measurementSheets.length,
    status: "ready",
    icon: "📏",
    group: "assessment"
  },
  {
    id: "data",
    title: "Data",
    description:
      "Pictograms, bar charts, line graphs, pie charts, tables, Venn diagrams, mean, median, mode and range.",
    href: withBase("topic/data/"),
    pageCount: dataSheets.length,
    status: "ready",
    icon: "📊",
    group: "assessment"
  },
  {
    id: "algebra",
    title: "Algebra",
    description:
      "Simple sequences, substitution, solving equations and forming expressions.",
    href: withBase("topic/algebra/"),
    pageCount: algebraSheets.length,
    status: "ready",
    icon: "𝑥",
    group: "assessment"
  }
] as const satisfies readonly WorkbookMeta[];

export const groupedWorkbooks = workbookGroups
  .map((group) => ({
    ...group,
    workbooks: workbooks.filter((workbook) => workbook.group === group.id)
  }))
  .filter((group) => group.workbooks.length > 0);

export function getWorkbook(id: string): WorkbookMeta | undefined {
  return workbooks.find((workbook) => workbook.id === id);
}
