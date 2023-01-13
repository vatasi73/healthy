import React from "react";
import { BsEyeFill } from "react-icons/bs";
import { IoMdChatboxes } from "react-icons/io";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CircleButtone from "../circleButton/CircleButtone";

import style from "./bigImgCard.module.css";
export default function BigImgCard() {
  return (
    <div className={style.BigImgCard}>
      <div className={style.BigImgCard_button_position}>
        <CircleButtone title={<AiOutlineArrowLeft />} />
      </div>
      <div className={style.BigImgCard_content_position}>
        <div className={style.BigImgCard_meal}>
          <h4 className={style.BigImgCard_meal_title}>BREAKFAST</h4>
        </div>
        <p className={style.BigImgCard_subtitle}>05 Jul 2016</p>
        <h3 className={style.BigImgCard_title}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h3>
        <p className={style.BigImgCard_subtitle}>Jason Keller</p>
        <div className={style.BigImgCard_bottom_content}>
          <BsEyeFill className={style.ico_size} />
          <span className={style.BigImgCard_span}>275</span>
          <IoMdChatboxes className={style.ico_size} />
          <span className={style.BigImgCard_span}>275</span>
        </div>
      </div>
    </div>
  );
}
