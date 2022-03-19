import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProductsDetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/products/${id}`).then((res) => {
      setData([res.data]);
      console.log(data);
    });
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        {data.map((e) => {
          return (     
            <div key={e.id}>
              <img src={e.img} alt="" />
              <div className="productDetails" style={{ padding: "20px" }}>
                <div>
                  <h2 className="productName">{e.name}</h2>
                  <h5 className="productPrice">Price : {e.price}</h5>
                </div>
                <h5>Specifications : </h5>
                <div style={{ width: "700px", paddingLeft: "30px" }}>
                  { /* Show Product specification here */}
                  {e.specs}

                </div>
              </div> 
              
               
              
            </div>
          );
          
        })}
      </div>
    </>
  );
};
