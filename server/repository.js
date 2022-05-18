const db = require("./db");

const getGradeScale = async () => {
  try {
    const result = await db.query(
      `SELECT
        level,
        min_mark AS "minMark",
        max_mark AS "maxMark",
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
