import type { WorkbookMeta } from "./types";
import { withBase } from "../lib/base";
import { sheets as additionSheets } from "./addition/data";
import { sheets as subtractionSheets } from "./subtraction/data";
import { sheets as multiplicationSheets } from "./multiplication/data";
import { sheets as divisionSheets } from "./division/data";

export const workbooks = [
  {
    id: "addition",
    title: "Addition",
    description: "Three- and four-digit long addition with carry space.",
    href: withBase("workbooks/addition/"),
    pageCount: additionSheets.length,
    status: "ready",
    icon: "+"
  },
  {
    id: "subtraction",
    title: "Subtraction",
    description: "Three-, four- and five-digit column subtraction with borrowing.",
    href: withBase("workbooks/subtraction/"),
    pageCount: subtractionSheets.length,
    status: "ready",
    icon: "−"
  },
  {
    id: "multiplication",
    title: "Multiplication",
    description: "Two-digit and three-digit long multiplication with working space.",
    href: withBase("workbooks/multiplication/"),
    pageCount: multiplicationSheets.length,
    status: "ready",
    icon: "×"
  },
  {
    id: "division",
    title: "Division",
    description: "Single-digit into three-digit bus-stop division with working space.",
    href: withBase("workbooks/division/"),
    pageCount: divisionSheets.length,
    status: "ready",
    icon: "÷"
  }
] as const satisfies readonly WorkbookMeta[];

export function getWorkbook(id: string): WorkbookMeta | undefined {
  return workbooks.find((workbook) => workbook.id === id);
}
