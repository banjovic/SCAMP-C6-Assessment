import React, { useState } from "react";
import "./ProductDescription.scss";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaPlus, FaMinus } from "react-icons/fa";

const ProductDescription = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () =>
    counter > 0 ? setCounter(counter - 1) : setCounter(0);

  return (
    <div className="product-description">
      <div className="text-description">
        <span className="company-text">Sneaker Company</span>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer
        </p>
      </div>
      <div className="price-tag">
        <div className="new-price">
          <h2>$125.00</h2>
          <p className="price-percentage">50%</p>
        </div>
        <p className="old-price">$250.00</p>
      </div>
      <div className="button-description">
        <div className="counter-description">
          <FaMinus onClick={decrementCounter} style={{ color: "#b4733d" }} />
          <div className="input-counter">{counter}</div>
          <FaPlus onClick={incrementCounter} style={{ color: "#b4733d" }} />
        </div>
        <button>
          <RiShoppingCart2Line />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
