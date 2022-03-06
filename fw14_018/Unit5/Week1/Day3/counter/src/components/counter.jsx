import { useState } from "react"
export function Counter(props) {
    const [counter, setCounter] = useState(0);
    const handleChange = (value) => {
        if(value==1 || value ==-1){
            setCounter(counter + value)
        }
        if(value == 2){
            setCounter(counter*value);
        }
        if(value == null){
            setCounter(0);
        }
    }
    return (
        <div>
            <h1>Counter: <span>{counter}</span></h1>
            <button onClick={() => { handleChange(1) }}>Inc 1</button>

            <button onClick={() => {
                if(counter>=1){

                    handleChange(-1) 
                }
                 }}>Dec 1
           </button>
           <button onClick={()=>{handleChange(2)}}>Double</button>
           <button onClick={()=>{handleChange()}}>Clear all</button>

        </div>
    )
}

