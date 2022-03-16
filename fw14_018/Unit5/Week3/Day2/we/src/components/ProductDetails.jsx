import { useParams } from "react-router-dom"
import { useEffect } from "react";

export const Productdetails = ()=>{
    const {id} = useParams();
    useEffect(()=>{
        console.log("Mounted");
    },[])
    return(
        <div>
            You are seeing details of product: {id}
        </div>
    )
}