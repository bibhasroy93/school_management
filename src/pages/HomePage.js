import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://i.ibb.co/prtKnkv/slider1.jpg",
    //caption: 'Slide my1'
  },
  {
    url: "https://i.ibb.co/2hdkjpw/slider2.jpg",
    //caption: 'Slide 2'
  },
  {
    url: "https://i.ibb.co/tKwCWrb/slider3.jpg",
    //caption: 'Slide 3'
  },
];
const HomePage = () => {
  return <div>
    <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
  </div>;
};

export default HomePage;
