import React from "react";
import Button from "../Button/Button";
import Info from "../info/Info";
import "./style.css";
export default function YourFavouriteFood() {
  return (
    <section className="your_favorite_section ">
      <h1>
        <span className="small_weight"> Your </span> Favourite Food
        <br /> <span className="small_weight"> Delivered</span> Hot & Fresh
      </h1>
      <div className="subtitle_wrapper">
        <p className="your_favorie_subtitle">
          HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping &
          marinating, so you can cook a fresh homemade dinner in just 15
          minutes.
        </p>
      </div>
      <div className="your_favorite_button_position">
        <Button title={"Order Now"} styles="button_big" />
      </div>
      <div className="your_favorite_info_postion">
        <Info />
      </div>
    </section>
  );
}
