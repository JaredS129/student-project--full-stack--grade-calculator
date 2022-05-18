import { getLetterGrade } from "./utils";

const gradeScale = [
  {
    level: "Level 5",
    minMark: 90,
    maxMark: 100,
    grade: "A+",
  },
  {
    level: "Level 5",
    minMark: 85,
    maxMark: 89,
    grade: "A",
  },
  {
    level: "Level 5",
    minMark: 80,
    maxMark: 84,
    grade: "A-",
  },
  {
    level: "Level 5",
    minMark: 75,
    maxMark: 79,
    grade: "B+",
  },
  {
    level: "Level 5",
    minMark: 70,
    maxMark: 74,
    grade: "B",
  },
  {
    level: "Level 5",
    minMark: 65,
    maxMark: 69,
    grade: "B-",
  },
  {
    level: "Level 5",
    minMark: 60,
    maxMark: 64,
    grade: "C+",
  },
  {
    level: "Level 5",
    minMark: 55,
    maxMark: 59,
    grade: "C",
  },
  {
    level: "Level 5",
    minMark: 50,
    maxMark: 54,
    grade: "C-",
  },
  {
    level: "Level 5",
    minMark: 40,
    maxMark: 49,
    grade: "D",
  },
  {
    level: "Level 5",
    minMark: 0,
    maxMark: 39,
    grade: "E",
  },
  {
    level: "Level 6",
    minMark: 92,
    maxMark: 100,
    grade: "A+",
  },
  {
    level: "Level 6",
    minMark: 85,
    maxMark: 91,
    grade: "A",
  },
  {
    level: "Level 6",
    minMark: 80,
    maxMark: 84,
    grade: "A-",
  },
  {
    level: "Level 6",
    minMark: 75,
    maxMark: 79,
    grade: "B+",
  },
  {
    level: "Level 6",
    minMark: 70,
    maxMark: 74,
    grade: "B",
  },
  {
    level: "Level 6",
    minMark: 65,
    maxMark: 69,
    grade: "B-",
  },
  {
    level: "Level 6",
    minMark: 60,
    maxMark: 64,
    grade: "C+",
  },
  {
    level: "Level 6",
    minMark: 55,
    maxMark: 59,
    grade: "C",
  },
  {
    level: "Level 6",
    minMark: 50,
    maxMark: 54,
    grade: "C-",
  },
  {
    level: "Level 6",
    minMark: 40,
    maxMark: 49,
    grade: "D",
  },
  {
    level: "Level 6",
    minMark: 0,
    maxMark: 39,
    grade: "E",
  },
];

describe("getLetterGrade", () => {
  const midRangeInputs = [
    ["Level 5", 95, "A+"],
    ["Level 5", 87, "A"],
    ["Level 5", 82, "A-"],
    ["Level 5", 77, "B+"],
    ["Level 5", 72, "B"],
    ["Level 5", 67, "B-"],
    ["Level 5", 62, "C+"],
    ["Level 5", 57, "C"],
    ["Level 5", 52, "C-"],
    ["Level 5", 44, "D"],
    ["Level 5", 20, "E"],
    ["Level 6", 93, "A+"],
    ["Level 6", 86, "A"],
    ["Level 6", 82, "A-"],
    ["Level 6", 77, "B+"],
    ["Level 6", 72, "B"],
    ["Level 6", 67, "B-"],
    ["Level 6", 62, "C+"],
    ["Level 6", 57, "C"],
    ["Level 6", 52, "C-"],
    ["Level 6", 44, "D"],
    ["Level 6", 20, "E"],
  ];
  const maxInclusiveInputs = [
    ["Level 5", 100, "A+"],
    ["Level 5", 89, "A"],
    ["Level 5", 84, "A-"],
    ["Level 5", 79, "B+"],
    ["Level 5", 74, "B"],
    ["Level 5", 69, "B-"],
    ["Level 5", 64, "C+"],
    ["Level 5", 59, "C"],
    ["Level 5", 54, "C-"],
    ["Level 5", 49, "D"],
    ["Level 5", 39, "E"],
    ["Level 6", 100, "A+"],
    ["Level 6", 91, "A"],
    ["Level 6", 84, "A-"],
    ["Level 6", 79, "B+"],
    ["Level 6", 74, "B"],
    ["Level 6", 69, "B-"],
    ["Level 6", 64, "C+"],
    ["Level 6", 59, "C"],
    ["Level 6", 54, "C-"],
    ["Level 6", 49, "D"],
    ["Level 6", 39, "E"],
  ];
  const minInclusiveInputs = [
    ["Level 5", 90, "A+"],
    ["Level 5", 85, "A"],
    ["Level 5", 80, "A-"],
    ["Level 5", 75, "B+"],
    ["Level 5", 70, "B"],
    ["Level 5", 65, "B-"],
    ["Level 5", 60, "C+"],
    ["Level 5", 55, "C"],
    ["Level 5", 50, "C-"],
    ["Level 5", 40, "D"],
    ["Level 5", 0, "E"],
    ["Level 6", 92, "A+"],
    ["Level 6", 85, "A"],
    ["Level 6", 80, "A-"],
    ["Level 6", 75, "B+"],
    ["Level 6", 70, "B"],
    ["Level 6", 65, "B-"],
    ["Level 6", 60, "C+"],
    ["Level 6", 55, "C"],
    ["Level 6", 50, "C-"],
    ["Level 6", 40, "D"],
    ["Level 6", 0, "E"],
  ];
  test.each(midRangeInputs)(
    "a %s score of %i should output a %s result",
    (a, b, expected) => {
      expect(getLetterGrade(gradeScale, a, b)).toBe(expected);
    }
  );
  test.each(maxInclusiveInputs)(
    "a %s score of %i should output a %s result",
    (a, b, expected) => {
      expect(getLetterGrade(gradeScale, a, b)).toBe(expected);
    }
  );
  test.each(minInclusiveInputs)(
    "a %s score of %i should output a %s result",
    (a, b, expected) => {
      expect(getLetterGrade(gradeScale, a, b)).toBe(expected);
    }
  );

  test.todo("Test negative scenarios");

  test("Throws an error for invalid gradeScale", () => {
    const corruptGradeScale = {};
    const mark = 70;
    const level = "Level 5";
    expect(() => getLetterGrade(corruptGradeScale, mark, level)).toThrow(
      "Grade scale not provided."
    );
  });
});
