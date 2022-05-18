const getLetterGrade = (gradeScale, mark, level) => {
  if (!Array.isArray(gradeScale) || !gradeScale.length) {
    throw new Error("Grade scale not provided.");
  }
  if (isNaN(mark) || mark < 0 || mark > 100 || !mark) {
    throw new Error("Invalid mark provided");
  }
  if (level !== "Level 5" || level !== "Level 6") {
    throw new Error("Invalid level provided");
  }
  return 1;
};

module.exports = { getLetterGrade };
