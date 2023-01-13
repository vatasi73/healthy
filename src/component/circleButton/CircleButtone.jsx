import React from "react";

import style from "./circleButtone.module.css";
export default function CircleButtone({ title }) {
  return (
    <div>
      <button className={style.circleButton}>{title}</button>
    </div>
  );
}
