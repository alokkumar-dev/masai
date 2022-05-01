import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./Redux/action";
export const Todo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todo);
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <button
        onClick={() => {
          dispatch(addTodo(text));
        }}
      >
        Add todo
      </button>
      <div>
        {todos.map((e, i) => (
          <h4 key={i}>{e}</h4>
        ))}
      </div>
    </>
  );
};
