import React, { useState } from "react";
import "./ProductDescription.scss";
import { RiShoppingCart2Line } from "react-icons/ri";

const ProductDescription = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () =>
    counter > 0 ? setCounter(counter - 1) : setCounter(0);

  return (
    <div>
      <div>
        <span>Sneaker Company</span>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are ou perfect casual wear companion.
          Featuring a durable outer sole, they'll everything the weather can
          offer
        </p>
      </div>
      <div>
        <button><RiShoppingCart2Line /> Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDescription;
