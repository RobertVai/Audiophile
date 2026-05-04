import styles from "./FeaturedProducts.module.css";

import zx9Speaker from "../../../public/assets/home/desktop/image-speaker-zx9.png";
import zx7Speaker from "../../../public/assets/home/desktop/image-speaker-zx7.jpg";
import yx1Earphones from "../../../public/assets/home/desktop/image-earphones-yx1.jpg";

const FeaturedProducts = () => {
  return (
    <section className={styles.featuredProducts}>
      <div className={styles.zx9Card}>
        <div className={styles.zx9ImageWrapper}>
          <img className={styles.zx9Image} src={zx9Speaker} alt="ZX9 Speaker" />
        </div>

        <div className={styles.zx9Content}>
          <h2 className={styles.zx9Title}>ZX9 SPEAKER</h2>
          <p className={styles.zx9Description}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className={styles.darkButton}>SEE PRODUCT</button>
        </div>
      </div>

      <div className={styles.zx7Card}>
        <div className={styles.zx7Overlay}>
          <h3 className={styles.zx7Title}>ZX7 SPEAKER</h3>
          <button className={styles.lightButton}>SEE PRODUCT</button>
        </div>
      </div>

      <div className={styles.bottomBlock}>
        <div className={styles.yx1ImageBlock}>
          <img
            className={styles.yx1Image}
            src={yx1Earphones}
            alt="YX1 Earphones"
          />
        </div>

        <div className={styles.yx1ContentBlock}>
          <h3 className={styles.yx1Title}>YX1 EARPHONES</h3>
          <button className={styles.lightButton}>SEE PRODUCT</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
