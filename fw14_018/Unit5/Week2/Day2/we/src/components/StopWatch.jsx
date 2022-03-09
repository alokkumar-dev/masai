import { useEffect, useState } from "react"

export const StopWatch = ()=>{
    const [timer, setTimer]= useState(60)

    useEffect(()=>{
           const id = setInterval(()=>{
            console.log("Interval", timer);
            setTimer((prev)=>{
                if(prev>=1){
                    return prev -1;
                }else{
                    return 0;
                }

            })
    }, 1000);
    return ()=>{
        clearInterval(id);
        console.log("Unmounted Timer");
    }
    }, [])
       
    return <div>
        Timer: {timer}
    </div>
}