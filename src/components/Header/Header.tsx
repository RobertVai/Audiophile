import { useState } from "react";
import styles from "./Header.module.css";
import homeBackground from "../../../public/assets/home/desktop/image-hero.jpg";
import Navigation from "../Navigation/Navigation";
import CartModal from "../CartModal/CartModal";

const Header = () => {
  return (
    <header>
      <div className={styles.navContainer}>
        <Navigation />
        <div className={styles.navLine}></div>
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.heroContent}>
          <p className={styles.overline}>NEW PRODUCT</p>
          <h1>XX99 MARK II HEADPHONES</h1>
          <p className={styles.description}>
            Experience natural,lifelike audio and exceptional build quality made
            for the passionate music enthusiast.
          </p>
          <div className={styles.buttonContainer}>
            <button>SEE PRODUCT</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
