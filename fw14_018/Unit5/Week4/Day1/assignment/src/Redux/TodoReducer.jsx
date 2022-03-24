import { Add_TODO } from "./TodoAction";

const initState = {
  todo: [],
};

export const todoReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case Add_TODO:
      return { ...store, todo: payload };
    default:
        return store;
  }
};
