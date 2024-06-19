import React, { useState } from "react";
import "./ImageSlider.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ImageSlider = () => {
  const [currentImage, setCurrentImages] = useState(2);
  const images = [
    "https://images.unsplash.com/photo-1718791914395-b567ff89be17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718791914390-c52936e09301?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718791914390-cdc5e97e14e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D",
    // "",
    // "C:\biplobReact-beginerImage-Slidersrcassetsmg-5.webp",
  ];
function nextImage(){
    setCurrentImages(currentImage === images.length-1 ? 0 : currentImage+1);
}
  function prevImage(){
    setCurrentImages(currentImage === 0 ? images.length - 1 : currentImage -1);
  }
  return (
    <div className="slider">
      <h1 className="heading">Project 1:Image Slider</h1>
      <div className="main-section">
        <div className="leftarrow" onClick={prevImage}>
          <span>
            <FaArrowLeft />
          </span>
        </div>
        <div className="images">
          {images.map((image,index) => currentImage === index &&(
        
            
              <div key={image} className="slider">
                <img src={image} alt="images" />
              </div>)
            
          )}
        </div>
        <div className="rightarrow" onClick={nextImage}>
          <span>
            {" "}
            <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
