import { useNavigate } from "react-router-dom"

export const Login =()=>{
    const navigate = useNavigate();
    return(
        <div>
            <input type="text" placeholder="Enter username" />
            <input type="text" placeholder="Enter Password" />
            <button onClick={()=>{
                // auth etc.
                navigate("/");
            }}>Login</button>
        </div>
    )
}