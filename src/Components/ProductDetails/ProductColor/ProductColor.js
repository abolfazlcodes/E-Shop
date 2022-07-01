import styles from "./ProductColor.module.css";

const ProductColor = ({ productColor, onChangeColor }) => {
  return (
    <div className={`${styles.product__color}`}>
      <span className={`${styles.product__color__flag} ${styles.flags}`}>
        Color:
      </span>

      <div className={`${styles.product__color__boxes}`}>
        <div
          className={`${styles.product__color__box} ${
            productColor === "black" && styles.colorActive
          } `}
          onClick={() => onChangeColor("black")}
        >
          <div className={`${styles.color} ${styles.color__one}`}></div>
        </div>
        <div
          className={`${styles.product__color__box} ${
            productColor === "blue" && styles.colorActive
          }`}
          onClick={() => onChangeColor("blue")}
        >
          <div className={`${styles.color} ${styles.color__two}`}></div>
        </div>
        <div
          className={`${styles.product__color__box} ${
            productColor === "white" && styles.colorActive
          }`}
          onClick={() => onChangeColor("white")}
        >
          <div className={`${styles.color} ${styles.color__three}`}></div>
        </div>
        <div
          className={`${styles.product__color__box} ${
            productColor === "brown" && styles.colorActive
          }`}
          onClick={() => onChangeColor("brown")}
        >
          <div className={`${styles.color} ${styles.color__four}`}></div>
        </div>
      </div>
    </div>
  );
};

export default ProductColor;
