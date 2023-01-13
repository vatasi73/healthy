import React from "react";
import style from "./chefs.module.css";
import Ivan from "../../img/Ivan.png";
import Alenka from "../../img/Alenka.png";
import Vasyka from "../../img/Vasyka.png";
import Burger from "../../img/./smallFood/burger.png";
import Lemon from "../../img/./smallFood/lemon.png";
import Bread from "../../img/./smallFood/bread.png";
import SandvichAssorty from "../../img/./smallFood/sandvichAssorty.png";
import Soup from "../../img/./smallFood/soup.png";
import Salat from "../../img/./smallFood/salat.png";
import Berries from "../../img/./smallFood/berries.png";
import AnotherSalat from "../../img/./smallFood/anotherSalat.png";
import Vegetables from "../../img/./smallFood/vegetables.png";
export default function ChefsCard() {
  const chefsInfo = [
    {
      chefImg: Ivan,
      name: "Gregory Flores",
      master: "Chef of the cold",
      left: Burger,
      center: Lemon,
      right: Bread,
    },
    {
      chefImg: Alenka,
      name: "Annette Cooper",
      master: "Chef of the hot",
      left: SandvichAssorty,
      center: Soup,
      right: Salat,
    },
    {
      chefImg: Vasyka,
      name: "Greg Fox",
      master: "Сhef macro kitchen",
      left: Berries,
      center: AnotherSalat,
      right: Vegetables,
    },
  ];
  return (
    <div className={style.chef_card}>
      {chefsInfo.map((el, i) => (
        <div className={style.chef_card_wrapper} key={i}>
          <div className={style.chef_card_top_wrapper}>
            <div className={style.chef_card_img}>
              <img src={el.chefImg} alt="pic" />
            </div>
            <div>
              <h3 className={style.chef_card_name}>{el.name}</h3>
              <p className={style.chef_card_master}>{el.master}</p>
            </div>
          </div>
          <div className={style.chef_card_bottom_wrapper} key={i}>
            <img src={el.left} alt="pic" />
            <img src={el.center} alt="pic" />
            <img src={el.right} alt="pic" />
          </div>
        </div>
      ))}
    </div>
  );
}
