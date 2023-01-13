import React from "react";
import Button from "../button/Button";
import style from "./foodCard.module.css";
import { TiArrowForward } from "react-icons/ti";
import Soup from "../../img/1.png";
import Peas from "../../img/2.png";
import Egg from "../../img/3.png";
import Fish from "../../img/4.png";
import Salat from "../../img/5.png";
import Oliv from "../../img/6.png";
import StarButton from "../starButton/StarButton";
import CircleButtone from "../circleButton/CircleButtone";
export default function FoodCard() {
  const cardInfo = [
    {
      img: Soup,
      title: "Featured Meal",
      subtitle: "Served with french fries + drink",
      secondSubtitle:
        "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
      value: 3.5,
      likes: 14,
    },
    {
      img: Peas,
      title: "Featured Meal",
      subtitle: "Served with french fries + drink",
      secondSubtitle:
        "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
      value: 5,
      likes: 7,
    },
    {
      img: Egg,
      title: "Featured Meal",
      subtitle: "Served with french fries + drink",
      secondSubtitle:
        "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
      value: 3.5,
      likes: 15,
    },
    {
      img: Fish,
      title: "Featured Meal",
      subtitle: "Served with french fries + drink",
      secondSubtitle:
        "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
      value: 4.5,
      likes: 24,
    },
    {
      img: Salat,
      title: "Featured Meal",
      subtitle: "Served with french fries + drink",
      secondSubtitle:
        "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
      value: 3,
      likes: 8,
    },
    {
      img: Oliv,
      title: "Featured Meal",
      subtitle: "Served with french fries + drink",
      secondSubtitle:
        "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
      value: 4.5,
      likes: 10,
    },
  ];
  return (
    <div className={style.foodCard}>
      {cardInfo.map((el, i) => (
        <div className={style.foodCard_wrapper} key={i}>
          <div className={style.foodCard_card_img}>
            <CircleButtone title={<TiArrowForward />} />
            <img src={el.img} alt="pic" />
          </div>
          <div className={style.foodCard_info_wpapper}>
            <h3 className={style.foodCard_title}>{el.title}</h3>
            <p className={style.foodCard_subtitle}>{el.subtitle}</p>
            <p className={style.foodCard_second_subtitle}>
              {el.secondSubtitle}
            </p>
            <div className={style.foodCard_button_list}>
              <div className={style.foodCard_button_list_left}>
                <StarButton value={el.value} />
                <span className={style.foodCard_button_list_left_user_like}>
                  {el.likes}
                </span>
              </div>
              <Button title={"ORDER"} size={"small"} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
