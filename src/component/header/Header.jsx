import React from "react";
import { ReactComponent as Logo } from "../../img/Logo.svg";
import { ReactComponent as LogoTitle } from "../../img/HEALTHY SWITCHER.svg";
import style from "./header.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import classNames from "classnames";

export default function Header() {
  const [toggle, setIsToggle] = useState(false);
  return (
    <header className={style.header} id="menu">
      <div className={style.header_wrapper}>
        <div className={style.logo_wrapper}>
          <a href="/">
            <Logo className={style.logo} />
            <LogoTitle />
          </a>
        </div>

        <nav>
          <ul
            onClick={() => setIsToggle(!toggle)}
            className={
              toggle
                ? [style.header_ul, style.active].join(" ")
                : [style.header_ul]
            }
          >
            <li className={style.nav_item}>
              <a href="#menu" className={style.nav_item_link}>
                Menu
              </a>
            </li>
            <li className={style.nav_item}>
              <a href="#recipes" className={style.nav_item_link}>
                Recipes
              </a>
            </li>
            <li className={style.nav_item}>
              <a href="#chefs" className={style.nav_item_link}>
                Chefs
              </a>
            </li>
            <li className={style.nav_item}>
              <a href="#contacts" className={style.nav_item_link}>
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div onClick={() => setIsToggle(!toggle)} className={style.mobile_btn}>
        {toggle ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <hr className={style.header_undreline} />
    </header>
  );
}
