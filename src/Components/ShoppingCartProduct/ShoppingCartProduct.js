import styles from "./ShoppingCartProduct.module.css";
import image from "../../assets/sample.jpg";
import { MdRemove, MdClear, MdAdd } from "react-icons/md";

const ShoppingCartProduct = () => {
  return (
    <article className={`${styles.product}`}>
      <div className={`${styles.product__details}`}>
        <div className={`${styles.product__image}`}>
          <img src={image} alt="" className={`${styles.product__img}`} />
        </div>
        <div className={`${styles.product__name__id}`}>
          <p className={`${styles.product__name}`}>T-Shirt Summer Vibes</p>
          <span className={`${styles.product__id}`}>#261311</span>
          <div className={`${styles.product__tags}`}>
            <span className={`${styles.product__tag}`}>White</span>
            <span className={`${styles.product__tag}`}>xl</span>
          </div>
        </div>
      </div>
      <div className={`${styles.product__buttons}`}>
        <div className={`${styles.product__quantity}`}>
          <span className={`${styles.product__quantity__btn}`}>
            <MdAdd />
          </span>
          <span className={`${styles.product__quantity__num}`}>1</span>
          <span className={`${styles.product__quantity__btn}`}>
            <MdRemove />
          </span>
        </div>
        <div className={`${styles.product__price}`}>
          <span className={`${styles.price}`}>$88.88</span>
        </div>
        <div className={`${styles.product__delete__btn}`}>
          <i>
            <MdClear />
          </i>
        </div>
      </div>
    </article>
  );
};

export default ShoppingCartProduct;
