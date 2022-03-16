import { Navigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

export const UserDetails = ()=>{
    const [user, setUser]= useState([]);
    const {id}= useParams();
    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
          setUser(res.data.data);
        });
      }, []);

      if(false){    // it is come from contectApi
          return <Navigate to={"/login"} />
      }
    return(
       <div>
        {/* <h2>User of id:{user.id} </h2>
        <h2> User Name: {user.first_name}</h2> */}
     
       User Id:  {user.id} <br />
       User Name:  {user.first_name}

      
       </div> 
    )
}