import styles from "./CheckoutButtons.module.css";

const CheckoutButtons = () => {
  return (
    <div className={`${styles.shopping__cart__total}`}>
      <div className={`${styles.product_btn}`}>
        <a
          href="#"
          className={`${styles.btn} ${styles.product__btn__backToStore}`}
        >
          Continue shopping
        </a>
      </div>
      <div className={`${styles.product_btn}`}>
        <a
          href="#"
          className={`${styles.btn} ${styles.product__btn__nextStep}`}
        >
          Next step
        </a>
      </div>
    </div>
  );
};

export default CheckoutButtons;
