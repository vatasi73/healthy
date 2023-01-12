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
            <a className={style.nav_list} href="/">
              <li>Menu</li>
            </a>
            <a className={style.nav_list} href="/">
              <li>Recipes</li>
            </a>
            <a className={style.nav_list} href="/">
              <li>Chefs</li>
            </a>
            <a className={style.nav_list} href="/">
              <li>Contacts</li>
            </a>
          </ul>
        </nav>
      </div>

      <hr className={style.header_undreline} />
    </header>
  );
}
