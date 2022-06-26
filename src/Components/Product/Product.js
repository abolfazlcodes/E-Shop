import styles from "./Product.module.css";
import productImage from "../../assets/AdobeStock_236655481.jpg";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const Product = () => {
  return (
    <div className={`${styles.product}`}>
      <div className={`${styles.product__image}`}>
        <img src={productImage} alt="" className={`${styles.product__img}`} />
      </div>
      <div className={`${styles.product__details}`}>
        <span className={`${styles.product__name}`}>T-Shirt Summer Vibes</span>
        <span className={`${styles.product__price}`}>$119.99</span>
      </div>

      <div className={`${styles.like__icon} ${styles.liked}}`}>
        <MdFavoriteBorder className={`${styles.icon}`} />
      </div>
    </div>
  );
};

export default Product;
