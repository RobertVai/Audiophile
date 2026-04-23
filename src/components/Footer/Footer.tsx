import styles from "./Footer.module.css";

import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import twitter from "../../assets/shared/desktop/icon-twitter.svg";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h3 className={styles.logo}>audiophile</h3>

          <nav className={styles.navigation}>
            <a href="#">HOME</a>
            <a href="#">HEADPHONES</a>
            <a href="#">SPEAKERS</a>
            <a href="#">EARPHONES</a>
          </nav>
        </div>

        <div className={styles.middle}>
          <p className={styles.text}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility – we're open 7 days a week.
          </p>

          <div className={styles.socials}>
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>

        <div className={styles.bottom}>
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
