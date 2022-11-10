import React from "react";
import ImgCup from "../assets/image 28.png";
import ImgFace from "../assets/image 30.png";
import ImgDance from "../assets/image 26.png";
import ImgFood from "../assets/image 27.png";
import ImgGuitar from "../assets/image 29.png";
import ImgPiano from "../assets/image 22.png";
import ImgSwim from "../assets/image 23.png";
import ImgYoga from "../assets/image 25.png";
import ImgSing from "../assets/image 24.png";

export default function () {
  return (
    <main className="landing-page">
      <div className="image--plate">
        <div className="column1">
          <img src={ImgCup} alt="" className="landing--image" id="img1" />
        </div>
        <div className="column2">
          <img src={ImgFace} alt="" className="landing--image" id="img2" />
          <img src={ImgDance} alt="" className="landing--image" id="img3" />
        </div>
        <div className="column3">
          <img src={ImgFood} alt="" className="landing--image" id="img4" />
          <img src={ImgGuitar} alt="" className="landing--image" id="img5" />
        </div>
        <div className="column4">
          <img src={ImgPiano} alt="" className="landing--image" id="img6" />
          <img src={ImgSwim} alt="" className="landing--image" id="img6" />
        </div>
        <div className="column5">
          <img src={ImgYoga} alt="" className="landing--image" id="img7" />
          <img src={ImgSing} alt="" className="landing--image" id="img8" />
        </div>
      </div>
    </main>
  );
}
