import styles from "./Product.module.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const Product = ({ product }) => {
  return (
    <div className={`${styles.product}`}>
      <div className={`${styles.product__image}`}>
        <img
          src={product.image}
          alt={product.name}
          className={`${styles.product__img}`}
        />
      </div>
      <div className={`${styles.product__details}`}>
        <span className={`${styles.product__name}`}>{product.name}</span>
        <span className={`${styles.product__price}`}>${product.price}</span>
      </div>

      <div className={`${styles.like__icon} ${styles.liked}}`}>
        <MdFavoriteBorder className={`${styles.icon}`} />
      </div>
    </div>
  );
};

export default Product;
