import axios from "axios"
import { useEffect } from "react"

export const Users = ()=>{
    useEffect(()=>{
        axios.get(`https://reqres.in/api/users`).then(({data})=>{
            console.log("Users",data);
        })
    },[])
    return(
        <div></div>
    )
}