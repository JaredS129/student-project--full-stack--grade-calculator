const getLetterGrade = (gradeScale, mark, level) => {
  if (!Array.isArray(gradeScale) || !gradeScale.length) {
    throw new Error("Grade scale not provided.");
  }
  if (
    isNaN(mark) ||
    mark === null ||
    mark === undefined ||
    mark === "" ||
    mark < 0 ||
    mark > 100
  ) {
    throw new Error("Invalid mark provided");
  }
  if (level !== "Level 5" && level !== "Level 6") {
    throw new Error("Invalid level provided");
  }
  const gradeByLevel = gradeScale.filter((grade) => grade.level === level);
  const finalGrade = gradeByLevel.filter(
    (grade) => mark >= grade.minMark && mark <= grade.maxMark
  );
  return finalGrade[0].grade;
};

module.exports = { getLetterGrade };
