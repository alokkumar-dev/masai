import React from "react"
import { useState } from "react"
export function Items(){
    const [countBook, setBooks]= useState(13);
    const [countPens, setPens]= useState(10);
    const [countNotebooks, setNotebooks]= useState(44);
    const [countInkpens, setInkpens]= useState(78);

    const countBooksHandle = (value)=>{
        setBooks(countBook+value);
    }
    const countPensHandle = (value)=>{
        setPens(countPens+value);
    }
    const countNotebooksHandle = (value)=>{
        setNotebooks(countNotebooks+value);

    }
    const countInkpensHandle = (value)=>{
        setInkpens(countInkpens+value);

    }

    return (
        <div className="items">
           <span>Books: </span>
           <span className="totalBooks">{countBook}</span>
           {" "}
           <button className="addBook" onClick={()=>{countBooksHandle(1)}}>+</button>
           <button className="remBook" onClick={()=>{
               if(countBook>=1){
                countBooksHandle(-1)
               }
           }}>
               -
           </button>
            <br/>
           <span>Pens: </span>
           <span className="totalPens">{countPens}</span>
           {" "}
           <button className="addPen" onClick={()=>{countPensHandle(1)}}>+</button>
           <button className="remPen" onClick={()=>{
               if(countPens>=1){
                countPensHandle(-1)
               }
           }}>
               -
           </button>
           <br/>
           <span>Notebooks: </span>
           <span className="totalNotebooks">{countNotebooks}</span>
           
           {" "}
           <button className="addNotebook" onClick={()=>{countNotebooksHandle(1)}}>+</button>
           <button className="remNotebook" onClick={()=>{
               if(countNotebooks>=1){
                countNotebooksHandle(-1)
               }
           }}>
               -
           </button>
           <br/>
           <span>Inkpens: </span>
           <span className="totalInkpens">{countInkpens}</span>
           {" "}
           <button className="addInkpen" onClick={()=>{countInkpensHandle(1)}}>+</button>
           <button className="remInkpen" onClick={()=>{
               if(countInkpens>=1){
                countInkpensHandle(-1)
               }
           }}>
               -
           </button>
           <div className="total">total: {countBook+countPens+countNotebooks+countInkpens}</div>

        </div>
    )
}