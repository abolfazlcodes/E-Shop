import styles from "./ProductFlags.module.css";

const ProductFlags = ({ productID }) => {
  return (
    <div className={`${styles.product__flags}`}>
      <span className={`${styles.product__banner}`}>sale</span>
      <span className={`${styles.product__id}`}>
        Product ID:
        <span>{productID}</span>
      </span>
    </div>
  );
};

export default ProductFlags;
