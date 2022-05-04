// Global State Management

// Patterns:
// Flux: Actions -> Dispatcher -> Store -> View
// MVC - Model, View, Controller

// Actions:
// Always object!
// { type: "ADD_COUNT", payload: 1 }
// { type: "DEC_COUNT", payload: 1 }
// { type: "ADD_TODO",  payload: { title: "Learn Redux", status: false} }

// DISPATCH:
// Always a function.
// dispatch({ type: "ADD_COUNT", payload: 1 })
// dispatch({ type: "ADD_COUNT", payload: 1 })

// Store:
// Anything!
// { count: 0, todos: [] }

// View:
// Wherever you are seeing the UI, console/browser....

// Reducer function:
// Always:
// Store:{ count: 0, todos: [] }
// Action: { type: "ADD_COUNT", payload: 1 }
// WE give this to store

// const reducer = (store, action) => {
//   if (action.type === "ADD_COUNT") {
//     store.count = store.count + action.payload;
//   }

//   if (action.type === "DEC_COUNT") {
//     store.count = store.count - action.payload;
//   }

//   if (action.type === "TOGGLE_THEME") {
//     store.theme = store.theme === "light" ? "dark" : "light";
//   }
// };

/// ------- Reducer always return new state
const reducer = (store, {type, payload})=>{
    switch(type){
        case "ADD_COUNT":
            return {...store, count: store.count + payload}
        default:
            return store;
    }
}

class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;                /// Current State
}
getState(){
    return this.state;
}

dispatch(action){
    this.reducer(this.state, action)
}
}
const initState = {count: 0, todo: []}
const store = new Store(reducer, initState);

console.log(store.getState());

store.dispatch({type: "ADD_COUNT", payload: 10 });

console.log(store.getState())