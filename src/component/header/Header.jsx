import React from "react";
import { ReactComponent as Logo } from "../../img/Logo.svg";
import { ReactComponent as LogoTitle } from "../../img/HEALTHY SWITCHER.svg";
import style from "./header.module.css";

export default function Header() {
  return (
    <header>
      <div className={style.header_wrapper}>
        <div>
          <a href="/">
            <Logo className={style.logo} />
            <LogoTitle />
          </a>
        </div>

        <nav>
          <ul className={style.header_ul}>
            <li className={style.nav_item}>
              <a href="/" className={style.nav_item_link}>
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

      <hr className={style.header_undreline} />
    </header>
  );
}
