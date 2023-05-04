const initialState = {
  time: localStorage.getItem("Timer")
    ? (isNaN(Number(localStorage.getItem("Timer"))) ? 0 : Number(localStorage.getItem("Timer")))
    : 0,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TIMER_INCREMENT":
      return { ...state, time: state.time + 1 };
    case "TIMER_RESET":
      return {time: 0};
    case "TIMER_SET":
      return { ...state, time: action.payload };
    default:
      return state;
  }
};

export default timerReducer;