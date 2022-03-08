import { useState } from "react";

export const TodoItem = ({todo})=>{
    const [status, setStatus]= useState();
    
    return <div>
        <span> {todo}</span> {" : "}
      
       <button>Delete</button> 
    </div>
};