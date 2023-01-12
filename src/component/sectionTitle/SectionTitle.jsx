import React from "react";
import style from "./section.module.css";
export default function SectionTitle({
  title,
  subtitle,
  underline,
  subtitleStyle,
}) {
  return (
    <div className={style.section_title_position}>
      <div>
        {" "}
        <h2 className={style.section_title}>{title}</h2>
        <h3
          className={
            subtitleStyle === "small"
              ? style.subtitle_small
              : style.section_subtitle
          }
        >
          {subtitle}
        </h3>
      </div>
      {underline === "none" ? "" : <hr className={style.green_underline} />}
    </div>
  );
}
