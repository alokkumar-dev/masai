import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const Button = () => {
  const { handleChange } = useContext(CartContext);
  return (
    <>
      <button
        onClick={() => {
          handleChange(1);
        }}
      >
        Add to cart
      </button>
      <button
        onClick={() => {
          handleChange(-1);
        }}
      >
        remove to cart
      </button>
    </>
  );
};
