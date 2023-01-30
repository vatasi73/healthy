import React from "react";
import FoodCard from "../../component/foodCard/FoodCard";

import SectionTitle from "../../component/sectionTitle/SectionTitle";
import { getFadeRightStyles } from "../../styles/animation";
import style from "./dishes.module.css";
export default function Dishes() {
  return (
    <section className={style.section_dishes}>
      <div className={style.section_dishes_title_position}>
        <SectionTitle
          title={"DISHES"}
          subtitle={"Dish Of The Day"}
          getStyles={getFadeRightStyles}
        />
      </div>
      <FoodCard />
    </section>
  );
}
