import { combineReducers, createStore } from "redux";
import { todoReducer } from "./TodoReducer";

const reducer = combineReducers({
  todo: todoReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
