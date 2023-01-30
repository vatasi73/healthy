import React from "react";
import ChefsCard from "../../component/chefsCard/ChefsCard";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import { getFadeRightStyles } from "../../styles/animation";
import style from "./chefs.module.css";

export default function Chefs() {
  return (
    <section className={style.section_chefs} id="chefs">
      <SectionTitle
        title={"CHEFS"}
        subtitle={"This Month's Chefs"}
        getStyles={getFadeRightStyles}
      />
      <ChefsCard />
    </section>
  );
}
