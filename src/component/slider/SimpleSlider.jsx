import React, { useRef } from "react";
import style from "./slider.module.css";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Fish from "../../img/fish.png";
import Egg from "../../img/egg.png";

export default function SimpleSlider() {
  const pic = [
    {
      img: Fish,
    },
    {
      img: Egg,
    },
    {
      img: Egg,
    },
    {
      img: Egg,
    },
  ];
  const settings = {
    // arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={style.slider}>
      <div className={style.slider_wpapper}>
        {/* <button onCLick={slider?.slickPrev}>
      <BsArrowLeftCircle />
    </button> */}
        <>
          {pic.map((el, i) => (
            <div key={i}>
              <img src={el.img} alt="pic" />
            </div>
          ))}
        </>
        {/* <button>
      <BsArrowRightCircle onCLick={slider?.slickNext} />
    </button> */}
      </div>
    </div>
  );
}
