import axios from "axios";
import { useState } from "react"
import { useEffect } from "react";

export const Forms = ()=>{

    const [formData, setFormData] = useState({});
    const [data, setData] = useState([]);


    const handleChange = (e)=>{
        let {id,value, checked,type} = e.target
        value=type==="checkbox" ? checked : value;
        setFormData({
            ...formData, 
            [id]: value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:3001/users", formData).then(()=>{
            alert("User Created Successfully");
            setFormData();
        })
    }
   
    const getFormData = ()=>{
        axios.get("http://localhost:3001/users").then((res)=>{
            setData(res.data);
        })
    }
    useEffect(()=>{
        getFormData();

    },[formData]);

    return (
        <>
        <div>
            <form action="" onSubmit={handleSubmit}>
            <input type="text" id="name" onChange={handleChange}   placeholder="enter your name" /><br />
            <input type="number" id="age" onChange={handleChange} placeholder="enter your age" /><br />
            <input type="text" id="address" onChange={handleChange} placeholder="enter your address" /><br />
                <input type="number" id="salary" onChange={handleChange} placeholder="entre your salary" /><br />

            <select name="" id="department" onChange={handleChange}>
                <option value="">Select</option>
                <option value="IT">IT</option>
                <option value="Civil">Civil</option>
                <option value="Mechnical">Mechnical</option>
                <option value="Eletrical">Electrical</option>
            </select>
            <input type="checkbox" id="married" onChange={handleChange} />
                <input type="submit" value={"Submit"} />

            </form>
        
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Salary</th>
                    <th>Department</th>
                    <th>Marital Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((e)=>{
                        return (
                            <tr key={e.id}>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.address}</td>
                                <td>{e.salary}</td>
                                <td>{e.department}</td>
                                <td>{e.married ? "true" : "false"}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
         </>
       
    )
}
   