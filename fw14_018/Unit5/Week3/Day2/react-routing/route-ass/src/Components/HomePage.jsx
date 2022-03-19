import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/products`).then((res) => {
      setProducts([...res.data]);
    });
  }, []);
  
  return (
    <>
      <div 
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        {/* Iterate over products and show links */}
        {products.map((el) => {
          return (
            <Link to={`/products/${el.id}`}>
              {
                <div key={el.id}>
                  <img
                    src={el.img}
                    alt=""
                    style={{ width: "220px", height: "200px" }}
                  />
                  <h3>{el.name}</h3>
                </div>
                /* Show product image and name */
              }
            </Link>
          );
        })}
      </div>
    </>
  );
};
