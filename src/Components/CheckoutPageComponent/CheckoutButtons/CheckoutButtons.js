import styles from "./CheckoutButtons.module.css";
import { NavLink } from "react-router-dom";

const CheckoutButtons = ({ finishCheckoutHandler }) => {
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
      <div className={`${styles.product_btn}`} onClick={finishCheckoutHandler}>
        <NavLink
          className={`${styles.btn} ${styles.product__btn__nextStep}`}
          to="/"
        >
          Finsih Checkout
        </NavLink>
      </div>
    </div>
  );
};

export default CheckoutButtons;
