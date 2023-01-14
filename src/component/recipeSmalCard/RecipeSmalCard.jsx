import React from "react";
import { BsEyeFill } from "react-icons/bs";
import { IoMdChatboxes } from "react-icons/io";
import Chiken from "../../img/chiken.jpg";
import Sweets from "../../img/sweets.jpg";
import Dinner from "../../img/dinner.png";
import style from "./recipeSmalCard.module.css";
import classNames from "classnames";

export default function RecipeSmalCard() {
  const recipeInfo = [
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      meal: "LUNCH",
      background: Chiken,
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      meal: "DINNER",
      background: Dinner,
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      meal: "SWEETS",
      background: Sweets,
    },
  ];

  return (
    <div className={style.RecipeSmallCard}>
      {recipeInfo.map((el, i) => (
        <div
          className={style.RecipeSmallCard_wrapper}
          // style={{
          //   background: `url(${el.background})`,
          // }}
        >
          <div>
            <h3 className={style.RecipeSmallCard_title}>{el.title}</h3>
            <div className={style.RecipeSmallCard_bottom_content_wrapper}>
              <div className={style.RecipeSmallCard_bottom_content_left}>
                <h4 className={style.RecipeSmallCard_meal}>{el.meal}</h4>
                <p className={style.RecipeSmallCard_date}>07 Jan 2016</p>
              </div>
              <div className={style.RecipeSmallCard_bottom_content_right}>
                <BsEyeFill className={style.ico_size} />
                <span className={style.RecipeSmallCard_span}>275</span>
                <IoMdChatboxes className={style.ico_size} />
                <span className={style.RecipeSmallCard_span}>12</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
