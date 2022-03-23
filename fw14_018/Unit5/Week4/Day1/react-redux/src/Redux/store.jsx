import { combineReducers, createStore } from "redux";
import { countReducer } from "./count/reducer";
import { todoReducer } from "./todo/reducer";

const reducer = combineReducers({
    count: countReducer,
    todo: todoReducer
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
