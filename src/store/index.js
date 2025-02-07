import { create } from "zustand";

export const CHRONOMETER_MODE = {
  FOCO: {
    id: "foco",
    name: "Foco",
    phrase: ["Otimize sua produtividade,", "mergulhe no que importa."],
    initialTimeInSec: 30,
  },
  DESCANSO_CURTO: {
    id: "descanso-curto",
    name: "Descanso curto",
    phrase: ["Que tal dar uma respirada?", "Faça uma pausa curta."],
    initialTimeInSec: 5,
  },
  DESCANSO_LONGO: {
    id: "descanso-longo",
    name: "Descanso longo",
    phrase: ["Hora de voltar à superfície.", "Faça uma pausa longa."],
    initialTimeInSec: 15,
  },
};

export const useChronometerStore = create((set) => ({
  chronometerMode: CHRONOMETER_MODE.FOCO,
  timeInSec: CHRONOMETER_MODE.FOCO.initialTimeInSec,

  setChronometerMode: (newMode) => {
    set({ chronometerMode: newMode, timeInSec: newMode.initialTimeInSec });
  },
}));
