import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFillCursorFill } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import style from "./info.module.css";
export default function Info() {
  const info = [
    {
      ico: <AiFillClockCircle />,
      title: "Today 10:00 am - 7:00 pm",
      subtitle: "Working hours",
    },
    {
      ico: <BsFillCursorFill />,
      title: "Velyka Vasylkivska 100",
      subtitle: "Get Directions",
    },
    {
      ico: <MdPhone />,
      title: "+38 (063)833 24 15",
      subtitle: "Call Online",
    },
  ];
  return (
    <div className={style.info_position}>
      {info.map((el, i) => (
        <div className={style.info_wrapper} key={i}>
          <span className={style.ico}>{el.ico}</span>
          <h5 className={style.info_title}>{el.title}</h5>
          <p className={style.info_subtitle}>{el.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
