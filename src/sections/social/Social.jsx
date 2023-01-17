import React from "react";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import SocialCard from "../../component/socialCard/SocialCard";
import style from "./social.module.css";
export default function Social() {
  return (
    <section className={style.section_social}>
      <div className={style.section_social_title_position}>
        <SectionTitle title={"SOCIAL"} subtitle={"We in Social"} />
        <SocialCard />
      </div>
    </section>
  );
}
