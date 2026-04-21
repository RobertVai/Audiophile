import React from "react";
import styles from "./Navigation.module.css";
import mainLogo from "../../../assets/shared/desktop/logo.svg";
import cartIcon from "../../../assets/shared/desktop/icon-cart.svg";

const Navigation = () => {
  return (
    <div className={styles.navContainer}>
      <img src={mainLogo} alt="Audiophile" />
      <div>
        <nav>
          <ul>
            <li>HOME</li>
            <li>HEADPHONES</li>
            <li>SPEAKERS</li>
            <li>EARPHONES</li>
          </ul>
        </nav>
      </div>

      <div>
        <img src={cartIcon} alt="" />
      </div>
    </div>
  );
};

export default Navigation;
