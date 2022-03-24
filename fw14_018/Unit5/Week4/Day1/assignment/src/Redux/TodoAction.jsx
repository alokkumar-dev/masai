// Crete action type..
export const Add_TODO = "ADD_TODO";

// Action Creator
export const addTodo = (todo) => ({
  type: Add_TODO,
  payload: todo,
});
