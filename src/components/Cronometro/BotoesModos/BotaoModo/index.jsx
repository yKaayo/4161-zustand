import { useChronometerStore } from "../../../../store";
import styles from "./styles.module.css";
export default function BotaoModo({ children, modoBotao }) {
  const chronometerMode = useChronometerStore(state => state.chronometerMode)
  const setChronometerMode = useChronometerStore(state => state.setChronometerMode)

  return (
    <button
      className={`
        ${styles["cronometer-modes__button"]}
        ${modoBotao.id === chronometerMode.id ? styles["cronometer-modes__button--active"] : ''}
      `}
      onClick={() => setChronometerMode(modoBotao)}
    >
      {children}
    </button>
  );
}
