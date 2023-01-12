import React from "react";
import Button from "../../component/button/Button";
import Info from "../../component/info/Info";
import style from "./favorite.module.css";
export default function YourFavouriteFood() {
  return (
    <section className={style.your_favorite_section}>
      <h1>
        <span className={style.small_weight}> Your </span> Favourite Food
        <br /> <span className={style.small_weight}> Delivered</span> Hot &
        Fresh
      </h1>
      <div className={style.subtitle_wrapper}>
        <p className={style.your_favorie_subtitle}>
          HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping &
          marinating, so you can cook a fresh homemade dinner in just 15
          minutes.
        </p>
      </div>
      <div className={style.your_favorite_button_position}>
        <Button title={"Order Now"} />
      </div>
      <div className="your_favorite_info_postion">
        <Info />
      </div>
    </section>
  );
}
