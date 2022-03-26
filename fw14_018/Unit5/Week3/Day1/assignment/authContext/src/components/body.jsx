import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContextProvider"
import { Form } from "../styles"


export const Body = ({getData})=>{

    const [form, setForm] = useState({})


    const {toggleAuth} = useContext(AuthContext)
    const onChange = (e)=>{
        const {name,value} = e.target
        console.log(e.target.name, e.target.value,"RTGEFRDWEAS")
        setForm({ 
            ...form,
            [name]:value
        })
    }

    const handleSubmit = (data)=>{
        data.preventDefault()
        let body = {
            email:form.email,
            password:form.password

        }
        console.log(body)
fetch(`https://reqres.in/api/login`,{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(body),

})
.then(response => response.text())
  .then(result => logincheck(result))
  .catch(error => console.log('error', error));
    }

    function logincheck(token) {

        setTimeout(() => {
            console.log(token.error)
        if(token !== undefined){
            toggleAuth()
        }else{
            alert("wrong Login data")
        }
        }, 500);
        
        
    }

    const logout = ()=>{
        toggleAuth()
    }

    return <Form onSubmit={handleSubmit}>
        <input type="email" onChange={onChange} placeholder="Email" name="email"/>
        <br/>
        <input type="password" onChange={onChange} placeholder="Password" name="password"/>
        <br/>
        <input type="submit" value="login" onSubmit={handleSubmit}/>
<button onClick={logout}>Logout</button>
    </Form>
}