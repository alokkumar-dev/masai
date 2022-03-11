import axios from "axios";
import { useState } from "react"
import { ShowFormData } from "./ShowFormData";

export const Forms = () => {
    const [data,setData]= useState([]);
    // console.log(data)
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        age: ""

    });
    console.log(formData.username)

    const handleChange = (e) => {
        console.log(e.target.id, e.target.value);
        const {id,value}= e.target;
        setFormData({
            ...formData,
            [id]: value,
        })

    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/users", formData).then(()=>{
            alert("user created successfully");
            setFormData({
                username: "",
                email: "",
                age: ""
            })
        }).then(()=>{
            getData()
        })
    }
    
    const getData = ()=>{
        axios.get("http://localhost:3001/users").then(res=>{
            
            console.log(res.data)
            setData(res.data);
        })
    }
    // getData()
  
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <h3>SignUp</h3>
                <input type="text" value={formData.username} id="username" onChange={handleChange} placeholder="enter username" />
                <input type="email" value={formData.email} id="email" onChange={handleChange} placeholder="enter emal" />
                <input type="number" value={formData.age} id="age" onChange={handleChange} placeholder="enter age" />
                <input type="submit"  value={"create user"} />
            </form>
            {
                data.map((e)=>{
                    console.log(e.username);
                    <ShowFormData username={e.username} email={e.email} age={e.age} />
                })
            }
        </>
    )
} 