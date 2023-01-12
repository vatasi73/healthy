import React from "react";
import classNames from "classnames";
import style from "./button.module.css";

export default function Button({ title }) {
  return (
    <div>
      <button className={classNames(style.button, style.button_big)}>
        {title}
      </button>
    </div>
  );
}
