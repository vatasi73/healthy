import React from "react";
import { useRef } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

import useIsInViewportTop from "../../hooks/useIsInViewportTop";
import { getFadeStyles } from "../../styles/animation";
import style from "./buttonTotop.module.css";
export default function ButtonToTop() {
  const elementRef = useRef();
  const isInViewportTop = useIsInViewportTop(elementRef);
  return (
    <div ref={elementRef} style={getFadeStyles(isInViewportTop)}>
      <button className={style.button_to_top}>
        <a className={style.to_top_arrow} href="#menu">
          <AiOutlineArrowUp />
        </a>
      </button>
    </div>
  );
}
