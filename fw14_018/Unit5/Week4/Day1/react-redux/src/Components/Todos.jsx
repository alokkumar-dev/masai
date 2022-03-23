import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/actioin";

export const Todo = () => {
  const [text, setText] = useState("");

  const todos = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        // placeholder="enter something !"
      />
      <button
        onClick={() => {
          dispatch(addTodo(text));

        }}
      >
        Add Todo
      </button>
      {todos.map((e) => (
        <div>{console.log(e)} </div>
      ))}
    </div>
  );
};
