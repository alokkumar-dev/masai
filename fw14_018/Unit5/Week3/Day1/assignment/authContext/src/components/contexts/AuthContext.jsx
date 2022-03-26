import { createContext, useState } from "react";

export const AuthContext = createContext({auth:"",toggleAuth:()=>{} })

export const AuthContextProvider = ({children})=>{
    const [auth,setAuth] = useState("no")

    const toggleAuth = ()=>{
        setAuth(auth === "no" ? "yes":"no")
    }

    return<AuthContext.Provider value={{auth,toggleAuth}}>
{children}
    </AuthContext.Provider>
}