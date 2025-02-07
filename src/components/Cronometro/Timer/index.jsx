import { useChronometerStore } from "../../../store";
import styles from "./styles.module.css";

export default function Timer() {
  const chronometerMode = useChronometerStore(state => state.chronometerMode)

  return <div className={styles["cronometer-timer"]}>{chronometerMode.initialTimeInSec}</div>;
}
