import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img
          className={styles.logo}
          src="./favicon.png"
          width="40px"
          alt="codescouts-logo"
        />
        <span
          style={{
            fontWeight: "bold",
            fontSize: "1.7rem",
          }}
        >
          <span>{"<Code"}</span>
          <span
            style={{
              color: "#ffe102",
            }}
          >
            {"Scouts/>"}
          </span>
        </span>
      </div>
      <span>
        <a href="https://curtme.org/4hAvORb" title="Github repo">
          <img
            src="https://img.shields.io/static/v1?label=codescouts-academy&message=react-clean-architecture&color=blue&logo=github"
            alt="codescouts-academy - react-clean-architecture"
          />
        </a>
      </span>
    </header>
  );
};
