import type { BasicsProblem } from "./types";

export function getDisplay(problem: BasicsProblem): "prompt" | "expression" {
  return problem.display ?? "prompt";
}

export function formatAccessiblePrompt(problem: BasicsProblem): string {
  return problem.prompt
    .replaceAll("−", " minus ")
    .replaceAll("×", " times ")
    .replaceAll("÷", " divided by ")
    .replaceAll("²", " squared")
    .replaceAll("°C", " degrees Celsius")
    .replace(/\s+/g, " ")
    .trim();
}
