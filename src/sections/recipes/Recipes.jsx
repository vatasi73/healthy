import React from "react";
import BigImgCard from "../../component/bigImgCard/BigImgCard";
import RecipeSmalCard from "../../component/recipeSmalCard/RecipeSmalCard";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import { getFadeRightStyles } from "../../styles/animation";
import style from "./recipes.module.css";
export default function Recipes() {
  return (
    <section className={style.section_recipes} id="recipes">
      <div className={style.section_recipes_title_position}>
        <SectionTitle
          title={"RECIPES"}
          subtitle={"Recipes From Our Chefs"}
          getStyles={getFadeRightStyles}
        />
      </div>
      <div className={style.section_recipes_content_wrapper}>
        <BigImgCard />
        <RecipeSmalCard />
      </div>
    </section>
  );
}
