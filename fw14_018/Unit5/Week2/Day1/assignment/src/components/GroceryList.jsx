import { useState } from "react";

export const TodoItem = ({todo})=>{
    const [status, setStatus]= useState();
    return <div>
        <span> {todo}</span>
       {/* <span>-Not done </span>
       <button>Change Status</button> */}
    </div>
};