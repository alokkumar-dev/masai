import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContextProvider"

export const Navbar =  ()=>{

    const {auth} = useContext(AuthContext)
    return<div>
        
        login:-
        
        {auth}
    </div>
}