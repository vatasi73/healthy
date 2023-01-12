import React from "react";
import Button from "../../component/button/Button";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import style from "./dishes.module.css";
export default function Dishes() {
  return (
    <section className={style.section_dishes}>
      <div className={style.section_dishes_title_position}>
        <SectionTitle title={"DISHES"} subtitle={"Dish Of The Day"} />
      </div>
      <div className={style.section_dishes_card_wrapper}>
        <div className={style.section_dishes_card_img}>
          <img src="" alt="" />
        </div>
        <h3 className={style.section_dishes_card_title}>UO</h3>
        <p className={style.section_dishes_card_subtitle}></p>
        <p className={style.section_dishes_card_second_subtitle}></p>
        <div className={style.section_dishes_card_button_list}>
          <button className={style.section_dishes_card_button_star}></button>
          <Button />
        </div>
      </div>
    </section>
  );
}
