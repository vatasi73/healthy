import React from "react";
import { ReactComponent as Logo } from "../../img/Logo.svg";
import { ReactComponent as LogoTitle } from "../../img/HEALTHY SWITCHER.svg";
import Info from "../info/Info";
import style from "./footer.module.css";
export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.test}>
        {" "}
        <Info />
        <hr className={style.footer_underline} />
        <div className={style.footer_bottom}>
          <div className={style.logo_position}>
            <a href="/">
              <Logo className={style.logo} />
              <LogoTitle />
            </a>
          </div>
          <p className={style.footer_subtitle}>
            © Designed by Yellow Snow. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
