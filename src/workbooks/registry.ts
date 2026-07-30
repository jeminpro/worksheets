import type { WorkbookMeta } from "./types";
import { withBase } from "../lib/base";
import { sheets as multiplicationSheets } from "./multiplication/data";
import { sheets as divisionSheets } from "./division/data";

export const workbooks = [
  {
    id: "multiplication",
    title: "Long Multiplication",
    description: "Two-digit and three-digit long multiplication with working space.",
    href: withBase("workbooks/multiplication/"),
    pageCount: multiplicationSheets.length,
    status: "ready",
    icon: "×"
  },
  {
    id: "division",
    title: "Long Division",
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
