import { useEffect, useState } from "react"

export const StopWatch =()=>{
    const [timer, seTimer]= useState(1);
    const [end, setEndTimer]= useState(60);

    useEffect(()=>{
      const id =  setInterval(()=>{
            seTimer((prev)=>{
                if(prev<end){
                    return prev +1;
                }
                clearInterval(id);
                return end;
            });
        },1000);
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