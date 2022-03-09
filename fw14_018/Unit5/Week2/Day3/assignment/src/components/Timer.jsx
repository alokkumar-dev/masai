import { useEffect, useState } from "react"

export const StopWatch =()=>{
    const [timer, seTimer]= useState(2);
    const [end, setEndTimer]= useState(20);
    console.log(end)

    useEffect(()=>{
      const id =  setInterval(()=>{
            seTimer((prev)=>{
                if(prev<end){
                    return prev +1;
                }
                return end;
            });
        },300);
        return ()=>{
                   clearInterval(id);
                   console.log("Unmounted Timer");
        }
    },[]);

    return (                                
        <div>
            <span>Timer: {timer}</span>
        </div>

    )
}