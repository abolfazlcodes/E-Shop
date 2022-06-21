import styles from "./ShoppingCartTotal.module.css";

const ShoppingCartTotal = () => {
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
      <span className={`${styles.total__cart__price}`}>
        Total cost: $200.00
      </span>
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

export default ShoppingCartTotal;
