import styles from "./Logs.module.css";
import { useLogViewModel } from "./useLogViewModel";

export const Logs = () => {
  const { logs, test, input } = useLogViewModel();

  return (
    <div className={styles.log}>
      <div className={styles.logContainer}>
        <input
          className={styles.text}
          type="text"
          ref={input}
          placeholder="Write log"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              test();
            }
          }}
        />
        <button className={styles.addLog} onClick={test}>
          Add Log
        </button>
      </div>

      <ul>
        {logs.map((log) => (
          <li key={log.when}>{log.format()}</li>
        ))}
      </ul>
    </div>
  );
};
