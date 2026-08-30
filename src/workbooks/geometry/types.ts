export type GeometryDifficulty = "easy" | "medium" | "hard";

export type GeometryTopic =
  | "triangles"
  | "quadrilaterals"
  | "polygons-circles"
  | "angles"
  | "position"
  | "transformations"
  | "solids-3d";

export type GeometryFormat = "values" | "compare" | "expression" | "text";

export type GeometryDiagram =
  | {
      kind: "triangle";
      variant: "equilateral" | "isosceles" | "scalene" | "right" | "obtuse";
      sideA?: string;
      sideB?: string;
      sideC?: string;
      angleA?: string;
      angleB?: string;
      angleC?: string;
      heightLabel?: string;
      marks?: readonly ("a" | "b" | "c")[];
      rightMark?: boolean;
      exterior?: string;
    }
  | {
      kind: "quad";
      variant: "square" | "rectangle" | "rhombus" | "parallelogram" | "trapezium" | "kite";
      top?: string;
      right?: string;
      bottom?: string;
      left?: string;
      angleA?: string;
      angleB?: string;
      angleC?: string;
      angleD?: string;
    }
  | {
      kind: "polygon";
      sides: 5 | 6 | 8 | 10;
      sideLabel?: string;
      angleLabel?: string;
    }
  | {
      kind: "circle";
      radius?: string;
      diameter?: string;
      centre?: string;
      showRadius?: boolean;
      showDiameter?: boolean;
    }
  | {
      kind: "named-angle";
      opening: number;
      label?: string;
    }
  | {
      kind: "straight-line";
      left: string;
      right: string;
      split?: number;
    }
  | {
      kind: "around-point";
      sectors: readonly { label: string; deg?: number }[];
    }
  | {
      kind: "vertically-opposite";
      a: string;
      opposite?: string;
      adjacent?: string;
    }
  | {
      kind: "parallel-lines";
      given: string;
      unknown: string;
      relation: "corresponding" | "alternate" | "co-interior";
    }
  | {
      kind: "grid";
      xMin?: number;
      xMax?: number;
      yMin?: number;
      yMax?: number;
      points?: readonly { x: number; y: number; label: string }[];
      shapes?: readonly {
        points: readonly (readonly [number, number])[];
        dashed?: boolean;
        label?: string;
      }[];
      centre?: { x: number; y: number };
      mirror?: "x" | "y";
      arrow?: { from: readonly [number, number]; to: readonly [number, number] };
    }
  | {
      kind: "compass";
      highlight?: string;
    }
  | {
      kind: "solid";
      variant:
        | "cube"
        | "cuboid"
        | "cylinder"
        | "cone"
        | "sphere"
        | "square-pyramid"
        | "triangular-prism"
        | "tetrahedron";
      edgeLabel?: string;
    }
  | {
      kind: "net";
      variant: "cube" | "cube-invalid" | "cuboid" | "triangular-prism" | "square-pyramid";
    };

export interface GeometryProblem {
  difficulty: GeometryDifficulty;
  prompt?: string;
  given?: string | readonly string[];
  format?: GeometryFormat;
  diagram?: GeometryDiagram;
  answer: string;
}

export interface GeometrySheet {
  page: number;
  title: string;
  label: string;
  topic: GeometryTopic;
  instruction: string;
  questionOffset?: number;
  problems: readonly GeometryProblem[];
}
