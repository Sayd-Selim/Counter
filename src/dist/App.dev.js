// import React from "react";
// import "./index.scss";
// import { useSelector, useDispatch } from "react-redux";
// import { TimerAdd } from "./Timer";
// function App() {
//   const dispatch = useDispatch();
//   const [StatelocalStorage, setStateLocalStorage] = React.useState(0);
//   const [state2, setState] = React.useState("Счётчик");
//   const [timer, setTimer] = React.useState(0);
//   const state = useSelector((state) => state);
//   React.useEffect(() => {
//     localStorage.setItem("state", JSON.stringify(state));
//     setStateLocalStorage(state);
//   }, [state]);
//   React.useEffect(() => {
//     const local = localStorage.getItem("state");
//     if (local) {
//       setStateLocalStorage(JSON.parse(local));
//       dispatch({ type: "SET_STATE", payload: JSON.parse(local) });
//     }
//   }, []);
//   const [timerInterval, setTimerInterval] = React.useState(null); // состояние для хранения интервала таймера
//   const handleTimer = (action) => {
//     if (action === "START") {
//       const interval = setInterval(() => {
//         setTimer((prevTimer) => prevTimer + 1);
//       }, 1000);
//       setTimerInterval(interval);
//     } else if (action === "STOP") {
//       clearInterval(timerInterval);
//     } else if (action === "RESET") {
//       clearInterval(timerInterval);
//       setTimer(0);
//     }
//   };
//   return (
//     <div className="App">
//       <div>
//         <div className="btns">
//           <h2>
//             <button onClick={(e) => setState(e.target.innerHTML)}>
//               Счётчик
//             </button>
//           </h2>
//           <h2>
//             <button onClick={(e) => setState(e.target.innerHTML)}>
//               Таймер
//             </button>
//           </h2>
//         </div>
//         <h1>{ state2 ===  "Счётчик" ? StatelocalStorage : timer}</h1>
//         {state2 === "Счётчик"  ? (
//           <>
//             <button
//               onClick={() => dispatch({ type: "DECREMENT" })}
//               className="minus"
//             >
//               - Минус
//             </button>
//             <button
//               onClick={() => dispatch({ type: "INCREMENT" })}
//               className="plus"
//             >
//               Плюс +
//             </button>
//           </>
//         ) : (
//           <TimerAdd handleTimer={handleTimer} timer={timer}/>
//         )}
//         { state2 === 'Счётчик' && <button onClick={() => dispatch({ type: "RESET" })} className="reset">
//         Сброс
//       </button>}
//       </div>
//     </div>
//   );
// }
// export default App;
"use strict";