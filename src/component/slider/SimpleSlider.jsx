import React, { useRef } from "react";
import style from "./slider.module.css";
import Carousel, { consts } from "@itseasy21/react-elastic-carousel";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Fish from "../../img/fish.png";
import Egg from "../../img/egg.png";
import Soup from "../../img/1.png";
import Peas from "../../img/2.png";
import Eggs from "../../img/3.png";
import Salat from "../../img/5.png";
import Oliv from "../../img/6.png";

export default function SimpleSlider({ type, onClick, isEdge }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },

    { width: 800, itemsToShow: 2 },
  ];
  const pic = [
    {
      img: Fish,
    },
    {
      img: Egg,
    },
    {
      img: Peas,
    },
    {
      img: Soup,
    },
    {
      img: Salat,
    },
    {
      img: Oliv,
    },
    {
      img: Eggs,
    },
  ];

  function myArrow({ type, onClick, isEdge }) {
    const pointer =
      type === consts.PREV ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />;
    return (
      <button
        className={style.slider_button}
        onClick={onClick}
        disabled={isEdge}
      >
        {pointer}
      </button>
    );
  }
  return (
    <div className={style.slider}>
      <div className={style.slider_wpapper}>
        <Carousel breakPoints={breakPoints} renderArrow={myArrow}>
          {pic.map((el, i) => (
            <div key={i}>
              <img className={style.slider_img} src={el.img} alt="pic" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
