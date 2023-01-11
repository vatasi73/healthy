import React from "react";
import "./style.css";
export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="section_title_position">
      <h2 className="section_title">{title}</h2>
      <h3 className="section_subtitle">{subtitle}</h3>
    </div>
  );
}
