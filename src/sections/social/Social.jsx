import React from "react";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import style from "./social.module.css";
export default function Social() {
  return (
    <div className={style.section_social_title_position}>
      <SectionTitle title={"SOCIAL"} subtitle={"We in Social"} />
    </div>
  );
}
