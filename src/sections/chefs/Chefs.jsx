import React from "react";
import ChefsCard from "../../component/chefsCard/ChefsCard";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import style from "./chefs.module.css";

export default function Chefs() {
  return (
    <section className={style.section_chefs}>
      <SectionTitle title={"CHEFS"} subtitle={"This Month's Chefs"} />
      <ChefsCard />
    </section>
  );
}
