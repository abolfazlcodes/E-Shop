import styles from "./ProductColor.module.css";
import { useSelector, useDispatch } from "react-redux";
import { chooseProductColor } from "../../../redux/productColor/productColorActions";

const ProductColor = () => {
  const productColor = useSelector((state) => state.productColor);
  const dispatch = useDispatch();

  return (
    <div className={`${styles.product__color}`}>
      <span className={`${styles.product__color__flag} ${styles.flags}`}>
        Color:
      </span>

      <div className={`${styles.product__color__boxes}`}>
        <div
          onClick={() => dispatch(chooseProductColor("black"))}
          className={`${styles.product__color__box} ${
            productColor.color === "black" && styles.colorActive
          } `}
        >
          <div className={`${styles.color} ${styles.color__one}`}></div>
        </div>
        <div
          onClick={() => dispatch(chooseProductColor("blue"))}
          className={`${styles.product__color__box} ${
            productColor.color === "blue" && styles.colorActive
          }`}
        >
          <div className={`${styles.color} ${styles.color__two}`}></div>
        </div>
        <div
          onClick={() => dispatch(chooseProductColor("white"))}
          className={`${styles.product__color__box} ${
            productColor.color === "white" && styles.colorActive
          }`}
        >
          <div className={`${styles.color} ${styles.color__three}`}></div>
        </div>
        <div
          onClick={() => dispatch(chooseProductColor("brown"))}
          className={`${styles.product__color__box} ${
            productColor.color === "brown" && styles.colorActive
          }`}
        >
          <div className={`${styles.color} ${styles.color__four}`}></div>
        </div>
      </div>
    </div>
  );
};

export default ProductColor;
