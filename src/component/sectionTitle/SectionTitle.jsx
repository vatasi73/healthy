import React, { useRef } from "react";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import style from "./section.module.css";

export default function SectionTitle({
  title,
  subtitle,
  underline,
  subtitleStyle,
  getStyles = () => null,
}) {
  const elementRef = useRef();
  const isInViewport = useIsInViewport(elementRef);
  return (
    <div
      className={style.section_title_position}
      ref={elementRef}
      style={getStyles(isInViewport)}
    >
      <div>
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
