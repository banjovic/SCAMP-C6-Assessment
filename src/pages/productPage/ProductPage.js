import React, { useState } from "react";
import "./ProductPage.scss";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import uiface from "../../assets/images/44.jpg";
import PictureComponent from "../../component/pictureComponent/PictureComponent";
import ProductDescription from "../../component/productDescription/ProductDescription";

const ProductPage = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => setClick(false);

  return (
    <div className="product-page">
      <nav>
        <div className="product-nav-left">
          <ul className="menu-bar">
            <li onClick={() => handleClick()}>
              <GiHamburgerMenu />
            </li>
          </ul>
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

        {click && (
          <div className={click ? "active" : "nav_menu"}>
            <div className="close" onClick={() => closeMobileMenu()}>
              <GrFormClose style={{backgroundColor: "#e0dcd9", borderRadius: "50%"}}/>
            </div>
            <ul className="mobile-menu-links">
              <li onClick={() => closeMobileMenu()}>Collections</li>
              <li onClick={() => closeMobileMenu()}>Men</li>
              <li onClick={() => closeMobileMenu()}>Women</li>
              <li onClick={() => closeMobileMenu()}>About</li>
              <li onClick={() => closeMobileMenu()}>Contact</li>
            </ul>
          </div>
        )}
      </nav>

      <main>
        <div className="main-div">
          <PictureComponent />
        </div>
        <div className="main-div">
          <ProductDescription />
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
