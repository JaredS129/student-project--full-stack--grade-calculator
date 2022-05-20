const getLetterGrade = (gradeScale, mark, level) => {
  if (!Array.isArray(gradeScale) || !gradeScale.length) {
    throw new Error("Grade scale not provided.");
  }
  if (
    !("grade" in gradeScale[0]) ||
    !("minMark" in gradeScale[0]) ||
    !("maxMark" in gradeScale[0]) ||
    !("level" in gradeScale[0])
  ) {
    throw new Error("Invalid grade scale provided.");
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
  const finalGrade = gradeScale.filter(
    (grade) =>
      grade.level === level && mark >= grade.minMark && mark <= grade.maxMark
  )[0].grade;
  return finalGrade;
};

module.exports = { getLetterGrade };
