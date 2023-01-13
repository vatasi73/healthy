import React from "react";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import TextCard from "../../component/textCard/TextCard";
import style from "./work.module.css";
export default function Work() {
  return (
    <section className={style.section_work}>
      <div className={style.section_work_title_position}>
        <SectionTitle title={"WORK"} subtitle={"How It Works"} />
      </div>
      <TextCard />
    </section>
  );
}
