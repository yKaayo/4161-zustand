import { useChronometerStore } from "../../../store";
import styles from "./styles.module.css";

export default function Timer() {
  const timeInSec = useChronometerStore((state) => state.timeInSec);
  const time = new Date(timeInSec * 1000);
  const formattedTime = time.toLocaleTimeString("pt-BR", { minute: "2-digit", second: "2-digit" });  

  return <div className={styles["cronometer-timer"]}>{formattedTime}</div>;
}
