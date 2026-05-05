import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import styles from "./CategoryPage.module.css";
import Categories from "../../components/Categories/Categories";
import About from "../../components/About/About";
const CategoryPage = () => {
  const { category } = useParams();

  const categoryProducts = products.filter(
    (product) => product.category === category,
  );
  return (
    <div className={styles.pageWrapper}>
      {categoryProducts.map((p, index) => (
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
            <Link className={styles.button} to={`/product/${p.slug}`}>
              SEE PRODUCT
            </Link>
          </div>
        </div>
      ))}
      <Categories />
      <About />
    </div>
  );
};

export default CategoryPage;
