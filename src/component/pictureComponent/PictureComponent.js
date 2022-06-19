import React from "react";
import "./PictureComponent.scss";
import slideOne from "../../assets/images/img.jpeg";
import slideTwo from "../../assets/images/imgg.jpeg";
import slideThree from "../../assets/images/imggg.jpeg";
import slideFour from "../../assets/images/imgggg.jpeg";
import Slider from "react-slick";

const PictureComponent = () => {
  const images = [slideOne, slideTwo, slideThree, slideFour];
  const settings = {
    customPaging: function (i) {
      return (
        <div className="picture-main">
          <img src={images[i]} alt="product-img" />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="picture-component">
      <Slider {...settings}>
        <div className="picture-thumbnail">
          <img src={slideOne} alt="slideOne" />
        </div>
        <div>
          <img src={slideTwo} alt="slideTwo" />
        </div>
        <div>
          <img src={slideThree} alt="slideThree" />
        </div>
        <div>
          <img src={slideFour} alt="slideFour" />
        </div>
      </Slider>
    </div>
  );
};

export default PictureComponent;
