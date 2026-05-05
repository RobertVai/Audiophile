import { Link, useParams } from "react-router-dom";
import { products } from "../../data/products";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const { slug } = useParams();

  const product = products.find((product) => product.slug === slug);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <main className={styles.page}>
      <section className={styles.product}>
        <div className={styles.imageContainer}>
          <img src={product.image.desktop} alt={product.name} />
        </div>

        <div className={styles.content}>
          {product.new && <p className={styles.overline}>NEW PRODUCT</p>}

          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>$ {product.price.toLocaleString()}</p>

          <div className={styles.actions}>
            <div className={styles.quantity}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <button className={styles.button}>ADD TO CART</button>
          </div>
        </div>
      </section>

      <section className={styles.info}>
        <div className={styles.features}>
          <h2>FEATURES</h2>
          <p>{product.features}</p>
        </div>

        <div className={styles.includes}>
          <h2>IN THE BOX</h2>

          {product.includes.map((item) => (
            <p key={item.item}>
              <span>{item.quantity}x</span> {item.item}
            </p>
          ))}
        </div>
      </section>

      <section className={styles.gallery}>
        <div className={styles.galleryLeft}>
          <img src={product.gallery.first.desktop} alt="" />
          <img src={product.gallery.second.desktop} alt="" />
        </div>

        <img
          className={styles.galleryLarge}
          src={product.gallery.third.desktop}
          alt=""
        />
      </section>

      <section className={styles.related}>
        <h2>YOU MAY ALSO LIKE</h2>

        <div className={styles.relatedList}>
          {product.others.map((item) => (
            <article key={item.slug} className={styles.relatedCard}>
              <img src={item.image.desktop} alt={item.name} />
              <h3>{item.name}</h3>

              <Link className={styles.button} to={`/product/${item.slug}`}>
                SEE PRODUCT
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
