import { create } from "zustand";
import soundBeep from '../assets/sons/beep.mp3'
import soundPause from '../assets/sons/pause.mp3'
import soundPlay from '../assets/sons/play.wav'

const soundCountFinish = new Audio(soundBeep)
const soundCountPause = new Audio(soundPause)
const soundCountPlay = new Audio(soundPlay)

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
    soundCountPlay.play()

    set({ intervalId: novoId });
  },

  pauseChronometer: () => {
    set((state) => {
      clearInterval(state.intervalId);
      soundCountPause.play()
      return { intervalId: null };
    });
  },
}));

function countdown() {
  const { timeInSec, pauseChronometer } = useChronometerStore.getState();

  timeInSec > 0 ? decreaseTime() : (pauseChronometer(), resetTime(), soundCountFinish.play());
}

function decreaseTime() {
  useChronometerStore.setState((state) => ({ timeInSec: state.timeInSec - 1 }));
}

function resetTime() {
  useChronometerStore.setState(
    (state) => ({timeInSec: state.chronometerMode.initialTimeInSec}
    ),
  );
}
