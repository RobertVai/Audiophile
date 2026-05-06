import { Link } from "react-router-dom";
import { useState } from "react";
import CartModal from "../CartModal/CartModal";
import styles from "./Navigation.module.css";
import mainLogo from "../../../public/assets/shared/desktop/logo.svg";
import cartIcon from "../../../public/assets/shared/desktop/icon-cart.svg";

const Navigation = () => {
  const [cartModalOpen, setCartModelOpen] = useState(false);
  return (
    <div className={styles.navBar}>
      <div className={styles.logoContainer}>
        <img src={mainLogo} alt="Audiophile" />
      </div>

      <div className={styles.navList}>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>

            <li>
              <Link to="/category/headphones">HEADPHONES</Link>
            </li>

            <li>
              <Link to="/category/speakers">SPEAKERS</Link>
            </li>
            <li>
              <Link to="/category/earphones">EARPHONES</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.cart} onClick={() => setCartModelOpen(true)}>
        <img src={cartIcon} alt="" />
      </div>
      {cartModalOpen && <CartModal onClose={() => setCartModelOpen(false)} />}
    </div>
  );
};

export default Navigation;
