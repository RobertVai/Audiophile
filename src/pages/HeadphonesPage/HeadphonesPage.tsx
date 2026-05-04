import Categories from "../../components/Categories/Categories";
import { products } from "../../data/products";
import styles from "./HeadphonesPage.module.css";
const HeadphonesPage = () => {
  const headphones = products.filter((p) => p.category === "headphones");

  return (
    <div className={styles.pageWrapper}>
      {headphones.map((p, index) => (
        <div
          key={p.id}
          className={`${styles.card} ${index % 2 !== 0 ? styles.reverse : ""}`}
        >
          <div className={styles.imageContainer}>
            <img src={p.categoryImage.desktop} alt={p.name} />
          </div>

          <div className={styles.contentContainer}>
            <h2>{p.name}</h2>
            <p>{p.description}</p>
            <button>SEE PRODUCT</button>
          </div>
        </div>
      ))}
      <Categories />
    </div>
  );
};

export default HeadphonesPage;
