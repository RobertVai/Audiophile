import React from "react";
import styles from "./Main.module.css";
import Categories from "../Categories/Categories";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import About from "../About/About";

const Main = () => {
  return (
    <main>
      <Categories />
      <FeaturedProducts />
      <About />
    </main>
  );
};

export default Main;
