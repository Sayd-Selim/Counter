import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import timerReducer from "./timerReducer";

const initialCounterState = localStorage.getItem("state")
  ? JSON.parse(localStorage.getItem("state"))
  : 0;

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    case "SET_STATE":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  timer: timerReducer,
});

const store = createStore(rootReducer, undefined, applyMiddleware(thunk));

export default store;