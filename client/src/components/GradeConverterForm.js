import { useState, useEffect } from "react";
import ErrorMessage from "./ErrorMessage";
import { getLetterGrade } from "../utils";
import styles from "./GradeConverterForm.module.css";

const GradeConverterForm = ({ gradeScale }) => {
  const [level, setLevel] = useState("Level 5");
  const [mark, setMark] = useState(0);
  const [grade, setGrade] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [resultClass, setResultClass] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const letterGrade = getLetterGrade(gradeScale, mark, level);
      setGrade(letterGrade);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    if (grade === "D" || grade === "E") {
      setResultClass(styles.de);
    }
    if (grade.includes("C")) {
      setResultClass(styles.c);
    }
    if (grade.includes("B")) {
      setResultClass(styles.b);
    }
    if (grade.includes("A")) {
      setResultClass(styles.a);
    }
  }, [grade]);

  return (
    <>
      <form className={styles.mainForm} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <div className={styles.inputItem}>
            <label htmlFor="level">Level:</label>
            <select
              className={styles.mainFormSelect}
              id="level"
              value={level}
              onChange={(e) => {
                setGrade("");
                setLevel(e.target.value);
              }}
            >
              <option value="Level 5">Level 5</option>
              <option value="Level 6">Level 6</option>
            </select>
          </div>
          <div className={styles.inputItem}>
            <label htmlFor="mark">Mark:</label>
            <input
              className={styles.mainFormNumber}
              id="mark"
              type="number"
              value={mark}
              onChange={(e) => {
                setGrade("");
                setMark(Number(e.target.value));
              }}
            />
          </div>
        </div>
        <button className={styles.mainFormButton}>GET GRADE</button>
      </form>
      <div className={styles.resultContainer}>
        {errorMessage && <ErrorMessage message={errorMessage} />}
        {grade && <p className={styles.result + " " + resultClass}>{grade}</p>}
      </div>
    </>
  );
};

export default GradeConverterForm;
