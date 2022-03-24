import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo } from "../Redux/TodoAction";
import "../App.css"
export const Todo = () => {
  const [text, setText] = useState("");
  const { todo } = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos();
  }, []);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const addTodos = () => {
    axios
      .post("http://localhost:8080/todos", {
        name: text,
        status: false,
      })
      .then(() => {
        getTodos();
      });
  };

  const getTodos = () => {
    axios.get(`http://localhost:8080/todos`).then(({ data }) => {
      dispatch(addTodo(data));
    });
  };

  return (
    <div className="mainDiv">
      <div className="inputSide">
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          placeholder="enter taskname." required
          onChange={handleChange}
        />
        <br />
        <button
          onClick={() => {
            addTodos();
          }}
        >
          Add Task
        </button>
      </div>
      <div className="displayData">
        {todo.map((e) => (
          
          <Link to={`/todos/${e.id}`} className="detailsLinks" >{e.name}</Link>
        ))}
      </div>
    </div>
  );
};
