import React from "react";
import styles from "./Categories.module.css";
import headphonesThumbnail from "../../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumbnail from "../../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesThumbnail from "../../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
const Categories = () => {
  return (
    <div className={styles.mainWrapper}>
      {" "}
      <div className={styles.categoryContainer}>
        <div className={styles.category}>
          <img
            className={styles.categoryImage}
            src={headphonesThumbnail}
            alt="Headphones"
          />
          <p className={styles.categoryTitle}>HEADPHONES</p>
          <span className={styles.categoryLink}>SHOP</span>
        </div>

        <div className={styles.category}>
          <img
            className={styles.categoryImage}
            src={speakersThumbnail}
            alt="Speakers"
          />
          <p className={styles.categoryTitle}>SPEAKERS</p>
          <span className={styles.categoryLink}>SHOP</span>
        </div>

        <div className={styles.category}>
          <img
            className={styles.categoryImage}
            src={earphonesThumbnail}
            alt="Earphones"
          />
          <p className={styles.categoryTitle}>EARPHONES</p>
          <span className={styles.categoryLink}>SHOP</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
