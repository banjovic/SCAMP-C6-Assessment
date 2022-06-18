import React from "react";
import "./ProductPage.scss";
import { RiShoppingCart2Line } from "react-icons/ri";
import uiface from "../../assets/images/44.jpg";
import PictureComponent from "../pictureComponent/PictureComponent";
import ProductDescription from "../productDescription/ProductDescription";

const ProductPage = () => {
  return (
    <div className="product-page">
      <nav>
        <div className="product-nav-left">
          <h1>sneakers</h1>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="product-nav-right">
          <RiShoppingCart2Line style={{ fontSize: "25px", color: "#999999" }} />
          <img src={uiface} alt="uiface" />
        </div>
      </nav>

      <main>
        <PictureComponent />
        <ProductDescription />
      </main>
    </div>
  );
};

export default ProductPage;
