import styles from "./Logs.module.css";
import { useLogViewModel } from "./useLogViewModel";

export const Logs = () => {
  const { logs, addLog, input } = useLogViewModel();

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
              addLog();
            }
          }}
        />
        <button className={styles.addLog} onClick={addLog}>
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
