import styles from "./About.module.css";
import image from "../../assets/shared/desktop/image-best-gear.jpg";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          BRINGING YOU THE <span>BEST</span> AUDIO GEAR
        </h2>

        <p className={styles.description}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <img src={image} alt="Person with headphones" />
      </div>
    </section>
  );
};

export default About;
