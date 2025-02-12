import styles from "./styles.module.css";

import BotaoModo from "./BotaoModo";
import { chronometerMode } from "../../../store";

export default function BotoesModos() {
  const modes = [
    chronometerMode.FOCO,
    chronometerMode.DESCANSO_CURTO,
    chronometerMode.DESCANSO_LONGO,
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
