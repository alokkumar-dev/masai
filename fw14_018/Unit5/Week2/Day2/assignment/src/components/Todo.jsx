import axios from "axios";
import { useEffect, useState } from "react"
import { TodoInput } from "./TodoInput"
import { TodoItem } from "./TodoItem";

export const Todo = ()=>{
    const [text, setText]= useState([]);
    const [page, setPage]= useState(1);

    const handleChange = (data)=>{
        setPage(page + data);
    }

    useEffect(()=>{
        getData();
    }, [page]);

    const getData = ()=>{
        axios.get(`http://localhost:3001/todoItems?_limit=3&_page=${page}`).then(res=>{
            setText(res.data);
        })
        
    }
    const handleDelete = (id)=>{
        axios.delete(`http://localhost:3001/todoItems/${id}`).then(()=>{
            setText(text.filter(e=>e.id!==id))
        })
    }

    const addTodo = (data)=>{
        fetch("http://localhost:3001/todoItems",{
            method: "POST",
            body: JSON.stringify({
                title:data,
                purchased:false
            }),
            headers: {
                "content-type": "application/json"
            }
            
        }).then(()=>{
            getData();
        })
      
    }
    
    return (
        <div>Welcome Todo
            <TodoInput addTodo={addTodo} />
            {
                text.map((e)=>
               ( 
               <TodoItem title={e.title} id={e.id} key={e.id} handleDelete={handleDelete} />
               ))
            }
            <button onClick={()=>{
                if(page>=1){
                    handleChange(-1);
                }
            }}>Prev</button>
            <button onClick={()=>{
                handleChange(1);
            }}>Next</button>
            
        </div>

    )
}