import { Folders, Logs } from "./components";
import styles from "./Home.module.css";

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
