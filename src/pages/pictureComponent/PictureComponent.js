import React, { useState } from "react";
import "./PictureComponent.scss";
import slideOne from "../../assets/images/maksim-larin-1vy2QcZd5FU-unsplash.jpeg";
import slideTwo from "../../assets/images/maksim-larin-Ai356rggKvw-unsplash.jpeg";
import slideThree from "../../assets/images/maksim-larin-LtB12xWnkpw-unsplash.jpeg";
import slideFour from "../../assets/images/maksim-larin-NOpsC3nWTzY-unsplash.jpeg";

const PictureComponent = () => {
  const [pictureSlideOne, setPictureSlideOne] = useState(true);
  const [pictureSlideTwo, setPictureSlideTwo] = useState(false);
  const [pictureSlideThree, setPictureSlideThree] = useState(false);
  const [pictureSlideFour, setPictureSlideFour] = useState(false);

  const handlePictureSlideOne = () => {
    setPictureSlideOne(true);
    setPictureSlideTwo(false);
    setPictureSlideThree(false);
    setPictureSlideFour(false);
  };

  const handlePictureSlideTwo = () => {
    setPictureSlideOne(false);
    setPictureSlideTwo(true);
    setPictureSlideThree(false);
    setPictureSlideFour(false);
  };

  const handlePictureSlideThree = () => {
    setPictureSlideOne(false);
    setPictureSlideTwo(false);
    setPictureSlideThree(true);
    setPictureSlideFour(false);
  };

  const handlePictureSlideFour = () => {
    setPictureSlideOne(false);
    setPictureSlideTwo(false);
    setPictureSlideThree(false);
    setPictureSlideFour(true);
  };

  return (
    <div className="picture-component">
      <div className="picture-tab">
        <ul>
          <img
            src={slideOne}
            alt="slideOne"
            onClick={() => handlePictureSlideOne()}
            className={pictureSlideOne ? "active" : ""}
          />
          <img
            src={slideTwo}
            alt="slideTwo"
            onClick={() => handlePictureSlideTwo()}
            className={pictureSlideTwo ? "active" : ""}
          />
          <img
            src={slideThree}
            alt="slideThree"
            onClick={() => handlePictureSlideThree()}
            className={pictureSlideThree ? "active" : ""}
          />
          <img
            src={slideFour}
            alt="slideFour"
            onClick={() => handlePictureSlideFour()}
            className={pictureSlideFour ? "active" : ""}
          />
        </ul>
      </div>
      <div className="picture-tab-below">
        {pictureSlideOne && (
          <div className="picture-slides">
            {/* <img src={slideOne} alt="slideOne" /> */}
          </div>
        )}
        {pictureSlideTwo && (
          <div className="picture-slides">
            {/* <img src={slideTwo} alt="slideTwo" /> */}
          </div>
        )}
        {pictureSlideThree && (
          <div className="picture-slides">
            {/* <img src={slideThree} alt="slideThree" /> */}
          </div>
        )}
        {pictureSlideFour && (
          <div className="picture-slides">
            {/* <img src={slideFour} alt="slideFour" /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default PictureComponent;
