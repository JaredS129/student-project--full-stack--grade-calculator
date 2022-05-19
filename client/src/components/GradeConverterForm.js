import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { getLetterGrade } from "../utils";
import styles from "./GradeConverterForm.module.css";

const GradeConverterForm = ({ gradeScale }) => {
  const [level, setLevel] = useState("Level 5");
  const [mark, setMark] = useState(0);
  const [grade, setGrade] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
        {(grade === "D" || grade === "E") && (
          <p className={styles.result + " " + styles.de}>{grade}</p>
        )}
        {grade.includes("C") && (
          <p className={styles.result + " " + styles.c}>{grade}</p>
        )}
        {grade.includes("B") && (
          <p className={styles.result + " " + styles.b}>{grade}</p>
        )}
        {grade.includes("A") && (
          <p className={styles.result + " " + styles.a}>{grade}</p>
        )}
      </div>
    </>
  );
};

export default GradeConverterForm;
