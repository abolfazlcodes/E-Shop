import styles from "./ShoppingCartTotal.module.css";
import { NavLink } from "react-router-dom";

const ShoppingCartTotal = () => {
  return (
    <div className={`${styles.shopping__cart__total}`}>
      <div className={`${styles.product_btn}`}>
        <NavLink
          className={`${styles.btn} ${styles.product__btn__backToStore}`}
          to="/products"
        >
          Continue shopping
        </NavLink>
      </div>
      <span className={`${styles.total__cart__price}`}>
        Total cost: $200.00
      </span>
      <div className={`${styles.product_btn}`}>
        <NavLink
          className={`${styles.btn} ${styles.product__btn__nextStep}`}
          to="/nextStep"
        >
          Next step
        </NavLink>
      </div>
    </div>
  );
};

export default ShoppingCartTotal;
