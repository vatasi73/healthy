import React from "react";
import { ReactComponent as Logo } from "../img/Logo.svg";
import { ReactComponent as LogoTitle } from "../img/HEALTHY SWITCHER.svg";

import "./style.css";
export default function Header() {
  return (
    <header>
      <div className="header_wrapper">
        <div className="left">
          <a href="/">
            <Logo className="logo" />
            <LogoTitle />
          </a>
        </div>

        <nav>
          <ul className="header_ul">
            <a className="nav_list" href="/">
              <li>Menu</li>
            </a>
            <a className="nav_list" href="/">
              <li>Recipes</li>
            </a>
            <a className="nav_list" href="/">
              <li>Chefs</li>
            </a>
            <a className="nav_list" href="/">
              <li>Contacts</li>
            </a>
          </ul>
        </nav>
      </div>

      <hr />
    </header>
  );
}
