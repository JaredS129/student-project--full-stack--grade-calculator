const db = require("./db");

const getGradeScale = async () => {
  try {
    const result = await db.query(
      `SELECT
        level
      FROM grade_scale 
      ORDER BY
        id
      `
    );
    const gradeScale = result.rows;
    return gradeScale;
  } catch (error) {
    throw Error(error);
  }
}

module.exports = {
  getGradeScale
};
