import styles from "./styles.module.css";

import BotaoModo from "./BotaoModo";
import { CHRONOMETER_MODE } from "../../../store";

export default function BotoesModos() {
  const modes = [
    CHRONOMETER_MODE.FOCO,
    CHRONOMETER_MODE.DESCANSO_CURTO,
    CHRONOMETER_MODE.DESCANSO_LONGO,
  ];

  return (
    <ul className={styles["cronometer-modes"]}>
      {modes.map((mode) => (
        <li key={mode.id}>
          <BotaoModo modoBotao={mode}>{mode.name}</BotaoModo>
        </li>
      ))}
    </ul>
  );
}
