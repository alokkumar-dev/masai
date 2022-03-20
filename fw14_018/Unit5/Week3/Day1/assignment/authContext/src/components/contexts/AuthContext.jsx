import { createContext } from "react"
import { useState } from "react";

// 1 Creater
export const AuthContext = createContext();


//2 Provider
export const AuthContextProvider = ({children})=>{
    const [isAuth, setisAuth]= useState(true);
    const [toggleAuth, setToggleAuth]= useState();

    return(

        <AuthContext.Provider value={[{isAuth,setisAuth},{toggleAuth,setToggleAuth}]}>{children}</AuthContext.Provider>
    )
}
