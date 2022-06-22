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
        </div>
      </div>
      <div className={`${styles.product__color}`}>
        <span className={`${styles.color}`}>White</span>
      </div>
      <div className={`${styles.product__size}`}>
        <span className={`${styles.size}`}>xl</span>
      </div>
      <div className={`${styles.product__amount}`}>
        <div className={`${styles.product__quantity__btns}`}>
          <i>
            <MdRemove />
          </i>
          <span className={`${styles.quantity}`}>1</span>
          <i>
            <MdAdd />
          </i>
        </div>
      </div>
      <div className={`${styles.product__price}`}>
        <span className={`${styles.price}`}>$88.88</span>
      </div>
      <div className={`${styles.product__btn}`}>
        <MdClear className={`${styles.icons}`} />
      </div>
    </article>
  );
};

export default ShoppingCartProduct;
