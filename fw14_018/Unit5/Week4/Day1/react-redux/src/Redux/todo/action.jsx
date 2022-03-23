// actionType.js :

export const ADD_TODO = "ADD_TODO";

// Action Creators:

export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
