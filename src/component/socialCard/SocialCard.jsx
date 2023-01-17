import React from "react";
import style from "./social.module.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Button from "../button/Button";

export default function SocialCard() {
  const socialInfo = [
    {
      Ico: <AiOutlineTwitter />,
      name: "Twitter",
      date: "24 Jun at 16:20 pm",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing",
      author: "@DennisFerguson",
    },
    {
      Ico: <AiOutlineInstagram />,
      name: "Instagram",
      date: "24 Jun at 16:20 pm",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing",
      author: "@DennisFerguson",
    },
    {
      Ico: <FaFacebookF />,
      name: "Facebook",
      date: "26 Jun at 16:20 pm",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing  Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing  Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing  ",
      author: "@DennisFerguson",
    },
  ];
  return (
    <div className={style.SocialCard}>
      {socialInfo.map((el, i) => (
        <div className={style.SocialCard_wrapper}>
          <div className={style.SocialCard_top}>
            <div>
              <div className={style.socialCard_ico_wrapper}>
                <span className={style.SocialCard_ico}>{el.Ico}</span>
                <span className={style.SocialCard_socialName}>{el.name}</span>
              </div>
              <hr className={style.SocialCard_underline} />
            </div>
            <div className={style.SocialCard_button_position}>
              {" "}
              <Button title={"FOLLOW US"} size={"small"} />
            </div>
          </div>
          <div className={style.SocialCard_bottom}>
            <p className={style.SocialCard_date}>{el.date}</p>
            <p className={style.SocialCard_subtitle}>{el.subtitle}</p>
            <p className={style.SocialCard_author}>{el.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
