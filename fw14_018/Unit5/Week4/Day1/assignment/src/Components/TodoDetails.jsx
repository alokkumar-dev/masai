import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const TodoDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getTodos = () => {
    axios.get(`http://localhost:8080/todos/${id}`).then((res) => {
    setData([res.data])
    });
  };

  useEffect(()=>{
      getTodos();
  },[])

  return (
    <div>
      <h4>TodoDetails page</h4>
      {
          data.map((e)=>{
              <h4>{e.name}</h4>
          })
      }

    </div>
  );
};
