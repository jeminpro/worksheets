export type WorkbookStatus = "ready" | "template";

export interface WorkbookMeta {
  id: string;
  title: string;
  description: string;
  href: string;
  pageCount: number;
  status: WorkbookStatus;
  icon: string;
}
