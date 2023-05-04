"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _timerReducer = _interopRequireDefault(require("./timerReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialCounterState = localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")) : 0;

var counterReducer = function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialCounterState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

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

var rootReducer = (0, _redux.combineReducers)({
  counter: counterReducer,
  timer: _timerReducer["default"]
});
var store = (0, _redux.createStore)(rootReducer, undefined, (0, _redux.applyMiddleware)(_reduxThunk["default"]));
var _default = store;
exports["default"] = _default;