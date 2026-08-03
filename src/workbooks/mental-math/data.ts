import type { MentalMathSheet } from "./types";

/**
 * Mental calculation strategies.
 * Pages 1–4 teach one method each; pages 5–8 mix all four.
 */
export const sheets = [
  {
    page: 1,
    title: "Mental Maths: Partitioning",
    label: "Mental maths partitioning",
    method: "partitioning",
    instruction:
      "Split numbers into tens and ones, then add or subtract the parts. Example: 47 + 36 → (40 + 30) + (7 + 6).",
    problems: [
      [47, 36, "+"],
      [58, 27, "+"],
      [63, 25, "+"],
      [74, 18, "+"],
      [35, 46, "+"],
      [29, 54, "+"],
      [85, 42, "-"],
      [96, 53, "-"],
      [78, 35, "-"],
      [67, 24, "-"],
      [89, 36, "-"],
      [54, 21, "-"]
    ]
  },
  {
    page: 2,
    title: "Mental Maths: Compensation",
    label: "Mental maths compensation",
    method: "compensation",
    instruction:
      "Round one number to a friendly value, then adjust. Example: 48 + 37 → 50 + 37 − 2.",
    problems: [
      [49, 36, "+"],
      [48, 37, "+"],
      [52, 39, "+"],
      [61, 28, "+"],
      [75, 19, "+"],
      [34, 48, "+"],
      [67, 29, "-"],
      [84, 39, "-"],
      [73, 28, "-"],
      [92, 49, "-"],
      [56, 19, "-"],
      [81, 38, "-"]
    ]
  },
  {
    page: 3,
    title: "Mental Maths: Bridging",
    label: "Mental maths bridging",
    method: "bridging",
    instruction:
      "Bridge through a ten or hundred. Example: 46 + 28 → 46 + 4 + 24.",
    problems: [
      [47, 8, "+"],
      [36, 28, "+"],
      [55, 17, "+"],
      [68, 25, "+"],
      [79, 14, "+"],
      [46, 37, "+"],
      [72, 8, "-"],
      [64, 27, "-"],
      [81, 36, "-"],
      [53, 18, "-"],
      [95, 47, "-"],
      [70, 23, "-"]
    ]
  },
  {
    page: 4,
    title: "Mental Maths: Difference",
    label: "Mental maths difference",
    method: "difference",
    instruction:
      "Count up from the smaller number to the larger. Example: 83 − 47 → 47 to 50 (+3), 50 to 80 (+30), 80 to 83 (+3).",
    problems: [
      [83, 47, "-"],
      [75, 38, "-"],
      [62, 29, "-"],
      [91, 46, "-"],
      [100, 67, "-"],
      [84, 57, "-"],
      [73, 48, "-"],
      [90, 36, "-"],
      [65, 28, "-"],
      [82, 55, "-"],
      [71, 39, "-"],
      [100, 43, "-"]
    ]
  },
  {
    page: 5,
    title: "Mental Maths: Mixed",
    label: "Mental maths mixed",
    method: "mixed",
    instruction:
      "Choose the best mental method — partitioning, compensation, bridging or difference.",
    problems: [
      [56, 38, "+"],
      [49, 27, "+"],
      [88, 45, "-"],
      [73, 19, "-"],
      [64, 29, "+"],
      [100, 58, "-"],
      [47, 35, "+"],
      [82, 36, "-"],
      [58, 17, "+"],
      [91, 48, "-"],
      [35, 48, "+"],
      [76, 39, "-"]
    ]
  },
  {
    page: 6,
    title: "Mental Maths: Mixed",
    label: "Mental maths mixed",
    method: "mixed",
    instruction:
      "Choose the best mental method — partitioning, compensation, bridging or difference.",
    problems: [
      [68, 24, "+"],
      [85, 39, "-"],
      [52, 48, "+"],
      [100, 36, "-"],
      [39, 46, "+"],
      [74, 28, "-"],
      [57, 26, "+"],
      [93, 47, "-"],
      [45, 38, "+"],
      [81, 19, "-"],
      [66, 27, "+"],
      [90, 54, "-"]
    ]
  },
  {
    page: 7,
    title: "Mental Maths: Mixed",
    label: "Mental maths mixed",
    method: "mixed",
    instruction:
      "Choose the best mental method — partitioning, compensation, bridging or difference.",
    problems: [
      [43, 29, "+"],
      [87, 42, "-"],
      [59, 36, "+"],
      [100, 72, "-"],
      [28, 57, "+"],
      [65, 19, "-"],
      [74, 18, "+"],
      [92, 58, "-"],
      [46, 27, "+"],
      [83, 46, "-"],
      [55, 39, "+"],
      [70, 34, "-"]
    ]
  },
  {
    page: 8,
    title: "Mental Maths: Mixed",
    label: "Mental maths mixed",
    method: "mixed",
    instruction:
      "Choose the best mental method — partitioning, compensation, bridging or difference.",
    problems: [
      [37, 48, "+"],
      [96, 49, "-"],
      [61, 27, "+"],
      [100, 45, "-"],
      [54, 38, "+"],
      [78, 29, "-"],
      [42, 36, "+"],
      [85, 57, "-"],
      [69, 25, "+"],
      [91, 38, "-"],
      [48, 35, "+"],
      [80, 46, "-"]
    ]
  }
] satisfies readonly MentalMathSheet[];
