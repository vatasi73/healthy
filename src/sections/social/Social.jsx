import React from "react";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import SocialCard from "../../component/socialCard/SocialCard";
import { getFadeStyles } from "../../styles/animation";
import style from "./social.module.css";
export default function Social() {
  return (
    <section className={style.section_social} id="contacts">
      <div className={style.section_social_title_position}>
        <SectionTitle
          title={"SOCIAL"}
          subtitle={"We in Social"}
          getStyles={getFadeStyles}
        />
      </div>
      <SocialCard />
    </section>
  );
}
