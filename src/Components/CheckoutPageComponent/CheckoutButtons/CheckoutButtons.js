import styles from "./CheckoutButtons.module.css";
import { NavLink } from "react-router-dom";

const CheckoutButtons = () => {
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
      <div className={`${styles.product_btn}`}>
        <NavLink
          className={`${styles.btn} ${styles.product__btn__nextStep}`}
          to="/next"
        >
          Next step
        </NavLink>
      </div>
    </div>
  );
};

export default CheckoutButtons;
