import styles from "./styles.module.css";
import play_arrowImg from "/src/assets/imgs/play_arrow.png";
import pauseIcon from "/src/assets/imgs/pause.png";
import { useChronometerStore } from "../../../store";

export default function BotaoCronometro() {
  const intervalId = useChronometerStore((state) => state.intervalId);
  const startChronometer = useChronometerStore((state) => state.startChronometer);  

  return (
    <div className={styles["cronometer__primary-button-wrapper"]}>
      <button onClick={startChronometer} className={styles["cronometer__primary-button"]}>
        <img
          className={styles["cronometer__primary-button-icon"]}
          src={intervalId ? pauseIcon : play_arrowImg}
          alt=""
        />
        <span>{intervalId ? "Pausar" : "Começar"}</span>
      </button>
    </div>
  );
}
