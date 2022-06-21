import styles from "./ShoppingCartHeader.module.css";

const ShoppingCartHeader = () => {
  return (
    <div class={`${styles.products__header}`}>
      <span class={`${styles.products__header__name}`}>Product</span>
      <span
        class={`${styles.products__headers} ${styles.products__header__color}`}
      >
        Color
      </span>
      <span
        class={`${styles.products__headers} ${styles.products__header__size}`}
      >
        Size
      </span>
      <span
        class={`${styles.products__headers} ${styles.products__header__amount}`}
      >
        Amount
      </span>
      <span
        class={`${styles.products__headers} ${styles.products__header__price}`}
      >
        Price
      </span>
    </div>
  );
};

export default ShoppingCartHeader;
