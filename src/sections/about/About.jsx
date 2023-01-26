import React, { useRef } from "react";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import SimpleSlider from "../../component/slider/SimpleSlider";
import { getFadeRightStyles } from "../../styles/animation";

import style from "./about.module.css";

export default function About() {
  return (
    <section className={style.about_section}>
      <div className={style.about_wrapper}>
        <div className={style.section_about_title_position}>
          <SectionTitle
            title={"ABOUT"}
            subtitle={"The Basics Of Healthy Food"}
            underline={"none"}
            subtitleStyle={"small"}
            getStyles={getFadeRightStyles}
          />
        </div>
        <p className={style.about_subtitle}>
          In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea
          aliquip aliquip consectetur <br /> voluptate est. Eu minim dolore
          laboris enim mollit voluptate irure esse aliquip.
        </p>
        <SimpleSlider />
      </div>
    </section>
  );
}
