import React from "react";
import styles from "./Header.module.css";
import homeBackground from "../../assets/home/desktop/image-hero.jpg";
import Navigation from "./Navigation/Navigation";

const Header = () => {
  return (
    <header>
      <Navigation />
      <div className={styles.titleContainer}>
        <p>NEW PRODUCT</p>
        <h1>XX99 MARK II HEADPHONES</h1>
        <p>
          Experiance natural,lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <div>
          <button>SEE PRODUCT</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
