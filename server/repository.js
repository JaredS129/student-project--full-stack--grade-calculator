const db = require("./db");

const getGradeScale = async () => {
  try {
    const result = await db.query(
      `SELECT
        id,
        level,
        min_mark,
        max_mark,
        grade
      FROM grade_scale 
      ORDER BY
        id
      ASC
      `
    );
    const gradeScale = result.rows;
    return gradeScale;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = {
  getGradeScale,
};
