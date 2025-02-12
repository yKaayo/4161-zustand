import { create } from "zustand";

export const chronometerMode = {
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
  chronometerMode: chronometerMode.FOCO,
  timeInSec: chronometerMode.FOCO.initialTimeInSec,

  setChronometerMode: (newMode) => {
    set({ chronometerMode: newMode, timeInSec: newMode.initialTimeInSec });
  },

  intervalId: null,

  startChronometer: () => {
    const novoId = setInterval(countdown, 1000);

    set({ intervalId: novoId });
  },
}));

function countdown() {
  const { timeInSec } = useChronometerStore.getState();
  
  timeInSec > 0 ? decreaseTime() : resetTime();
}

function decreaseTime() {
  useChronometerStore.setState((state) => ({ timeInSec: state.timeInSec - 1 }));
}

function resetTime() {
  useChronometerStore.setState((state) => ({ initialTimeInSec: state.initialTimeInSec }));
}
