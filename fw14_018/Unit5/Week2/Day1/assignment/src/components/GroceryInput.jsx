import { useState } from "react"

export const TodoInput = ({addTodo})=>{
    const [inputData, setInputData]= useState()
    // console.log({inputData})
    return (
        <div>
            <input type="text" placeholder="Add items.." 
            onChange={(e)=>{
                
                setInputData(e.target.value)}
                } />
            <button onClick={()=>{
                addTodo(inputData);
         
            }}>Add Item
            </button>
        </div>
    )
}