import type { MeasurementSheet } from "./types";

/**
 * 11+ Measurement assessment workbook: 7 core topics across 7 A4 pages.
 * Each page features 15 problems structured into three progressive difficulty bands:
 * - 5 Easy (positions 1–3 narrow, 4–5 wide)
 * - 5 Medium (positions 6–8 narrow, 9–10 wide)
 * - 5 Hard (positions 11–13 narrow, 14–15 wide)
 */
export const sheets = [
  {
    page: 1,
    title: "Measurement: Length & Perimeter",
    label: "Measurement length and perimeter",
    topic: "length-perimeter",
    instruction:
      "Calculate perimeters of regular, composite and compound shapes, and solve boundary word problems.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Find the perimeter of the rectangle",
        diagram: { kind: "rectangle", widthLabel: "8 cm", heightLabel: "5 cm" },
        answer: "26 cm"
      },
      {
        difficulty: "easy",
        prompt: "Perimeter of an equilateral triangle with side length 7 cm",
        answer: "21 cm"
      },
      {
        difficulty: "easy",
        prompt: "Find the perimeter of a regular hexagon with side length 6 cm",
        answer: "36 cm"
      },
      {
        difficulty: "easy",
        prompt:
          "A square garden plot has sides of length 9 m. What is the total length of fencing needed to enclose it?",
        answer: "36 m"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Perimeter of square with side 12.5 cm",
        given: "4 × 12.5 cm",
        answer: "50 cm"
      },
      {
        difficulty: "medium",
        prompt: "Find the perimeter of the compound L-shape",
        diagram: {
          kind: "compound-l",
          top: "4 cm",
          left: "9 cm",
          bottom: "10 cm",
          right: "5 cm",
          cutH: "4 cm",
          cutW: "6 cm"
        },
        answer: "38 cm"
      },
      {
        difficulty: "medium",
        prompt:
          "A rectangle has a perimeter of 34 cm. If its length is 11 cm, what is its width?",
        answer: "6 cm"
      },
      {
        difficulty: "medium",
        prompt: "Find the perimeter of an isosceles triangle with sides 8 cm, 8 cm and 5 cm",
        diagram: {
          kind: "triangle",
          baseLabel: "5 cm",
          sideALabel: "8 cm",
          sideBLabel: "8 cm"
        },
        answer: "21 cm"
      },
      {
        difficulty: "medium",
        prompt:
          "A piece of wire 48 cm long is bent into a regular octagon. What is the length of each side?",
        answer: "6 cm"
      },
      {
        difficulty: "medium",
        prompt:
          "An athlete runs 4 complete laps around a rectangular field measuring 65 m by 35 m. What total distance does she run?",
        answer: "800 m"
      },
      {
        difficulty: "hard",
        prompt:
          "The perimeter of a rectangle is 56 cm. Its length is 3 times its width. Find the length.",
        answer: "21 cm"
      },
      {
        difficulty: "hard",
        prompt:
          "A square and an equilateral triangle have the same perimeter. If the square has side 9 cm, what is the side of the triangle?",
        answer: "12 cm"
      },
      {
        difficulty: "hard",
        prompt:
          "Find the missing side x if the perimeter of the shape is 42 cm: sides are 7 cm, 9 cm, 12 cm, 6 cm and x.",
        answer: "8 cm"
      },
      {
        difficulty: "hard",
        prompt:
          "A rectangular photo measuring 15 cm by 10 cm is mounted with a 2 cm border all around. What is the outer perimeter of the frame?",
        answer: "66 cm"
      },
      {
        difficulty: "hard",
        prompt:
          "Ribbon is tied around a rectangular parcel measuring 20 cm by 15 cm by 10 cm with 25 cm extra for the bow. What is the total ribbon length?",
        answer: "135 cm"
      }
    ]
  },
  {
    page: 2,
    title: "Measurement: Money",
    label: "Measurement money",
    topic: "money",
    instruction:
      "Solve practical money calculations, unit pricing, discounts, change, and multi-step word problems.",
    problems: [
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Total cost",
        given: "£4.65 + £3.80",
        answer: "£8.45"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Change from £10.00",
        given: "£10.00 − £6.35",
        answer: "£3.65"
      },
      {
        difficulty: "easy",
        prompt: "A pack of 5 pens costs £3.50. How much does 1 pen cost?",
        answer: "70p"
      },
      {
        difficulty: "easy",
        prompt:
          "Liam saves £2.50 each week. How many weeks will it take him to save £30.00?",
        answer: "12 weeks"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Cost of 8 cards at 45p each",
        given: "8 × £0.45",
        answer: "£3.60"
      },
      {
        difficulty: "medium",
        prompt:
          "Maya buys 3 magazines at £2.80 each and a book for £6.50. How much change does she get from a £20 note?",
        answer: "£5.10"
      },
      {
        difficulty: "medium",
        prompt:
          "A jacket originally priced at £60 is on sale with a 15% discount. What is the sale price?",
        answer: "£51.00"
      },
      {
        difficulty: "medium",
        prompt:
          "Pack A has 4 muffins for £3.00. Pack B has 6 muffins for £4.20. Which pack is better value per muffin?",
        answer: "Pack B (70p vs 75p)"
      },
      {
        difficulty: "medium",
        prompt:
          "Four friends share a dinner bill of £68 equally and leave a £6 tip in total. How much does each person pay?",
        answer: "£18.50"
      },
      {
        difficulty: "medium",
        prompt:
          "A cinema family ticket costs £38. Individual tickets cost £12 for adults and £8.50 for children. How much does a family with 2 adults and 2 children save by buying the family ticket?",
        answer: "£3.00"
      },
      {
        difficulty: "hard",
        prompt:
          "2 coffees and 3 muffins cost £11.40. 4 coffees and 3 muffins cost £16.80. Find the cost of 1 coffee.",
        answer: "£2.70"
      },
      {
        difficulty: "hard",
        prompt:
          "A shopkeeper buys 24 mugs for £48 in total and sells them for £3.25 each. What is his total profit?",
        answer: "£30.00"
      },
      {
        difficulty: "hard",
        prompt:
          "The exchange rate is £1 = €1.15. How many euros would you receive for £140?",
        answer: "€161"
      },
      {
        difficulty: "hard",
        prompt:
          "A taxi charges £3.50 standing fare plus £1.80 per mile. If a passenger pays £17.90, how many miles was the journey?",
        answer: "8 miles"
      },
      {
        difficulty: "hard",
        prompt:
          "A museum charges £14 for an adult and £8 for a child. A group of 20 people pays £202 in total. How many adults are in the group?",
        answer: "7 adults"
      }
    ]
  },
  {
    page: 3,
    title: "Measurement: Time",
    label: "Measurement time",
    topic: "time",
    instruction:
      "Read analog and digital clocks, convert 12/24-hour time, calculate durations, and read timetables.",
    problems: [
      {
        difficulty: "easy",
        prompt: "What time is shown on the clock face?",
        diagram: { kind: "clock", hours: 3, minutes: 20 },
        answer: "03:20"
      },
      {
        difficulty: "easy",
        prompt: "Convert 2 hours 45 minutes into minutes",
        answer: "165 minutes"
      },
      {
        difficulty: "easy",
        prompt: "Convert 19:35 to 12-hour clock time (with am or pm)",
        answer: "7:35 pm"
      },
      {
        difficulty: "easy",
        prompt:
          "A film starts at 14:15 and finishes at 16:05. How long is the film in hours and minutes?",
        answer: "1 hour 50 minutes"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Days in 7 weeks",
        given: "7 × 7",
        answer: "49 days"
      },
      {
        difficulty: "medium",
        prompt: "What time is shown on the clock face?",
        diagram: { kind: "clock", hours: 8, minutes: 45 },
        answer: "08:45"
      },
      {
        difficulty: "medium",
        prompt:
          "A train leaves Leeds at 10:48 and arrives in London at 13:12. How long did the journey take?",
        answer: "2 hours 24 minutes"
      },
      {
        difficulty: "medium",
        prompt:
          "A cake needs 55 minutes to bake. It is taken out of the oven at 17:10. At what time was it put into the oven?",
        answer: "16:15 (4:15 pm)"
      },
      {
        difficulty: "medium",
        prompt:
          "How many seconds are there in 2.5 minutes?",
        answer: "150 seconds"
      },
      {
        difficulty: "medium",
        prompt:
          "A clock loses 4 minutes every 24 hours. If it is set correctly at 09:00 on Monday, what time will it show at 09:00 on Friday?",
        answer: "08:44"
      },
      {
        difficulty: "hard",
        prompt:
          "What is the acute angle between the hour hand and minute hand of a clock at 3:30?",
        answer: "75°"
      },
      {
        difficulty: "hard",
        prompt:
          "A bus takes 38 minutes to reach the station. The train departs at 08:15. What is the latest time to catch the bus allowing 10 mins at the station?",
        answer: "07:27"
      },
      {
        difficulty: "hard",
        prompt:
          "London is 5 hours ahead of New York. A flight leaves London at 11:30 local time and takes 7 hours 45 mins. What is the New York arrival time?",
        answer: "14:15 (2:15 pm)"
      },
      {
        difficulty: "hard",
        prompt:
          "A runner completes 5 laps of a track at an average of 1 min 24 secs per lap. Find the total running time in minutes and seconds.",
        answer: "7 minutes 0 seconds"
      },
      {
        difficulty: "hard",
        prompt:
          "A car travels 105 miles at an average speed of 60 mph. How long did the trip take in hours and minutes?",
        answer: "1 hour 45 minutes"
      }
    ]
  },
  {
    page: 4,
    title: "Measurement: Metric Units",
    label: "Measurement metric units",
    topic: "metric-units",
    instruction:
      "Convert between metric units of length, mass and capacity, and solve multi-step problems.",
    problems: [
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Convert cm to m",
        given: "450 cm",
        answer: "4.5 m"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Convert kg to g",
        given: "3.2 kg",
        answer: "3,200 g"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Convert litres to ml",
        given: "1.75 l",
        answer: "1,750 ml"
      },
      {
        difficulty: "easy",
        prompt:
          "A bottle contains 750 ml of water. How much more water is needed to make 1 full litre?",
        answer: "250 ml"
      },
      {
        difficulty: "easy",
        format: "compare",
        given: ["2,400 m", "2.5 km"],
        answer: "<"
      },
      {
        difficulty: "medium",
        format: "expression",
        prompt: "Subtract metric mass",
        given: "4.5 kg − 850 g",
        answer: "3.65 kg (3,650 g)"
      },
      {
        difficulty: "medium",
        prompt:
          "How many 250 ml glasses can be completely filled from a 3.5-litre jug of juice?",
        answer: "14 glasses"
      },
      {
        difficulty: "medium",
        prompt:
          "A plank of wood is 2.4 m long. Three pieces of length 65 cm each are cut off. What length of wood remains in cm?",
        answer: "45 cm"
      },
      {
        difficulty: "medium",
        format: "compare",
        given: ["0.65 kg", "680 g"],
        answer: "<"
      },
      {
        difficulty: "medium",
        prompt:
          "A recipe for 4 people uses 300 g of rice. How many kilograms of rice are needed for 18 people?",
        answer: "1.35 kg"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Convert area units: m² to cm²",
        given: "1.5 m²",
        answer: "15,000 cm²"
      },
      {
        difficulty: "hard",
        format: "expression",
        prompt: "Convert volume: m³ to litres",
        given: "0.045 m³",
        answer: "45 litres"
      },
      {
        difficulty: "hard",
        prompt:
          "A box containing 40 identical books weighs 14.8 kg. The empty box weighs 800 g. What is the mass of one book in grams?",
        answer: "350 g"
      },
      {
        difficulty: "hard",
        prompt:
          "Water drips from a tap at a rate of 15 ml per minute. How many litres of water are wasted in 24 hours?",
        answer: "21.6 litres"
      },
      {
        difficulty: "hard",
        prompt:
          "A rectangular swimming pool holds 72,000 litres of water. What is the volume of water in cubic metres (m³)?",
        answer: "72 m³"
      }
    ]
  },
  {
    page: 5,
    title: "Measurement: Area",
    label: "Measurement area",
    topic: "area",
    instruction:
      "Calculate areas of rectangles, triangles, parallelograms, trapeziums and compound shapes.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Find the area of the rectangle",
        diagram: { kind: "rectangle", widthLabel: "7 cm", heightLabel: "4 cm" },
        answer: "28 cm²"
      },
      {
        difficulty: "easy",
        prompt: "Find the area of a square with side length 9 cm",
        answer: "81 cm²"
      },
      {
        difficulty: "easy",
        prompt: "Find the area of the triangle",
        diagram: { kind: "triangle", baseLabel: "8 cm", heightLabel: "5 cm" },
        answer: "20 cm²"
      },
      {
        difficulty: "easy",
        prompt:
          "A rectangular bedroom floor measures 4 m by 3.5 m. What is the area of carpet needed to cover the floor?",
        answer: "14 m²"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Area of triangle: (base × height) ÷ 2",
        given: "(6 cm × 7 cm) ÷ 2",
        answer: "21 cm²"
      },
      {
        difficulty: "medium",
        prompt: "Find the area of the parallelogram",
        diagram: { kind: "parallelogram", baseLabel: "9 cm", heightLabel: "6 cm" },
        answer: "54 cm²"
      },
      {
        difficulty: "medium",
        prompt: "Find the area of the compound L-shape",
        diagram: {
          kind: "compound-l",
          top: "4 cm",
          left: "8 cm",
          bottom: "10 cm",
          right: "5 cm",
          cutH: "3 cm",
          cutW: "6 cm"
        },
        answer: "62 cm²"
      },
      {
        difficulty: "medium",
        prompt:
          "A rectangle has an area of 72 cm² and a width of 6 cm. What is its perimeter?",
        answer: "36 cm"
      },
      {
        difficulty: "medium",
        prompt:
          "Square tiles of side 50 cm are used to cover a patio measuring 4 m by 3 m. How many tiles are needed in total?",
        answer: "48 tiles"
      },
      {
        difficulty: "medium",
        prompt:
          "A right-angled triangle has perpendicular sides of 12 cm and 9 cm. What is its area?",
        answer: "54 cm²"
      },
      {
        difficulty: "hard",
        prompt: "Find the area of the trapezium",
        diagram: { kind: "trapezium", topLabel: "6 cm", bottomLabel: "10 cm", heightLabel: "5 cm" },
        answer: "40 cm²"
      },
      {
        difficulty: "hard",
        prompt:
          "A square lawn of side 10 m has a 1 m wide gravel path around the outside. What is the area of the path?",
        answer: "44 m²"
      },
      {
        difficulty: "hard",
        prompt:
          "The perimeter of a rectangle is 36 cm. What is the maximum possible area the rectangle can have?",
        answer: "81 cm² (a square)"
      },
      {
        difficulty: "hard",
        prompt:
          "A rectangular card 14 cm by 10 cm has four 2 cm × 2 cm corner squares removed. What is the remaining area?",
        answer: "124 cm²"
      },
      {
        difficulty: "hard",
        prompt:
          "A triangle and a rectangle have the same area. The rectangle is 8 cm by 6 cm. If the triangle has base 16 cm, find its height.",
        answer: "6 cm"
      }
    ]
  },
  {
    page: 6,
    title: "Measurement: Volume",
    label: "Measurement volume",
    topic: "volume",
    instruction:
      "Calculate volumes and surface areas of cubes, cuboids, prisms, and liquid capacities.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Find the volume of the cuboid",
        diagram: { kind: "cuboid", lengthLabel: "5 cm", widthLabel: "3 cm", heightLabel: "4 cm" },
        answer: "60 cm³"
      },
      {
        difficulty: "easy",
        prompt: "Find the volume of the cube",
        diagram: { kind: "cube", edgeLabel: "4 cm" },
        answer: "64 cm³"
      },
      {
        difficulty: "easy",
        prompt: "A box measures 6 cm by 2 cm by 5 cm. What is its volume?",
        answer: "60 cm³"
      },
      {
        difficulty: "easy",
        prompt:
          "How many 1 cm³ unit cubes are needed to build a cuboid measuring 7 cm by 4 cm by 2 cm?",
        answer: "56 cubes"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Volume of a cube with edge 5 cm",
        given: "5³",
        answer: "125 cm³"
      },
      {
        difficulty: "medium",
        prompt:
          "A cuboid has a volume of 180 cm³. Its length is 9 cm and width is 4 cm. What is its height?",
        answer: "5 cm"
      },
      {
        difficulty: "medium",
        prompt:
          "A fish tank measures 40 cm long, 25 cm wide and 30 cm high. How many litres of water does it hold when full?",
        answer: "30 litres"
      },
      {
        difficulty: "medium",
        prompt:
          "Find the total surface area of a cube whose side length is 5 cm.",
        answer: "150 cm²"
      },
      {
        difficulty: "medium",
        prompt:
          "A solid metal cube of volume 216 cm³ is melted down. What is the length of one edge of the cube?",
        answer: "6 cm"
      },
      {
        difficulty: "medium",
        prompt:
          "A container measuring 15 cm by 10 cm by 8 cm is filled with water to a depth of 6 cm. What is the volume of water inside?",
        answer: "900 cm³"
      },
      {
        difficulty: "hard",
        prompt:
          "Find the total surface area of a cuboid measuring 8 cm by 5 cm by 3 cm.",
        diagram: { kind: "cuboid", lengthLabel: "8 cm", widthLabel: "5 cm", heightLabel: "3 cm" },
        answer: "158 cm²"
      },
      {
        difficulty: "hard",
        prompt:
          "How many small cubes of edge 2 cm can fit completely inside a box measuring 12 cm by 8 cm by 6 cm?",
        answer: "72 cubes"
      },
      {
        difficulty: "hard",
        prompt:
          "A swimming pool 25 m long and 10 m wide is filled with water at a rate of 5 m³ per minute. How long will it take to fill to a depth of 2 m?",
        answer: "100 minutes (1 hr 40 min)"
      },
      {
        difficulty: "hard",
        prompt:
          "A rectangular tank with base 20 cm by 15 cm contains water. Dropping a rock raises the water level by 3.5 cm. Find the volume of the rock.",
        answer: "1,050 cm³"
      },
      {
        difficulty: "hard",
        prompt:
          "A solid cube has a total surface area of 294 cm². What is the volume of the cube?",
        answer: "343 cm³"
      }
    ]
  },
  {
    page: 7,
    title: "Measurement: Imperial Units",
    label: "Measurement imperial units",
    topic: "imperial-units",
    instruction:
      "Convert imperial units of length, weight and capacity, and apply metric-imperial conversions.",
    problems: [
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Convert feet to inches (1 ft = 12 in)",
        given: "4 feet",
        answer: "48 inches"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Convert yards to feet (1 yd = 3 ft)",
        given: "5 yards",
        answer: "15 feet"
      },
      {
        difficulty: "easy",
        format: "expression",
        prompt: "Convert gallons to pints (1 gal = 8 pt)",
        given: "3 gallons",
        answer: "24 pints"
      },
      {
        difficulty: "easy",
        prompt:
          "A plank of wood is 3 feet 6 inches long. What is its length in inches?",
        answer: "42 inches"
      },
      {
        difficulty: "easy",
        prompt:
          "How many ounces are there in 2 pounds? (1 lb = 16 oz)",
        answer: "32 ounces"
      },
      {
        difficulty: "medium",
        prompt:
          "Using 5 miles ≈ 8 km, how many kilometres are approximately equal to 25 miles?",
        answer: "40 km"
      },
      {
        difficulty: "medium",
        prompt:
          "Using 1 inch ≈ 2.5 cm, what is the length of a 14-inch laptop screen in centimetres?",
        answer: "35 cm"
      },
      {
        difficulty: "medium",
        prompt:
          "Using 1 kg ≈ 2.2 lbs, estimate the weight in pounds of a 15 kg parcel.",
        answer: "33 lbs"
      },
      {
        difficulty: "medium",
        prompt:
          "Using 1 gallon ≈ 4.5 litres, how many litres of petrol are there in 6 gallons?",
        answer: "27 litres"
      },
      {
        difficulty: "medium",
        prompt:
          "A recipe calls for 1 1/2 pints of milk. How many fluid ounces is this? (1 pint = 20 fl oz)",
        answer: "30 fl oz"
      },
      {
        difficulty: "hard",
        prompt:
          "A UK motorway speed limit is 70 mph. Using 5 miles ≈ 8 km, convert 70 mph into km/h.",
        answer: "112 km/h"
      },
      {
        difficulty: "hard",
        prompt:
          "An airline has a baggage allowance of 23 kg. A suitcase weighs 50 lbs. Using 1 kg ≈ 2.2 lbs, is the suitcase within the limit?",
        answer: "Yes (50 lbs ≈ 22.7 kg < 23 kg)"
      },
      {
        difficulty: "hard",
        prompt:
          "A runner finishes a 10 km race. Using 5 miles ≈ 8 km, what was the race distance in miles?",
        answer: "6 1/4 miles (6.25 miles)"
      },
      {
        difficulty: "hard",
        prompt:
          "A garden fence is 24 feet long. Timber is sold in metres at £8.50 per metre. Using 1 foot ≈ 30 cm, what is the cost of timber?",
        answer: "£61.20 (7.2 m)"
      },
      {
        difficulty: "hard",
        prompt:
          "A fuel tank holds 54 litres of diesel. Using 1 gallon ≈ 4.5 litres, how many gallons of fuel does the tank hold?",
        answer: "12 gallons"
      }
    ]
  }
] satisfies readonly MeasurementSheet[];
