import styles from "./App.module.css";

import Cabecalho from "./components/Cabecalho";
import Cronometro from "./components/Cronometro";
import ListaDeTarefas from "./components/ListaDeTarefas";
import Rodape from "./components/Rodape";
import { useChronometerStore } from "./store";

function App() {
  const modoCronometro = useChronometerStore(state => state.chronometerMode)

  return (
    <div className={styles[`app--${modoCronometro.id}`]}>
      <Cabecalho />

      <main>
        <Cronometro />

        <ListaDeTarefas />
      </main>

      <Rodape />
    </div>
  );
}

export default App;
