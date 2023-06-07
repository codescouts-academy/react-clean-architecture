import styles from "./Home.module.css";

import { Logs, Folders } from "./components";

export const Home = () => {
  return (
    <div className={styles.box}>
      <div className={styles.center}>
        <Folders />
        <Logs />
      </div>
    </div>
  );
};
