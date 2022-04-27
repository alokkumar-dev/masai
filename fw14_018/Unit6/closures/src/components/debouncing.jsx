import axios from "axios";
import { useEffect, useState } from "react";

export const Debouncing = () => {
  const [data, setData] = useState([]);
    let wait;
  const getData = () => {
    axios.get(`https://www.omdbapi.com/?apikey=199dc310&s=avengers`).then((res) => {
      setData([...res.data.Search]);
    });
  };
  const searchData = () => {
    let input = document.getElementById("inputBox").value;
    axios.get(`https://www.omdbapi.com/?apikey=199dc310&s=${input}`).then((res) => {
      setData([...res.data.Search]);
    });
  };

  useEffect(()=>{
    getData();
  }, [])
 let debounce = (funct, delay)=>{
     if(wait){
         clearTimeout(wait)
     }
     wait = setTimeout(()=>{
         funct()
     }, delay)
 }

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        id="inputBox"
        onInput={() => debounce(searchData, 1000)}
      />
        <div className="container">
           {
            data.map((el,i)=>(

                <div className="dataCart">
                    <img src={el.Poster} alt="" />
                    <h3>{el.Title}</h3>
                </div>
            ))
        } 
        </div>
        
    </>
  );
};
