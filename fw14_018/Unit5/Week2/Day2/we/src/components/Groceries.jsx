import { useEffect, useState } from "react"
import axios from "axios";


export const Groceries = ()=>{
    const [text, setText]= useState("");
    const [groceries, setGeroceries] = useState([]);
    const [page, setPage] = useState(1);
    
    const handleChage = (data)=>{
        setPage(page+data);

    }

    useEffect(()=>{
       getData();
    }, [page]);

    const getData = ()=>{
        axios.get(`http://localhost:3001/groceries?_limit=3&_page=${page}`).then(res =>{
            setGeroceries(res.data);
        })
    }

    return (
        <div>
            <input type="text" onChange={(e)=> setText(e.target.value) }/>
            <button onClick={()=>{
               fetch("http://localhost:3001/groceries", {
                   method: "POST",
                   body:JSON.stringify({
                       title:text,
                       pruchased:false
                   }),
                   headers:{
                       "content-type": "application/json"
                   }
               }).then(()=>{
                   getData();
               })
            }}>
                Save Grocery
            </button>
            {
                groceries.map((e)=>(
                    <div key={e.id} >{e.title}</div>
                    )
                    )}
                    <button onClick={()=>{
                        if(page>=1){
                            handleChage(-1)
                        }
                    }} >Prev</button>
                    <button onClick={()=>{
                            handleChage(1);                      
                    }} >Next</button>
        </div>
    )   
}