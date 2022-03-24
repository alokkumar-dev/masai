import { Route, Routes } from "react-router-dom";
import { Navbar } from "./navbar";
import { Todo } from "./Todo";
import { TodoDetails } from "./TodoDetails";

export const RouteBox = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element= {<Todo /> } />
          <Route path="/todos/:id" element= {<TodoDetails /> } />
      </Routes>
    </>
  );
};
