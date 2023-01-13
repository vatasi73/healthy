import React from "react";
import classNames from "classnames";
import style from "./button.module.css";

export default function Button({ title, size }) {
  return (
    <div>
      <button
        className={classNames(
          style.button,
          size === "small" ? style.button_small : style.button_big
        )}
      >
        {title}
      </button>
    </div>
  );
}
