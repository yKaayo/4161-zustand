import styles from "./styles.module.css";
import logoImg from "/src/assets/imgs/logo.png";
import focoImg from "/src/assets/imgs/foco.png";
import descansoCurtoImg from "/src/assets/imgs/descanso-curto.png";
import descansoLongoImg from "/src/assets/imgs/descanso-longo.png";
import { useChronometerStore } from "../../store";

export default function Cabecalho() {
  const chronometerMode = useChronometerStore((state) => state.chronometerMode);
  const [firstText, secondText] = chronometerMode.phrase;

  function showImg() {
    if (chronometerMode.id === "foco") {
      return focoImg;
    } else if (chronometerMode.id === "descanso-curto") {
      return descansoCurtoImg;
    } else if (chronometerMode.id === "descanso-longo") {
      return descansoLongoImg;
    }
  }

  return (
    <header className="header">
      <figure className={styles["header__logo-figure"]}>
        <img src={logoImg} alt="Logotipo do Fokus" />
      </figure>

      <section className={styles["header__section-banner-container"]}>
        <h1 className={styles["header__title"]}>
          {firstText} <strong className={styles["header__title-strong"]}>{secondText}</strong>
        </h1>

        <figure className={styles["header__image-figure"]}>
          <img className={styles["header__image"]} src={showImg()} alt="" />
        </figure>
      </section>
    </header>
  );
}
