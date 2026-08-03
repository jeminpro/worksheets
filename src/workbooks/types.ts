export type WorkbookStatus = "ready" | "template";

export type WorkbookGroupId =
  | "written-methods"
  | "quick-practice"
  | "number-skills"
  | "algebra";

export interface WorkbookGroupMeta {
  id: WorkbookGroupId;
  title: string;
  description: string;
}

export interface WorkbookMeta {
  id: string;
  title: string;
  description: string;
  href: string;
  pageCount: number;
  status: WorkbookStatus;
  icon: string;
  group: WorkbookGroupId;
}
