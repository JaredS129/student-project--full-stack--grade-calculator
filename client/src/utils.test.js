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
  const nearToBoundary = [
    ["Level 5", 99, "A+"],
    ["Level 5", 88, "A"],
    ["Level 5", 83, "A-"],
    ["Level 5", 78, "B+"],
    ["Level 5", 73, "B"],
    ["Level 5", 68, "B-"],
    ["Level 5", 63, "C+"],
    ["Level 5", 58, "C"],
    ["Level 5", 53, "C-"],
    ["Level 5", 48, "D"],
    ["Level 5", 38, "E"],
    ["Level 5", 91, "A+"],
    ["Level 5", 86, "A"],
    ["Level 5", 81, "A-"],
    ["Level 5", 76, "B+"],
    ["Level 5", 71, "B"],
    ["Level 5", 66, "B-"],
    ["Level 5", 61, "C+"],
    ["Level 5", 56, "C"],
    ["Level 5", 51, "C-"],
    ["Level 5", 41, "D"],
    ["Level 5", 1, "E"],
    ["Level 6", 99, "A+"],
    ["Level 6", 90, "A"],
    ["Level 6", 83, "A-"],
    ["Level 6", 78, "B+"],
    ["Level 6", 73, "B"],
    ["Level 6", 68, "B-"],
    ["Level 6", 63, "C+"],
    ["Level 6", 58, "C"],
    ["Level 6", 53, "C-"],
    ["Level 6", 48, "D"],
    ["Level 6", 38, "E"],
    ["Level 6", 93, "A+"],
    ["Level 6", 86, "A"],
    ["Level 6", 81, "A-"],
    ["Level 6", 76, "B+"],
    ["Level 6", 71, "B"],
    ["Level 6", 66, "B-"],
    ["Level 6", 61, "C+"],
    ["Level 6", 56, "C"],
    ["Level 6", 51, "C-"],
    ["Level 6", 41, "D"],
    ["Level 6", 1, "E"],
  ];
  const invalidMarks = [
    ["Level 5", 101, "Invalid mark provided"],
    ["Level 5", -1, "Invalid mark provided"],
    ["Level 5", null, "Invalid mark provided"],
    ["Level 5", undefined, "Invalid mark provided"],
    ["Level 5", NaN, "Invalid mark provided"],
    ["Level 5", "", "Invalid mark provided"],
    ["Level 5", "string", "Invalid mark provided"],
  ];
  const invalidLevels = [
    [5, 100, "Invalid level provided"],
    ["Level 7", 100, "Invalid level provided"],
    ["", 100, "Invalid level provided"],
    [null, 100, "Invalid level provided"],
    [undefined, 100, "Invalid level provided"],
    ["Level", 100, "Invalid level provided"],
  ];
  test.each(midRangeInputs)(
    "a %s mark of %i should output a %s result",
    (a, b, expected) => {
      expect(getLetterGrade(gradeScale, b, a)).toBe(expected);
    }
  );
  test.each(nearToBoundary)(
    "a %s mark of %i should output a %s result",
    (a, b, expected) => {
      expect(getLetterGrade(gradeScale, b, a)).toBe(expected);
    }
  );
  test.each(maxInclusiveInputs)(
    "a %s mark of %i should output a %s result",
    (a, b, expected) => {
      expect(getLetterGrade(gradeScale, b, a)).toBe(expected);
    }
  );
  test.each(minInclusiveInputs)(
    "a %s mark of %i should output a %s result",
    (a, b, expected) => {
      expect(getLetterGrade(gradeScale, b, a)).toBe(expected);
    }
  );

  test.each(invalidMarks)(
    "a %p mark of %p should output an invalid mark error",
    (a, b, expected) => {
      expect(() => getLetterGrade(gradeScale, b, a)).toThrow(expected);
    }
  );

  test.each(invalidLevels)(
    "a level of %s should output an invalid level error",
    (a, b, expected) => {
      expect(() => getLetterGrade(gradeScale, b, a)).toThrow(expected);
    }
  );

  test("Throws an error for invalid gradeScale", () => {
    const corruptGradeScale = {};
    const mark = 70;
    const level = "Level 5";
    expect(() => getLetterGrade(corruptGradeScale, mark, level)).toThrow(
      "Grade scale not provided."
    );
  });
});
