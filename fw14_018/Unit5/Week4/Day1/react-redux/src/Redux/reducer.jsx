import { ADD_COUNT, Add_TODO, SUB_COUNT } from "./actioin";

export const reducer = (store, { type, payload }) => {
  console.log('Store', store);
  switch (type) {
    case ADD_COUNT:
      return { ...store, count: store.count + payload };
    case SUB_COUNT:
      return { ...store, count: store.count - payload };
    case Add_TODO:
      return { ...store, toto: [...store.todo, payload] };
    default:
      return store;
  }
};
