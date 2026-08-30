import type { GeometrySheet } from "./types";

/**
 * 11+ Geometry assessment workbook: 7 topics across 14 A4 pages.
 * Each topic has 15 problems (5 easy, 5 medium, 5 hard) split over two pages
 * so diagrams stay readable: easy + medium, then hard.
 */
export const sheets: readonly GeometrySheet[] = [
  {
    page: 1,
    title: "Geometry: Triangles",
    label: "Geometry triangles",
    topic: "triangles",
    instruction: "Name triangles and find missing angles. Tick marks show equal sides.",
    problems: [
      {
        difficulty: "easy",
        prompt: "What type of triangle is this?",
        diagram: {
          kind: "triangle",
          variant: "equilateral",
          marks: ["a", "b", "c"]
        },
        answer: "Equilateral"
      },
      {
        difficulty: "easy",
        prompt: "What type of triangle is this?",
        diagram: {
          kind: "triangle",
          variant: "right",
          rightMark: true
        },
        answer: "Right-angled"
      },
      {
        difficulty: "easy",
        prompt: "What is the sum of the interior angles of any triangle?",
        answer: "180°"
      },
      {
        difficulty: "easy",
        prompt: "Find the missing angle marked x.",
        diagram: {
          kind: "triangle",
          variant: "scalene",
          angleA: "70°",
          angleB: "50°",
          angleC: "x"
        },
        answer: "60°"
      },
      {
        difficulty: "easy",
        prompt: "A triangular road sign has all three sides equal to 8 cm. What type of triangle is it?",
        answer: "Equilateral"
      },
      {
        difficulty: "medium",
        prompt: "This isosceles triangle has a vertex angle of 80°. Find a base angle.",
        diagram: {
          kind: "triangle",
          variant: "isosceles",
          marks: ["a", "b"],
          angleC: "80°",
          angleA: "x"
        },
        answer: "50°"
      },
      {
        difficulty: "medium",
        prompt: "Find the missing angle.",
        diagram: {
          kind: "triangle",
          variant: "scalene",
          angleA: "42°",
          angleB: "67°",
          angleC: "x"
        },
        answer: "71°"
      },
      {
        difficulty: "medium",
        prompt: "The exterior angle is 110°. Find the adjacent interior angle x.",
        diagram: {
          kind: "triangle",
          variant: "scalene",
          angleB: "x",
          exterior: "110°"
        },
        answer: "70°"
      },
      {
        difficulty: "medium",
        prompt:
          "A roof gable is an isosceles triangle. The two base angles are 38° each. Find the vertex angle.",
        answer: "104°"
      },
      {
        difficulty: "medium",
        prompt: "A right-angled isosceles triangle has one angle of 90°. Find the other two angles.",
        diagram: {
          kind: "triangle",
          variant: "right",
          rightMark: true,
          marks: ["a", "c"]
        },
        answer: "45° and 45°"
      }
    ]
  },
  {
    page: 2,
    title: "Geometry: Triangles",
    label: "Geometry triangles continued",
    topic: "triangles",
    instruction: "Harder missing-angle problems. Show your working.",
    questionOffset: 10,
    problems: [
      {
        difficulty: "hard",
        prompt: "The angles of a triangle are x, 2x and 3x. Find x.",
        diagram: {
          kind: "triangle",
          variant: "scalene",
          angleA: "x",
          angleB: "2x",
          angleC: "3x"
        },
        answer: "30°"
      },
      {
        difficulty: "hard",
        prompt: "An isosceles triangle has vertex 3x and base angles x + 20°. Find x.",
        diagram: {
          kind: "triangle",
          variant: "isosceles",
          marks: ["a", "b"],
          angleC: "3x",
          angleA: "x + 20°"
        },
        answer: "28°"
      },
      {
        difficulty: "hard",
        prompt:
          "A triangular sail has angles 90°, 35° and x. What type of triangle is it, and what is x?",
        answer: "Right-angled, 55°"
      },
      {
        difficulty: "hard",
        prompt: "The exterior angle is 130°. One remote interior angle is 55°. Find y.",
        diagram: {
          kind: "triangle",
          variant: "scalene",
          angleA: "55°",
          angleC: "y",
          exterior: "130°"
        },
        answer: "75°"
      },
      {
        difficulty: "hard",
        prompt:
          "Two angles of a triangle are 47° and 68°. An exterior angle is drawn at the third vertex. Find that exterior angle.",
        answer: "115°"
      }
    ]
  },
  {
    page: 3,
    title: "Geometry: Quadrilaterals",
    label: "Geometry quadrilaterals",
    topic: "quadrilaterals",
    instruction: "Name quadrilaterals and use angle facts (interior angles sum to 360°).",
    problems: [
      {
        difficulty: "easy",
        prompt: "Name this quadrilateral.",
        diagram: { kind: "quad", variant: "square" },
        answer: "Square"
      },
      {
        difficulty: "easy",
        prompt: "Name this quadrilateral.",
        diagram: { kind: "quad", variant: "rectangle" },
        answer: "Rectangle"
      },
      {
        difficulty: "easy",
        prompt: "What is the sum of the interior angles of any quadrilateral?",
        answer: "360°"
      },
      {
        difficulty: "easy",
        prompt: "Name this quadrilateral.",
        diagram: { kind: "quad", variant: "parallelogram" },
        answer: "Parallelogram"
      },
      {
        difficulty: "easy",
        prompt:
          "A picture frame has four right angles, two long sides and two short sides. Name the quadrilateral.",
        answer: "Rectangle"
      },
      {
        difficulty: "medium",
        prompt: "Find the missing angle x.",
        diagram: {
          kind: "quad",
          variant: "rectangle",
          angleA: "90°",
          angleB: "90°",
          angleC: "90°",
          angleD: "x"
        },
        answer: "90°"
      },
      {
        difficulty: "medium",
        prompt: "Name this quadrilateral.",
        diagram: { kind: "quad", variant: "kite" },
        answer: "Kite"
      },
      {
        difficulty: "medium",
        prompt: "One angle of this parallelogram is 70°. Find the adjacent angle x.",
        diagram: {
          kind: "quad",
          variant: "parallelogram",
          angleA: "70°",
          angleB: "x"
        },
        answer: "110°"
      },
      {
        difficulty: "medium",
        prompt: "A playground is a rhombus. One angle is 64°. Find the opposite angle.",
        answer: "64°"
      },
      {
        difficulty: "medium",
        prompt: "In this trapezium the marked angles sit between the parallel sides. Find x.",
        diagram: {
          kind: "quad",
          variant: "trapezium",
          angleA: "115°",
          angleD: "x"
        },
        answer: "65°"
      }
    ]
  },
  {
    page: 4,
    title: "Geometry: Quadrilaterals",
    label: "Geometry quadrilaterals continued",
    topic: "quadrilaterals",
    instruction: "Harder quadrilateral angle problems. Show your working.",
    questionOffset: 10,
    problems: [
      {
        difficulty: "hard",
        prompt: "Find the missing angle x.",
        diagram: {
          kind: "quad",
          variant: "kite",
          angleA: "78°",
          angleB: "102°",
          angleC: "95°",
          angleD: "x"
        },
        answer: "85°"
      },
      {
        difficulty: "hard",
        prompt: "One angle of this rhombus is 118°. Find the smallest angle.",
        diagram: {
          kind: "quad",
          variant: "rhombus",
          angleA: "118°"
        },
        answer: "62°"
      },
      {
        difficulty: "hard",
        prompt:
          "A kite has angles 80° and 40° between its pairs of equal sides. Find one of the remaining angles.",
        diagram: {
          kind: "quad",
          variant: "kite",
          angleC: "80°",
          angleA: "40°",
          angleB: "x"
        },
        answer: "120°"
      },
      {
        difficulty: "hard",
        prompt:
          "In trapezium ABCD, AB is parallel to DC. Angle A is 2x and angle D is x + 30°. Find angle A.",
        diagram: {
          kind: "quad",
          variant: "trapezium",
          angleD: "2x",
          angleA: "x + 30°"
        },
        answer: "100°"
      },
      {
        difficulty: "hard",
        prompt:
          "Adjacent angles of a parallelogram are 3x − 10° and x + 50°. Find x.",
        answer: "35°"
      }
    ]
  },
  {
    page: 5,
    title: "Geometry: Polygons & Circles",
    label: "Geometry polygons and circles",
    topic: "polygons-circles",
    instruction: "Name polygons and use radius, diameter and angle facts for regular shapes.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Name this regular polygon.",
        diagram: { kind: "polygon", sides: 5 },
        answer: "Pentagon"
      },
      {
        difficulty: "easy",
        prompt: "How many sides does a hexagon have?",
        diagram: { kind: "polygon", sides: 6 },
        answer: "6"
      },
      {
        difficulty: "easy",
        prompt: "The radius of this circle is 7 cm. Find the diameter.",
        diagram: {
          kind: "circle",
          centre: "O",
          radius: "7 cm",
          showRadius: true
        },
        answer: "14 cm"
      },
      {
        difficulty: "easy",
        prompt: "How many sides does this polygon have?",
        diagram: { kind: "polygon", sides: 8 },
        answer: "8"
      },
      {
        difficulty: "easy",
        prompt: "A circular pond has diameter 10 m. What is the radius?",
        answer: "5 m"
      },
      {
        difficulty: "medium",
        prompt: "Find an exterior angle of a regular pentagon.",
        diagram: { kind: "polygon", sides: 5, angleLabel: "ext" },
        answer: "72°"
      },
      {
        difficulty: "medium",
        prompt: "Find an interior angle of a regular hexagon.",
        diagram: { kind: "polygon", sides: 6, angleLabel: "x" },
        answer: "120°"
      },
      {
        difficulty: "medium",
        prompt: "The diameter is 8 cm. Using π = 3.14, find the circumference.",
        diagram: {
          kind: "circle",
          diameter: "8 cm",
          showDiameter: true
        },
        answer: "25.12 cm"
      },
      {
        difficulty: "medium",
        prompt: "A circle has radius 5 cm. Using π = 3, find the circumference.",
        answer: "30 cm"
      },
      {
        difficulty: "medium",
        prompt: "A wheel has radius 21 cm. Using π = 22/7, find the circumference.",
        answer: "132 cm"
      }
    ]
  },
  {
    page: 6,
    title: "Geometry: Polygons & Circles",
    label: "Geometry polygons and circles continued",
    topic: "polygons-circles",
    instruction: "Interior angles, sides of regular polygons, and area of a circle.",
    questionOffset: 10,
    problems: [
      {
        difficulty: "hard",
        prompt: "Find an interior angle of a regular octagon.",
        diagram: { kind: "polygon", sides: 8, angleLabel: "x" },
        answer: "135°"
      },
      {
        difficulty: "hard",
        prompt: "Find the sum of the interior angles of a hexagon.",
        diagram: { kind: "polygon", sides: 6 },
        answer: "720°"
      },
      {
        difficulty: "hard",
        prompt: "A regular polygon has exterior angle 40°. How many sides does it have?",
        answer: "9"
      },
      {
        difficulty: "hard",
        prompt: "A circle has radius 7 cm. Using π = 22/7, find the area.",
        diagram: {
          kind: "circle",
          radius: "7 cm",
          showRadius: true,
          centre: "O"
        },
        answer: "154 cm²"
      },
      {
        difficulty: "hard",
        prompt: "A circular pizza has diameter 20 cm. Using π = 3.14, find its area.",
        answer: "314 cm²"
      }
    ]
  },
  {
    page: 7,
    title: "Geometry: Angles",
    label: "Geometry angles",
    topic: "angles",
    instruction: "Name angles and use facts about straight lines, points and parallel lines.",
    problems: [
      {
        difficulty: "easy",
        prompt: "What type of angle is this?",
        diagram: { kind: "named-angle", opening: 42, label: "?" },
        answer: "Acute"
      },
      {
        difficulty: "easy",
        prompt: "What type of angle is this?",
        diagram: { kind: "named-angle", opening: 128, label: "?" },
        answer: "Obtuse"
      },
      {
        difficulty: "easy",
        prompt: "Find the missing angle x.",
        diagram: { kind: "straight-line", left: "142°", right: "x", split: 38 },
        answer: "38°"
      },
      {
        difficulty: "easy",
        prompt: "How many degrees are in a right angle?",
        diagram: { kind: "named-angle", opening: 90, label: "?" },
        answer: "90°"
      },
      {
        difficulty: "easy",
        prompt: "Two angles on a straight line. One is 65°. Find the other.",
        answer: "115°"
      },
      {
        difficulty: "medium",
        prompt: "The lines cross. Find the vertically opposite angle x.",
        diagram: { kind: "vertically-opposite", a: "123°", opposite: "x" },
        answer: "123°"
      },
      {
        difficulty: "medium",
        prompt: "Find the missing angle around the point.",
        diagram: {
          kind: "around-point",
          sectors: [
            { label: "90°", deg: 90 },
            { label: "140°", deg: 140 },
            { label: "x" }
          ]
        },
        answer: "130°"
      },
      {
        difficulty: "medium",
        prompt: "Find the complement of 37°.",
        given: "37°",
        answer: "53°"
      },
      {
        difficulty: "medium",
        prompt: "The lines marked with arrows are parallel. Find corresponding angle x.",
        diagram: {
          kind: "parallel-lines",
          given: "68°",
          unknown: "x",
          relation: "corresponding"
        },
        answer: "68°"
      },
      {
        difficulty: "medium",
        prompt: "A clock shows 3 o’clock. What angle is between the hour and minute hands?",
        answer: "90°"
      }
    ]
  },
  {
    page: 8,
    title: "Geometry: Angles",
    label: "Geometry angles continued",
    topic: "angles",
    instruction: "Harder angle facts, including parallel lines. Show your working.",
    questionOffset: 10,
    problems: [
      {
        difficulty: "hard",
        prompt: "The four angles around a point are x, 2x, 70° and 80°. Find the largest angle.",
        diagram: {
          kind: "around-point",
          sectors: [
            { label: "x" },
            { label: "2x" },
            { label: "70°", deg: 70 },
            { label: "80°", deg: 80 }
          ]
        },
        answer: "140°"
      },
      {
        difficulty: "hard",
        prompt: "The lines marked with arrows are parallel. Find co-interior angle x.",
        diagram: {
          kind: "parallel-lines",
          given: "73°",
          unknown: "x",
          relation: "co-interior"
        },
        answer: "107°"
      },
      {
        difficulty: "hard",
        prompt: "The lines marked with arrows are parallel. Find alternate interior angle x.",
        diagram: {
          kind: "parallel-lines",
          given: "55°",
          unknown: "x",
          relation: "alternate"
        },
        answer: "55°"
      },
      {
        difficulty: "hard",
        prompt: "Vertically opposite angles are 2x + 10° and 70°. Find x.",
        diagram: {
          kind: "vertically-opposite",
          a: "2x + 10°",
          opposite: "70°"
        },
        answer: "30°"
      },
      {
        difficulty: "hard",
        prompt: "An angle is 18° more than its complement. Find the angle.",
        answer: "54°"
      }
    ]
  },
  {
    page: 9,
    title: "Geometry: Position",
    label: "Geometry position",
    topic: "position",
    instruction: "Read coordinates, use the compass, and describe position on a grid.",
    problems: [
      {
        difficulty: "easy",
        prompt: "What are the coordinates of point A?",
        diagram: {
          kind: "grid",
          points: [{ x: 2, y: 3, label: "A" }]
        },
        answer: "(2, 3)"
      },
      {
        difficulty: "easy",
        prompt: "What are the coordinates of point B?",
        diagram: {
          kind: "grid",
          points: [{ x: 5, y: 1, label: "B" }]
        },
        answer: "(5, 1)"
      },
      {
        difficulty: "easy",
        prompt: "You face North and turn 90° clockwise. Which direction are you facing?",
        diagram: { kind: "compass", highlight: "N" },
        answer: "East"
      },
      {
        difficulty: "easy",
        prompt: "Which point is at (1, 4)?",
        diagram: {
          kind: "grid",
          points: [
            { x: 4, y: 2, label: "A" },
            { x: 3, y: 5, label: "B" },
            { x: 1, y: 4, label: "C" }
          ]
        },
        answer: "C"
      },
      {
        difficulty: "easy",
        prompt: "The park is at (1, 2). The library is 3 squares East of the park. Where is the library?",
        answer: "(4, 2)"
      },
      {
        difficulty: "medium",
        prompt: "In which quadrant is the point (−3, −1)?",
        given: "(−3, −1)",
        answer: "3rd quadrant"
      },
      {
        difficulty: "medium",
        prompt: "Find the midpoint of A and B.",
        given: ["(2, 4)", "(6, 8)"],
        answer: "(4, 6)"
      },
      {
        difficulty: "medium",
        prompt: "From A, in which compass direction is B?",
        diagram: {
          kind: "grid",
          xMax: 5,
          yMax: 5,
          points: [
            { x: 1, y: 1, label: "A" },
            { x: 4, y: 4, label: "B" }
          ]
        },
        answer: "North-East"
      },
      {
        difficulty: "medium",
        prompt: "What are the coordinates of point P?",
        diagram: {
          kind: "grid",
          xMin: -4,
          xMax: 4,
          yMin: -4,
          yMax: 4,
          points: [{ x: -2, y: 3, label: "P" }]
        },
        answer: "(−2, 3)"
      },
      {
        difficulty: "medium",
        prompt:
          "A ship starts at (0, 0) and sails 5 km North then 3 km East. If 1 km = 1 unit, what is its position?",
        answer: "(3, 5)"
      }
    ]
  },
  {
    page: 10,
    title: "Geometry: Position",
    label: "Geometry position continued",
    topic: "position",
    instruction: "Four quadrants, midpoints and following directions. Show your working.",
    questionOffset: 10,
    problems: [
      {
        difficulty: "hard",
        prompt: "Find the midpoint of P and Q.",
        given: ["(1, 5)", "(7, −1)"],
        answer: "(4, 2)"
      },
      {
        difficulty: "hard",
        prompt: "Point A is (4, 5). Point B is 3 left and 2 down from A. Find the coordinates of B.",
        diagram: {
          kind: "grid",
          xMax: 6,
          yMax: 6,
          points: [{ x: 4, y: 5, label: "A" }]
        },
        answer: "(1, 3)"
      },
      {
        difficulty: "hard",
        prompt: "In which quadrant is the point (5, −4)?",
        given: "(5, −4)",
        answer: "4th quadrant"
      },
      {
        difficulty: "hard",
        prompt: "How many units is the vertical distance from A to B?",
        diagram: {
          kind: "grid",
          xMax: 5,
          yMax: 8,
          points: [
            { x: 2, y: 3, label: "A" },
            { x: 2, y: 8, label: "B" }
          ]
        },
        answer: "5"
      },
      {
        difficulty: "hard",
        prompt:
          "A robot starts at (0, 0). It moves 4 right, 3 up, 2 left and 5 down. What is its final position?",
        answer: "(2, −2)"
      }
    ]
  },
  {
    page: 11,
    title: "Geometry: Transformations",
    label: "Geometry transformations",
    topic: "transformations",
    instruction: "Translate, reflect, rotate and enlarge points and shapes.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Translate (2, 1) by 3 right and 2 up. What is the image?",
        given: "(2, 1)",
        answer: "(5, 3)"
      },
      {
        difficulty: "easy",
        prompt: "Reflect (3, 4) in the x-axis. What is the image?",
        given: "(3, 4)",
        answer: "(3, −4)"
      },
      {
        difficulty: "easy",
        prompt: "Rotate (2, 1) by 180° about the origin. What is the image?",
        given: "(2, 1)",
        answer: "(−2, −1)"
      },
      {
        difficulty: "easy",
        prompt: "Name the transformation that maps shape A onto shape B.",
        diagram: {
          kind: "grid",
          xMax: 7,
          yMax: 5,
          shapes: [
            { points: [[1, 1], [3, 1], [3, 2], [1, 2]], label: "A" },
            {
              points: [[4, 3], [6, 3], [6, 4], [4, 4]],
              dashed: true,
              label: "B"
            }
          ],
          arrow: { from: [3, 2], to: [4, 3] }
        },
        answer: "Translation"
      },
      {
        difficulty: "easy",
        prompt: "A flag corner at (1, 2) is translated 4 squares right. Where is it now?",
        answer: "(5, 2)"
      },
      {
        difficulty: "medium",
        prompt: "Translate (3, 5) by the vector (4, −2). What is the image?",
        given: ["(3, 5)", "(4, −2)"],
        answer: "(7, 3)"
      },
      {
        difficulty: "medium",
        prompt: "Reflect (4, −1) in the y-axis. What is the image?",
        given: "(4, −1)",
        answer: "(−4, −1)"
      },
      {
        difficulty: "medium",
        prompt: "Rotate (2, 3) by 90° clockwise about the origin. What is the image?",
        given: "(2, 3)",
        answer: "(3, −2)"
      },
      {
        difficulty: "medium",
        prompt: "Enlarge (3, 2) by scale factor 2, centre the origin. What is the image?",
        given: "(3, 2)",
        answer: "(6, 4)"
      },
      {
        difficulty: "medium",
        prompt:
          "A shape is reflected in a river along the line y = 0. Where does the point (5, 3) map to?",
        answer: "(5, −3)"
      }
    ]
  },
  {
    page: 12,
    title: "Geometry: Transformations",
    label: "Geometry transformations continued",
    topic: "transformations",
    instruction: "Describe transformations fully. Show your working.",
    questionOffset: 10,
    problems: [
      {
        difficulty: "hard",
        prompt: "Enlarge (2, −1) by scale factor 3, centre the origin. What is the image?",
        given: "(2, −1)",
        answer: "(6, −3)"
      },
      {
        difficulty: "hard",
        prompt: "Rotate (1, 4) by 90° anticlockwise about the origin. What is the image?",
        given: "(1, 4)",
        answer: "(−4, 1)"
      },
      {
        difficulty: "hard",
        prompt: "Describe fully the transformation that maps A onto B.",
        diagram: {
          kind: "grid",
          xMax: 8,
          yMax: 5,
          shapes: [
            { points: [[1, 1], [2, 1], [2, 3]], label: "A" },
            {
              points: [[5, 2], [6, 2], [6, 4]],
              dashed: true,
              label: "B"
            }
          ],
          arrow: { from: [2, 2], to: [5, 3] }
        },
        answer: "Translation (4, 1)"
      },
      {
        difficulty: "hard",
        prompt: "Enlarge (6, 4) by scale factor 1/2, centre the origin. What is the image?",
        given: "(6, 4)",
        answer: "(3, 2)"
      },
      {
        difficulty: "hard",
        prompt:
          "Point P (2, 1) is rotated 180° about (0, 0), then translated by (3, 2). Find the final position.",
        answer: "(1, 1)"
      }
    ]
  },
  {
    page: 13,
    title: "Geometry: 3D Shapes",
    label: "Geometry 3D shapes",
    topic: "solids-3d",
    instruction: "Name solids and count faces, edges and vertices. Identify nets.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Name this solid.",
        diagram: { kind: "solid", variant: "cube" },
        answer: "Cube"
      },
      {
        difficulty: "easy",
        prompt: "How many faces does a cube have?",
        diagram: { kind: "solid", variant: "cube" },
        answer: "6"
      },
      {
        difficulty: "easy",
        prompt: "Name this solid.",
        diagram: { kind: "solid", variant: "cylinder" },
        answer: "Cylinder"
      },
      {
        difficulty: "easy",
        prompt: "How many vertices does a cuboid have?",
        diagram: { kind: "solid", variant: "cuboid" },
        answer: "8"
      },
      {
        difficulty: "easy",
        prompt: "A football is a sphere. How many edges does a sphere have?",
        diagram: { kind: "solid", variant: "sphere" },
        answer: "0"
      },
      {
        difficulty: "medium",
        prompt: "How many edges does a triangular prism have?",
        diagram: { kind: "solid", variant: "triangular-prism" },
        answer: "9"
      },
      {
        difficulty: "medium",
        prompt: "How many vertices does a square-based pyramid have?",
        diagram: { kind: "solid", variant: "square-pyramid" },
        answer: "5"
      },
      {
        difficulty: "medium",
        prompt: "A dice is a cube. How many edges does it have?",
        answer: "12"
      },
      {
        difficulty: "medium",
        prompt: "This net folds to make which solid?",
        diagram: { kind: "net", variant: "cube" },
        answer: "Cube"
      },
      {
        difficulty: "medium",
        prompt: "How many faces does a cylinder have?",
        diagram: { kind: "solid", variant: "cylinder" },
        answer: "3"
      }
    ]
  },
  {
    page: 14,
    title: "Geometry: 3D Shapes",
    label: "Geometry 3D shapes continued",
    topic: "solids-3d",
    instruction: "Nets, Euler’s formula and counting faces, edges and vertices.",
    questionOffset: 10,
    problems: [
      {
        difficulty: "hard",
        prompt: "How many faces does a triangular-based pyramid (tetrahedron) have?",
        diagram: { kind: "solid", variant: "tetrahedron" },
        answer: "4"
      },
      {
        difficulty: "hard",
        prompt: "A polyhedron has 8 faces and 12 vertices. Using F + V = E + 2, find the number of edges.",
        answer: "18"
      },
      {
        difficulty: "hard",
        prompt: "For a triangular prism, write the number of faces, edges and vertices.",
        diagram: { kind: "solid", variant: "triangular-prism" },
        answer: "5 faces, 9 edges, 6 vertices"
      },
      {
        difficulty: "hard",
        prompt: "Can this net fold to make a cube? Write Yes or No.",
        diagram: { kind: "net", variant: "cube-invalid" },
        answer: "No"
      },
      {
        difficulty: "hard",
        prompt: "A cuboid has 6 faces and 8 vertices. Use Euler’s formula to find the number of edges.",
        answer: "12"
      }
    ]
  }
];
