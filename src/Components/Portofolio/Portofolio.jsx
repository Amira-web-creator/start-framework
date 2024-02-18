import React, { useState } from "react";
import "./Portofolio.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const image4 = image1;
const image5 = image2;
const image6 = image3;

const images = [image1, image2, image3, image4, image5, image6];

export default function Portofolio() {
  return (
    <div className=" d-flex  flex-column text-dark portofolio" >
      <div className="container">
        <h1 className="text-center fw-bolder mt-5 text-uppercase" Style="color:rgb(44, 62, 80)">
          Portofolio COMPONENT
        </h1>
        <div className="text-center d-flex w-full justify-content-center ">
          <div
            className="bg mt-2 mx-2" 
            Style="width: 80px; height:4px ; background-color: rgb(44, 62, 80)"
          ></div>
          <i className="fa fa-star" Style="color:rgb(44, 62, 80)"></i>

          <div
            className="mt-2 mx-2"
            Style="width: 80px; height:4px ; background-color: rgb(44, 62, 80)" 
          ></div>
        </div>

        <div className="container-fluid mb-5">
          <div className="w-100  ">
            <ImageGallery />
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageGallery() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  //looping through our images array to create img elements
  const imageCards = images.map((image) => (
    <div className="col-lg-4">
      <div className="w-100 overflow-hidden position-relative">
        <img
          className="image-card rounded-4 w-100"
          src={image}
        />
        <div
          className="hoverbg position-absolute w-100 h-100 text-center rounded-3 top-0 "
          Style="background-color: #1abc9c;"
          onClick={() => showImage(image)}

        >
          <div className="position-absolute icon ">
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
      </div>
    </div>
  ));

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <>
      <div className="mt-5">
        <div className="d-flex g-5 row">{imageCards}</div>
      </div>

      {lightboxDisplay ? (
        <div id="lightbox" onClick={hideLightBox}>
          <button onClick={showPrev}>⭠</button>
          <img id="lightbox-img" src={imageToShow}></img>
          <button onClick={showNext}>⭢</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
