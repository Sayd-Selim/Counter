import React from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { TimerAdd } from "./Timer";
import soundPlus from "./sounds/plus.mp3";
import soundMinus from "./sounds/minus.mp3";
import soundReset from "./sounds/reset.mp3";
import timerGo from './sounds/timerGo.mp3'
import timerPausa from './sounds/timerPausa.mp3'


function App() {
  const dispatch = useDispatch();
  const [state2, setState] = React.useState("Счётчик");
  const { counter, timer } = useSelector((state) => state);
  const [timerRunning, setTimerRunning] = React.useState(false);
  console.log(timer);
  // console.log(typeof counter);

  React.useEffect(() => {
    localStorage.setItem("state", JSON.stringify(counter));
  }, [counter]);

  React.useEffect(() => {
    const local = localStorage.getItem("state");
    // console.log(typeof local);
    if (local) {
      dispatch({ type: "SET_STATE", payload: JSON.parse(local) });
    }
  }, []);






  const playSoundPlus = () => {
    const audio = new Audio(soundPlus);
    audio.play();
  };
  const playSoundMinus = () => {
    const audio = new Audio(soundMinus);
    audio.play();
  };

  const playSoundReset = () => {
    const audio = new Audio(soundReset);
    audio.play();
  };






  const incrementAsync = () => (dispatch) => {
    dispatch({ type: "INCREMENT" });
    playSoundPlus();
    // Задержка 1 секунда
  };

  const decrementAsync = () => (dispatch) => {
    dispatch({ type: "DECREMENT" });
    playSoundMinus();
  };

  const resetAsync = () => dispatch => {
    dispatch({ type: "RESET" })
    playSoundReset()

  }


  const timerPlaySound = () => {
    const audio = new Audio(timerGo)
    audio.play()
  }


  const timerPausaSound = () => {
    const audio = new Audio(timerPausa)
    audio.play()
  }

  const [timerInterval, setTimerInterval] = React.useState(null); // состояние для хранения интервала таймера

  // console.log(timerInterval);
  const handleTimer = (action) => {
    if (action === "START") {
      if (!timerRunning) {
        setTimerRunning(true);
        const interval = setInterval(() => {
          timerPlaySound()
          dispatch({ type: "TIMER_INCREMENT" });
        }, 1000);
        setTimerInterval(interval);
      }
    } else if (action === "STOP") {
      timerPausaSound()
      clearInterval(timerInterval);
      setTimerRunning(false); // чтобы установить значение timerRunning в false при остановке таймера
    } else if (action === "RESET") {
      playSoundReset()
      clearInterval(timerInterval);
      setTimerRunning(false); // чтобы установить значение timerRunning в false при сбросе таймера
      dispatch({ type: "TIMER_RESET" });
    }
  };

  React.useEffect(() => {
    localStorage.setItem("Timer", JSON.stringify(timer.time));
  }, [timer.time]);

  React.useEffect(() => {
    const local = localStorage.getItem("Timer");
    if (local) {
      dispatch({ type: "TIMER_SET", payload: Number(local) });
    }
  }, []);

  return (
    <div className="App">
      <div>
        <div className="btns">
          <h2>
            <button onClick={(e) => setState(e.target.innerHTML)}>
              Счётчик
            </button>
          </h2>
          <h2>
            <button onClick={(e) => setState(e.target.innerHTML)}>
              Таймер
            </button>
          </h2>
        </div>
        <h1>{state2 === "Счётчик" ? counter : timer.time}</h1>

        {state2 === "Счётчик" ? (
          <>
            <button
              onClick={() => dispatch(decrementAsync())}
              className="minus"
            >
              - Минус
            </button>
            <button onClick={() => dispatch(incrementAsync())} className="plus">
              Плюс +
            </button>
          </>
        ) : (
          <TimerAdd handleTimer={handleTimer} timer={timer} />
        )}
        {state2 === "Счётчик" && (
          <button onClick={() => dispatch(resetAsync())} className="reset">
            Сброс
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
