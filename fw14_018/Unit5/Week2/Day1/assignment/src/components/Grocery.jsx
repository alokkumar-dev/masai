import { useState } from "react"
import { TodoInput } from "./GroceryInput";
import { TodoItem } from "./GroceryList";

export const Todo = ()=>{
    const [todos, setTodos] = useState([]);
   
    const addTodo = (data)=>{    
        setTodos([...todos, data])
    }
   
    return (
        <div>
           <TodoInput addTodo={addTodo}/>
           {
              todos.map((e)=><TodoItem todo={e} />)
           }
        </div>
    )
}