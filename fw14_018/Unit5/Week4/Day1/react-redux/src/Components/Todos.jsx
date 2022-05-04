import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/todo/action";

export const Todo = () => {
  const [text, setText] = useState("");

  const { todo } = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodo();
  }, []);

  const addTodos = () => {
    axios
      .post(`http://localhost:8080/todo`, {
        title: text,
        status: false,
      })
      .then(() => getTodo());
  };
 

  const getTodo = () => {
    axios.get("http://localhost:8080/todo").then(({ data }) => {
      dispatch(addTodo(data));
    })
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        // placeholder="enter something !"
      />
      <button
        onClick={() => {
          addTodos();
        }}
      >
        Add Todo
      </button>
      {todo.map((e, i) => (
        <div key={i}>{e.title} </div>
      ))}
    </div>
  );
};
