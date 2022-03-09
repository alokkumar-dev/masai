import { useState } from "react"

export const TodoInput = ({addTodo})=>{
    const [text, setText] = useState();
    
    

    return (
        <div>
            
            <input type="text" placeholder="enter text." onChange={(e)=>{
                setText(e.target.value);
                }} />
            <button className="TaskBtn" onClick={()=>{
                addTodo(text);
            }}>Save

            </button>
        </div>
    )
}