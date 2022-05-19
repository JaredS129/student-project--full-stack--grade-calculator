import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.header}>GRADE CALCULATOR</h1>
    </header>
  );
};

export default Header;
