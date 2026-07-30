const STORAGE_KEY = "worksheets-print-dates";

export type PrintDates = Record<string, string>;

export function getPrintDates(): PrintDates {
  if (typeof localStorage === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? (parsed as PrintDates)
      : {};
  } catch {
    return {};
  }
}

export function getPrintDate(workbookId: string): string | undefined {
  return getPrintDates()[workbookId];
}

export function setPrintDate(workbookId: string, date = new Date()): string {
  const iso = date.toISOString();
  const dates = getPrintDates();
  dates[workbookId] = iso;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dates));
  return iso;
}

export function clearPrintDate(workbookId: string): void {
  const dates = getPrintDates();
  if (!(workbookId in dates)) return;
  delete dates[workbookId];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dates));
}

export function formatPrintDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
