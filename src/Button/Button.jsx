import React from "react";
import "./style.css";
export default function Button({ title, styles }) {
  return (
    <div>
      <button className={styles}>{title}</button>
    </div>
  );
}
