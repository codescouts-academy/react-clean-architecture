import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src="./favicon.png"
        width="40px"
        alt="codescouts-logo"
      />
      <span
        style={{
          fontWeight: "bold",
          fontSize: "2em",
        }}
      >
        <span>{"<Code "}</span>
        <span
          style={{
            color: "#ffe102",
          }}
        >
          {"Scouts/>"}
        </span>
      </span>
    </header>
  );
};
