import styles from "./Products.module.css";
import Product from "../../Product/Product";

const Products = () => {
  return (
    <div className={`${styles.products__container}`}>
      <header className={`${styles.products__header}`}>
        <h1 className={`${styles.products__header__title}`}>Men's tops</h1>
      </header>

      <div className={`${styles.products}`}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
