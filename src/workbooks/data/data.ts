import type { DataSheet } from "./types";

/**
 * 11+ Data Handling assessment workbook: 8 core topics across 8 A4 pages.
 * Each page features 15 problems structured into three progressive difficulty bands:
 * - 5 Easy (positions 1–3 narrow, 4–5 wide)
 * - 5 Medium (positions 6–8 narrow, 9–10 wide)
 * - 5 Hard (positions 11–13 narrow, 14–15 wide)
 */
export const sheets: readonly DataSheet[] = [
  {
    page: 1,
    title: "Data: Pictograms",
    label: "Data pictograms",
    topic: "pictograms",
    instruction:
      "Interpret and solve problems using pictograms with integer and fractional symbol keys.",
    problems: [
      {
        difficulty: "easy",
        prompt: "How many apples were sold on Monday?",
        diagram: {
          kind: "pictogram",
          keyText: "Key: ◯ = 4 apples",
          rows: [{ label: "Mon", count: 3 }]
        },
        answer: "12 apples"
      },
      {
        difficulty: "easy",
        prompt: "How many books were read on Tuesday?",
        diagram: {
          kind: "pictogram",
          keyText: "Key: ◯ = 2 books",
          rows: [{ label: "Tue", count: 4 }]
        },
        answer: "8 books"
      },
      {
        difficulty: "easy",
        prompt: "How many cars passed on Wednesday?",
        diagram: {
          kind: "pictogram",
          keyText: "Key: ◯ = 6 cars",
          rows: [{ label: "Wed", count: 2, half: true }]
        },
        answer: "15 cars"
      },
      {
        difficulty: "easy",
        prompt:
          "If 1 circle symbol represents 8 students, how many symbols are needed to represent 40 students?",
        answer: "5 symbols"
      },
      {
        difficulty: "easy",
        prompt:
          "In a pictogram where ◯ = 10 pets, how many pets are represented by 3 and a half circle symbols?",
        answer: "35 pets"
      },
      {
        difficulty: "medium",
        prompt: "How many more visitors arrived on Saturday than Friday?",
        diagram: {
          kind: "pictogram",
          keyText: "Key: ◯ = 8 visitors",
          rows: [
            { label: "Fri", count: 2 },
            { label: "Sat", count: 4 }
          ]
        },
        answer: "16 visitors"
      },
      {
        difficulty: "medium",
        prompt: "Total goals scored across all 3 matches",
        diagram: {
          kind: "pictogram",
          keyText: "Key: ◯ = 2 goals",
          rows: [
            { label: "M1", count: 2 },
            { label: "M2", count: 3 },
            { label: "M3", count: 1, half: true }
          ]
        },
        answer: "13 goals"
      },
      {
        difficulty: "medium",
        prompt: "How many tickets were sold on Thursday?",
        diagram: {
          kind: "pictogram",
          keyText: "Key: ◯ = 12 tickets",
          rows: [{ label: "Thu", count: 2, half: true }]
        },
        answer: "30 tickets"
      },
      {
        difficulty: "medium",
        prompt:
          "A survey recorded 72 birds. On a pictogram, this is shown by 9 identical circle symbols. How many birds does 1 symbol represent?",
        answer: "8 birds"
      },
      {
        difficulty: "medium",
        prompt:
          "On a pictogram with key ◯ = 6 trees, Class A planted 4.5 symbols and Class B planted 3 symbols. How many more trees did Class A plant?",
        answer: "9 trees"
      },
      {
        difficulty: "hard",
        prompt: "What fraction of total points was scored by Team B?",
        diagram: {
          kind: "pictogram",
          keyText: "Key: ◯ = 10 pts",
          rows: [
            { label: "A", count: 3 },
            { label: "B", count: 2 }
          ]
        },
        answer: "2/5"
      },
      {
        difficulty: "hard",
        prompt: "If 45 cakes were sold on Friday, what is the value of 1 symbol?",
        diagram: {
          kind: "pictogram",
          keyText: "Friday Cake Sales",
          rows: [{ label: "Fri", count: 4, half: true }]
        },
        answer: "10 cakes"
      },
      {
        difficulty: "hard",
        prompt:
          "A pictogram shows 84 stamps using 7 symbols. How many symbols are needed to represent 132 stamps?",
        answer: "11 symbols"
      },
      {
        difficulty: "hard",
        prompt:
          "A pictogram uses ◯ = 8 items. Group A has 5.5 symbols and Group B has 4 symbols. If each item costs £1.50, what is the total value of Group A?",
        answer: "£66.00"
      },
      {
        difficulty: "hard",
        prompt:
          "In a school survey, 120 children chose their favourite sport. Football is shown by 5 symbols, Tennis by 3 symbols, and Swimming by 2 symbols. How many children does 1 symbol represent?",
        answer: "12 children"
      }
    ]
  },
  {
    page: 2,
    title: "Data: Bar Charts",
    label: "Data bar charts",
    topic: "bar-charts",
    instruction:
      "Read scales accurately, compare frequencies, and solve multi-step problems from bar charts.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Which activity had the highest attendance?",
        diagram: {
          kind: "bar-chart",
          yMax: 20,
          yStep: 5,
          bars: [
            { label: "Swim", value: 14 },
            { label: "Run", value: 18 },
            { label: "Cycle", value: 10 }
          ]
        },
        answer: "Run"
      },
      {
        difficulty: "easy",
        prompt: "How many students chose Red as their favourite colour?",
        diagram: {
          kind: "bar-chart",
          yMax: 20,
          yStep: 5,
          bars: [
            { label: "Red", value: 12 },
            { label: "Blue", value: 16 },
            { label: "Green", value: 8 }
          ]
        },
        answer: "12 students"
      },
      {
        difficulty: "easy",
        prompt: "What is the difference in temperature between City A and City B?",
        diagram: {
          kind: "bar-chart",
          yMax: 20,
          yStep: 5,
          bars: [
            { label: "A", value: 15 },
            { label: "B", value: 9 }
          ]
        },
        answer: "6°C"
      },
      {
        difficulty: "easy",
        prompt:
          "A bar chart shows 25 children like dogs, 15 like cats, and 10 like rabbits. How many children were surveyed in total?",
        answer: "50 children"
      },
      {
        difficulty: "easy",
        prompt:
          "On a bar chart with a scale going up in 4s, the bar reaches halfway between 24 and 28. What value is represented?",
        answer: "26"
      },
      {
        difficulty: "medium",
        prompt: "How many more cars were sold in March than in January?",
        diagram: {
          kind: "bar-chart",
          yMax: 20,
          yStep: 5,
          bars: [
            { label: "Jan", value: 8 },
            { label: "Feb", value: 14 },
            { label: "Mar", value: 18 }
          ]
        },
        answer: "10 cars"
      },
      {
        difficulty: "medium",
        prompt: "What is the total sales across all 3 departments?",
        diagram: {
          kind: "bar-chart",
          yMax: 20,
          yStep: 5,
          bars: [
            { label: "D1", value: 12 },
            { label: "D2", value: 15 },
            { label: "D3", value: 9 }
          ]
        },
        answer: "36 items"
      },
      {
        difficulty: "medium",
        prompt: "Which day had twice as many visitors as Monday?",
        diagram: {
          kind: "bar-chart",
          yMax: 15,
          yStep: 3,
          bars: [
            { label: "Mon", value: 6 },
            { label: "Tue", value: 9 },
            { label: "Wed", value: 12 }
          ]
        },
        answer: "Wednesday"
      },
      {
        difficulty: "medium",
        prompt:
          "In a survey of 80 students shown on a bar chart, 28 walk, 32 take the bus, and the rest cycle. How many students cycle?",
        answer: "20 students"
      },
      {
        difficulty: "medium",
        prompt:
          "A bar chart shows 24 boys and 36 girls in a youth club. What fraction of the total club members are boys in simplest form?",
        answer: "2/5"
      },
      {
        difficulty: "hard",
        prompt: "What percentage of the total weekly score (40 pts) was on Friday?",
        diagram: {
          kind: "bar-chart",
          yMax: 20,
          yStep: 5,
          bars: [
            { label: "Mon", value: 10 },
            { label: "Wed", value: 14 },
            { label: "Fri", value: 16 }
          ]
        },
        answer: "40%"
      },
      {
        difficulty: "hard",
        prompt: "If total revenue was £240, find the price per unit sold",
        diagram: {
          kind: "bar-chart",
          yMax: 15,
          yStep: 3,
          bars: [
            { label: "A", value: 8 },
            { label: "B", value: 12 },
            { label: "C", value: 10 }
          ]
        },
        answer: "£8.00"
      },
      {
        difficulty: "hard",
        prompt:
          "On a bar chart, a bar height of 3.6 cm represents 54 items. What number of items is represented by a bar 5.2 cm high?",
        answer: "78 items"
      },
      {
        difficulty: "hard",
        prompt:
          "The mean number of books read by 4 classes is 25. Three classes read 22, 28, and 19 books. How many books did the fourth class read?",
        answer: "31 books"
      },
      {
        difficulty: "hard",
        prompt:
          "A bar chart shows monthly laptop sales: 45 in Jan, 60 in Feb, 75 in Mar, and 90 in Apr. What is the percentage increase from Jan to Apr?",
        answer: "100%"
      }
    ]
  },
  {
    page: 3,
    title: "Data: Line Graphs",
    label: "Data line graphs",
    topic: "line-graphs",
    instruction:
      "Read continuous data, plot trends, estimate intermediate values, and calculate rates of change.",
    problems: [
      {
        difficulty: "easy",
        prompt: "What was the temperature at 2 pm?",
        diagram: {
          kind: "line-graph",
          yMax: 24,
          yStep: 6,
          points: [
            { x: "10am", y: 12 },
            { x: "12pm", y: 16 },
            { x: "2pm", y: 20 },
            { x: "4pm", y: 14 }
          ]
        },
        answer: "20°C"
      },
      {
        difficulty: "easy",
        prompt: "At what time was the highest temperature recorded?",
        diagram: {
          kind: "line-graph",
          yMax: 20,
          yStep: 5,
          points: [
            { x: "9am", y: 10 },
            { x: "12pm", y: 18 },
            { x: "3pm", y: 15 }
          ]
        },
        answer: "12 pm"
      },
      {
        difficulty: "easy",
        prompt: "What was the water height in the tank at 3 minutes?",
        diagram: {
          kind: "line-graph",
          yMax: 20,
          yStep: 5,
          points: [
            { x: "1m", y: 4 },
            { x: "2m", y: 8 },
            { x: "3m", y: 12 },
            { x: "4m", y: 16 }
          ]
        },
        answer: "12 cm"
      },
      {
        difficulty: "easy",
        prompt:
          "A line graph tracks a plant growing 2 cm each week. If it was 6 cm tall in Week 1, how tall will it be in Week 5?",
        answer: "14 cm"
      },
      {
        difficulty: "easy",
        prompt:
          "A distance-time graph shows a cyclist travelling at a steady speed of 12 km/h. How far does she cycle in 2.5 hours?",
        answer: "30 km"
      },
      {
        difficulty: "medium",
        prompt: "Between which two times did the temperature rise the fastest?",
        diagram: {
          kind: "line-graph",
          yMax: 20,
          yStep: 5,
          points: [
            { x: "8am", y: 8 },
            { x: "10am", y: 14 },
            { x: "12pm", y: 16 },
            { x: "2pm", y: 18 }
          ]
        },
        answer: "8 am to 10 am"
      },
      {
        difficulty: "medium",
        prompt: "How much did the temperature drop between 1 pm and 5 pm?",
        diagram: {
          kind: "line-graph",
          yMax: 25,
          yStep: 5,
          points: [
            { x: "1pm", y: 22 },
            { x: "3pm", y: 18 },
            { x: "5pm", y: 12 }
          ]
        },
        answer: "10°C"
      },
      {
        difficulty: "medium",
        prompt: "Estimate the speed at 1:30 pm if 1pm is 30 mph and 2pm is 50 mph",
        diagram: {
          kind: "line-graph",
          yMax: 60,
          yStep: 15,
          points: [
            { x: "12pm", y: 20 },
            { x: "1pm", y: 30 },
            { x: "2pm", y: 50 }
          ]
        },
        answer: "40 mph"
      },
      {
        difficulty: "medium",
        prompt:
          "A car travels 180 miles between 09:00 and 12:00 at constant speed. What was its average speed in miles per hour?",
        answer: "60 mph"
      },
      {
        difficulty: "medium",
        prompt:
          "A cooling curve shows liquid cooling from 80°C to 50°C in 15 minutes. What is the average rate of cooling in °C per minute?",
        answer: "2°C per min"
      },
      {
        difficulty: "hard",
        prompt: "How long was the vehicle stationary (horizontal line)?",
        diagram: {
          kind: "line-graph",
          yMax: 70,
          yStep: 20,
          points: [
            { x: "1pm", y: 10 },
            { x: "2pm", y: 30 },
            { x: "3pm", y: 30 },
            { x: "4pm", y: 60 }
          ]
        },
        answer: "1 hour"
      },
      {
        difficulty: "hard",
        prompt: "What is the average speed over the full 4-hour journey of 120 km?",
        diagram: {
          kind: "line-graph",
          yMax: 140,
          yStep: 35,
          points: [
            { x: "0h", y: 0 },
            { x: "2h", y: 50 },
            { x: "4h", y: 120 }
          ]
        },
        answer: "30 km/h"
      },
      {
        difficulty: "hard",
        prompt:
          "A conversion graph converts miles to km where 5 miles = 8 km. How many miles is 40 km?",
        answer: "25 miles"
      },
      {
        difficulty: "hard",
        prompt:
          "A line graph shows cumulative savings: £50 in Jan, £110 in Feb, £180 in Mar, £260 in Apr, and £350 in May. How much was saved between Feb and May?",
        answer: "£240"
      },
      {
        difficulty: "hard",
        prompt:
          "A water tank is filling steadily. At 2 minutes it holds 24 litres, and at 5 minutes it holds 60 litres. How many litres will it hold at 9 minutes?",
        answer: "108 litres"
      }
    ]
  },
  {
    page: 4,
    title: "Data: Pie Charts",
    label: "Data pie charts",
    topic: "pie-charts",
    instruction:
      "Calculate frequencies from sector angles and percentages, and find missing values in pie charts.",
    problems: [
      {
        difficulty: "easy",
        prompt: "If 60 children were asked, how many chose Football (50%)?",
        diagram: {
          kind: "pie-chart",
          slices: [
            { label: "Foot", percent: 50, display: "50%" },
            { label: "Other", percent: 50 }
          ]
        },
        answer: "30 children"
      },
      {
        difficulty: "easy",
        prompt: "What fraction of the pie chart is represented by Sector A (25%)?",
        diagram: {
          kind: "pie-chart",
          slices: [
            { label: "A", percent: 25, display: "25%" },
            { label: "Rest", percent: 75 }
          ]
        },
        answer: "1/4"
      },
      {
        difficulty: "easy",
        prompt: "In a survey of 40 pets, how many are Cats (25%)?",
        diagram: {
          kind: "pie-chart",
          slices: [
            { label: "Cats", percent: 25, display: "25%" },
            { label: "Dogs", percent: 50 },
            { label: "Fish", percent: 25 }
          ]
        },
        answer: "10 cats"
      },
      {
        difficulty: "easy",
        prompt: "What angle on a pie chart represents 1/4 of the whole circle?",
        answer: "90°"
      },
      {
        difficulty: "easy",
        prompt:
          "A pie chart represents 360 students. How many students are represented by an angle of 30°?",
        answer: "30 students"
      },
      {
        difficulty: "medium",
        prompt: "In a budget of £120, how much is spent on Food (30%)?",
        diagram: {
          kind: "pie-chart",
          slices: [
            { label: "Food", percent: 30, display: "30%" },
            { label: "Rent", percent: 50 },
            { label: "Other", percent: 20 }
          ]
        },
        answer: "£36.00"
      },
      {
        difficulty: "medium",
        prompt: "In a group of 80 people, how many chose Blue (40%)?",
        diagram: {
          kind: "pie-chart",
          slices: [
            { label: "Blue", percent: 40, display: "40%" },
            { label: "Red", percent: 35 },
            { label: "Green", percent: 25 }
          ]
        },
        answer: "32 people"
      },
      {
        difficulty: "medium",
        prompt: "What percentage represents Sector C if A is 45% and B is 35%?",
        diagram: {
          kind: "pie-chart",
          slices: [
            { label: "A", percent: 45 },
            { label: "B", percent: 35 },
            { label: "C", percent: 20, display: "?" }
          ]
        },
        answer: "20%"
      },
      {
        difficulty: "medium",
        prompt:
          "In a pie chart, an angle of 72° represents 16 cars. How many cars are represented by the entire pie chart (360°)?",
        answer: "80 cars"
      },
      {
        difficulty: "medium",
        prompt:
          "A pie chart shows 120 fruits: 40 apples, 50 bananas, and 30 oranges. What angle should be drawn for the oranges sector?",
        answer: "90°"
      },
      {
        difficulty: "hard",
        prompt: "If 18 people chose Swimming (15%), how many were surveyed?",
        diagram: {
          kind: "pie-chart",
          slices: [
            { label: "Swim", percent: 15, display: "15%" },
            { label: "Gym", percent: 45 },
            { label: "Run", percent: 40 }
          ]
        },
        answer: "120 people"
      },
      {
        difficulty: "hard",
        prompt: "How many more votes did Winner (55%) get than Runner-up (35%) out of 200 votes?",
        diagram: {
          kind: "pie-chart",
          slices: [
            { label: "Win", percent: 55, display: "55%" },
            { label: "Run", percent: 35 },
            { label: "Other", percent: 10 }
          ]
        },
        answer: "40 votes"
      },
      {
        difficulty: "hard",
        prompt:
          "On a pie chart, an angle of 108° represents 45 books. How many books does an angle of 60° represent?",
        answer: "25 books"
      },
      {
        difficulty: "hard",
        prompt:
          "A school has 480 pupils. In a pie chart, Bus is 135°, Walk is 150°, and Car is the remainder. How many pupils travel by car?",
        answer: "100 pupils"
      },
      {
        difficulty: "hard",
        prompt:
          "A family spends £2,400 monthly. Housing is 120°, Food is 90°, Savings is 60°, and Leisure is 90°. How much more is spent on Housing than Savings?",
        answer: "£400"
      }
    ]
  },
  {
    page: 5,
    title: "Data: Tables & Timetables",
    label: "Data tables and timetables",
    topic: "tables",
    instruction:
      "Extract information, calculate totals, find missing values, and interpret multi-row data tables.",
    problems: [
      {
        difficulty: "easy",
        prompt: "What is the total score for Year 5?",
        diagram: {
          kind: "table",
          headers: ["Year", "Girls", "Boys"],
          rows: [
            ["Y5", 14, 16],
            ["Y6", 18, 15]
          ]
        },
        answer: "30"
      },
      {
        difficulty: "easy",
        prompt: "Which bus arrives at the station first?",
        diagram: {
          kind: "table",
          headers: ["Bus", "Dep", "Arr"],
          rows: [
            ["Bus A", "08:15", "08:45"],
            ["Bus B", "08:20", "08:40"]
          ]
        },
        answer: "Bus B (08:40)"
      },
      {
        difficulty: "easy",
        prompt: "Find the total cost of 2 adult tickets",
        diagram: {
          kind: "table",
          headers: ["Ticket", "Price"],
          rows: [
            ["Adult", "£6.50"],
            ["Child", "£4.00"]
          ]
        },
        answer: "£13.00"
      },
      {
        difficulty: "easy",
        prompt:
          "A two-way table shows 18 boys and 14 girls in Class 5A, and 15 boys and 17 girls in Class 5B. What is the total number of students in both classes?",
        answer: "64 students"
      },
      {
        difficulty: "easy",
        prompt:
          "A timetable shows a train departing London at 10:25 and arriving in Oxford at 11:15. How long is the journey?",
        answer: "50 minutes"
      },
      {
        difficulty: "medium",
        prompt: "Find missing Tuesday sales x",
        diagram: {
          kind: "table",
          headers: ["Day", "Sales", "Target"],
          rows: [
            ["Mon", "£45", "£50"],
            ["Tue", "x", "£60"],
            ["Total", "£115", "£110"]
          ]
        },
        answer: "£70"
      },
      {
        difficulty: "medium",
        prompt: "How much longer does Bus 2 take than Bus 1?",
        diagram: {
          kind: "table",
          headers: ["Route", "Dep", "Arr"],
          rows: [
            ["Bus 1", "09:10", "09:45"],
            ["Bus 2", "09:20", "10:10"]
          ]
        },
        answer: "15 minutes"
      },
      {
        difficulty: "medium",
        prompt: "What is the total attendance on Friday across both sessions?",
        diagram: {
          kind: "table",
          headers: ["Session", "Adults", "Kids"],
          rows: [
            ["Morning", 24, 38],
            ["Afternoon", 31, 47]
          ]
        },
        answer: "140"
      },
      {
        difficulty: "medium",
        prompt:
          "A mileage chart shows distance from Town A to B is 35 miles, and B to C is 48 miles. If a driver goes A to B to C and then 83 miles direct back to A, what is the total distance?",
        answer: "166 miles"
      },
      {
        difficulty: "medium",
        prompt:
          "A sports club table shows 45 members play tennis, 32 play badminton, and 12 play both. How many members play only tennis?",
        answer: "33 members"
      },
      {
        difficulty: "hard",
        prompt: "Find frequency y if total is 50",
        diagram: {
          kind: "table",
          headers: ["Score", "Freq"],
          rows: [
            ["1-5", 12],
            ["6-10", 18],
            ["11-15", "y"],
            ["16-20", 6]
          ]
        },
        answer: "14"
      },
      {
        difficulty: "hard",
        prompt: "Which flight has the highest average speed in mph?",
        diagram: {
          kind: "table",
          headers: ["Flight", "Dist", "Time"],
          rows: [
            ["F1", "300 mi", "30 min"],
            ["F2", "500 mi", "1 hr"]
          ]
        },
        answer: "F1 (600 mph)"
      },
      {
        difficulty: "hard",
        prompt:
          "In a two-way table of 100 students, 60 study French, 45 study German, and 20 study both. How many study neither language?",
        answer: "15 students"
      },
      {
        difficulty: "hard",
        prompt:
          "A train departs at 14:38 and travels for 1 hour 47 minutes, then is delayed by 25 minutes. At what time does it arrive?",
        answer: "16:50"
      },
      {
        difficulty: "hard",
        prompt:
          "A journey from P to S via Q and R covers: P to Q (42 mi), Q to R (56 mi), R to S (38 mi). If a lorry uses 1 gallon per 8 miles, how many gallons are needed in total?",
        answer: "17 gallons"
      }
    ]
  },
  {
    page: 6,
    title: "Data: Venn & Carroll Diagrams",
    label: "Data venn and carroll diagrams",
    topic: "venn-diagrams",
    instruction:
      "Classify items into sets, find intersections, universal subsets, and solve Carroll diagrams.",
    problems: [
      {
        difficulty: "easy",
        prompt: "How many items are in both Set A and Set B?",
        diagram: {
          kind: "venn",
          labelA: "Mult 2",
          labelB: "Mult 3",
          onlyA: 4,
          both: 3,
          onlyB: 5,
          neither: 2
        },
        answer: "3"
      },
      {
        difficulty: "easy",
        prompt: "How many pets are Cats only?",
        diagram: {
          kind: "venn",
          labelA: "Cats",
          labelB: "Dogs",
          onlyA: 8,
          both: 4,
          onlyB: 6
        },
        answer: "8"
      },
      {
        difficulty: "easy",
        prompt: "How many numbers are Even and Greater than 20?",
        diagram: {
          kind: "carroll",
          rowHeader: ["Even", "Odd"],
          colHeader: ["> 20", "≤ 20"],
          data: [
            [5, 8],
            [6, 7]
          ]
        },
        answer: "5"
      },
      {
        difficulty: "easy",
        prompt:
          "In a class of 30 pupils, 18 like Art, 15 like Music, and 7 like both. How many pupils like neither subject?",
        answer: "4 pupils"
      },
      {
        difficulty: "easy",
        prompt:
          "Set A = {2, 4, 6, 8, 10} and Set B = {4, 8, 12, 16}. List the numbers in the intersection (A ∩ B).",
        answer: "4, 8"
      },
      {
        difficulty: "medium",
        prompt: "What is the total number of people in the survey?",
        diagram: {
          kind: "venn",
          labelA: "Tea",
          labelB: "Coffee",
          onlyA: 14,
          both: 9,
          onlyB: 12,
          neither: 5
        },
        answer: "40 people"
      },
      {
        difficulty: "medium",
        prompt: "How many people like Swimming or Tennis or both?",
        diagram: {
          kind: "venn",
          labelA: "Swim",
          labelB: "Tennis",
          onlyA: 16,
          both: 7,
          onlyB: 11,
          neither: 6
        },
        answer: "34 people"
      },
      {
        difficulty: "medium",
        prompt: "Find the missing number x if the total in the Carroll table is 40",
        diagram: {
          kind: "carroll",
          rowHeader: ["Prime", "Not Prime"],
          colHeader: ["< 10", "≥ 10"],
          data: [
            [4, 6],
            [5, "x"]
          ]
        },
        answer: "25"
      },
      {
        difficulty: "medium",
        prompt:
          "Out of 50 students, 30 play Football, 25 play Cricket, and 8 play neither. How many students play both sports?",
        answer: "13 students"
      },
      {
        difficulty: "medium",
        prompt:
          "In a Venn diagram sorting numbers from 1 to 20: Set A is Multiples of 4, Set B is Multiples of 5. Which number is in both sets?",
        answer: "20"
      },
      {
        difficulty: "hard",
        prompt: "What fraction of the total group is in only Set A in simplest form?",
        diagram: {
          kind: "venn",
          labelA: "French",
          labelB: "Spanish",
          onlyA: 20,
          both: 10,
          onlyB: 15,
          neither: 5
        },
        answer: "2/5"
      },
      {
        difficulty: "hard",
        prompt: "If 24 people like Drama (Set A in total), find the value of x",
        diagram: {
          kind: "venn",
          labelA: "Drama",
          labelB: "Music",
          onlyA: "x",
          both: 9,
          onlyB: 14,
          neither: 7
        },
        answer: "15"
      },
      {
        difficulty: "hard",
        prompt:
          "In a year group of 90 pupils, 55 study French, 48 study German, and 8 study neither. How many pupils study only German?",
        answer: "27 pupils"
      },
      {
        difficulty: "hard",
        prompt:
          "In a club of 60 members, twice as many play only Chess as play only Draughts. 12 play both and 6 play neither. How many play only Chess?",
        answer: "28 members"
      },
      {
        difficulty: "hard",
        prompt:
          "A Venn diagram classifies numbers 1 to 30 into Multiples of 3 (Set A) and Square numbers (Set B). What is the sum of the numbers in the intersection?",
        answer: "9"
      }
    ]
  },
  {
    page: 7,
    title: "Data: Mean",
    label: "Data mean",
    topic: "mean",
    instruction:
      "Calculate arithmetic means from number sets, find missing values given the mean, and solve combined averages.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Find the mean of the numbers",
        given: "4, 8, 12, 16",
        answer: "10"
      },
      {
        difficulty: "easy",
        prompt: "Calculate the mean of the set",
        given: "5, 9, 13, 17, 21",
        answer: "13"
      },
      {
        difficulty: "easy",
        prompt: "Find the mean",
        given: "10, 20, 30, 40",
        answer: "25"
      },
      {
        difficulty: "easy",
        prompt:
          "Sarah scored 14, 18, and 16 on three spelling tests. What was her mean score?",
        answer: "16"
      },
      {
        difficulty: "easy",
        prompt:
          "The heights of 4 seedlings are 6 cm, 8 cm, 11 cm, and 15 cm. What is their mean height?",
        answer: "10 cm"
      },
      {
        difficulty: "medium",
        prompt: "Find the mean score of the set",
        given: "12, 17, 19, 24, 28",
        answer: "20"
      },
      {
        difficulty: "medium",
        prompt: "Calculate the mean of the decimal numbers",
        given: "3.5, 4.5, 6.0, 8.0",
        answer: "5.5"
      },
      {
        difficulty: "medium",
        prompt: "Find the mean temperature",
        given: "14°C, 18°C, 22°C, 16°C, 25°C",
        answer: "19°C"
      },
      {
        difficulty: "medium",
        prompt:
          "The mean of 5 numbers is 12. If four of the numbers are 8, 10, 14, and 16, what is the fifth number?",
        answer: "12"
      },
      {
        difficulty: "medium",
        prompt:
          "A runner's times for 4 laps were 62s, 58s, 65s, and 55s. What was the mean lap time in seconds?",
        answer: "60 seconds"
      },
      {
        difficulty: "hard",
        prompt:
          "The mean of 4 numbers is 25. Three numbers are 18, 27, and 31. Find the fourth number.",
        answer: "24"
      },
      {
        difficulty: "hard",
        prompt: "Find the mean of the set: 2.4, 3.8, 5.2, 6.6, 7.0",
        answer: "5"
      },
      {
        difficulty: "hard",
        prompt:
          "The mean of 6 numbers is 15. If a seventh number 29 is added to the set, what is the new mean?",
        answer: "17"
      },
      {
        difficulty: "hard",
        prompt:
          "In a basketball tournament, a team scored a mean of 48 points in their first 4 games. How many points must they score in the 5th game to achieve an overall mean of 52 points?",
        answer: "68 points"
      },
      {
        difficulty: "hard",
        prompt:
          "Class A (20 students) scored a mean of 70%. Class B (30 students) scored a mean of 80%. What is the combined mean score of all 50 students?",
        answer: "76%"
      }
    ]
  },
  {
    page: 8,
    title: "Data: Mode, Median & Range",
    label: "Data mode median and range",
    topic: "mode-median-range",
    instruction:
      "Determine the mode, median, and range from discrete data sets and frequency distributions.",
    problems: [
      {
        difficulty: "easy",
        prompt: "Find the mode of the set",
        given: "3, 7, 7, 9, 12, 15",
        answer: "7"
      },
      {
        difficulty: "easy",
        prompt: "Find the median of the numbers",
        given: "4, 6, 9, 11, 15",
        answer: "9"
      },
      {
        difficulty: "easy",
        prompt: "Find the range of the set",
        given: "5, 12, 18, 27, 34",
        answer: "29"
      },
      {
        difficulty: "easy",
        prompt:
          "A group of friends' ages are 10, 11, 10, 12, 10, 11, 13. What is the modal age?",
        answer: "10"
      },
      {
        difficulty: "easy",
        prompt:
          "Test scores: 15, 22, 18, 31, 27, 19, 25. Find the range of the test scores.",
        answer: "16 (31 − 15)"
      },
      {
        difficulty: "medium",
        prompt: "Find the median of the unsorted set",
        given: "14, 8, 22, 11, 19, 5, 17",
        answer: "14"
      },
      {
        difficulty: "medium",
        prompt: "Find the median of the values",
        given: "6, 9, 12, 16, 20, 24",
        answer: "14"
      },
      {
        difficulty: "medium",
        prompt: "Find the range and mode of the data",
        given: "12, 15, 12, 18, 21, 12, 25",
        answer: "Range: 13, Mode: 12"
      },
      {
        difficulty: "medium",
        prompt:
          "Daily temperatures: 18°C, 21°C, 19°C, 24°C, 22°C, 20°C, 23°C. What is the median temperature?",
        answer: "21°C"
      },
      {
        difficulty: "medium",
        prompt:
          "A data set has a lowest value of 14 and a range of 28. What is the highest value in the data set?",
        answer: "42"
      },
      {
        difficulty: "hard",
        prompt: "Find the median of the decimal numbers: 2.8, 1.4, 3.6, 5.1, 2.2, 4.5",
        answer: "3.2"
      },
      {
        difficulty: "hard",
        prompt:
          "Five positive integers have a mode of 6, a median of 8, and a range of 9. If the lowest integer is 6, what is the largest?",
        answer: "15"
      },
      {
        difficulty: "hard",
        prompt:
          "For the ordered set 7, 11, 15, x, 22, the median is 15 and the mean is 16. Find the value of x.",
        answer: "25"
      },
      {
        difficulty: "hard",
        prompt:
          "A set of 4 positive integers has a unique mode of 5, a median of 6.5, and a range of 8. List the 4 integers in ascending order.",
        answer: "5, 5, 8, 13"
      },
      {
        difficulty: "hard",
        prompt:
          "In a competition, 7 scores have a mean of 18, a median of 19, and a range of 10. If the lowest score is 12, what is the highest possible score?",
        answer: "22"
      }
    ]
  }
];
