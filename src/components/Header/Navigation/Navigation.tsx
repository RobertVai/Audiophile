import React from "react";
import styles from "./Navigation.module.css";
import mainLogo from "../../../assets/shared/desktop/logo.svg";
import cartIcon from "../../../assets/shared/desktop/icon-cart.svg";

const Navigation = () => {
  return (
    <div className={styles.navBar}>
      <img src={mainLogo} alt="Audiophile" />
      <div className={styles.navList}>
        <nav>
          <ul>
            <li>HOME</li>
            <li>HEADPHONES</li>
            <li>SPEAKERS</li>
            <li>EARPHONES</li>
          </ul>
        </nav>
      </div>

      <div className={styles.cart}>
        <img src={cartIcon} alt="" />
      </div>
    </div>
  );
};

export default Navigation;
