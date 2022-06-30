import styles from "./ProductSize.module.css";
import { chooseProductSize } from "../../../redux/productSize/productSizeActions";
import { useSelector, useDispatch } from "react-redux";

const ProductSize = () => {
  const productSize = useSelector((state) => state.productSize);
  const dispatch = useDispatch();

  return (
    <div className={`${styles.product__size}`}>
      <span className={`${styles.product__size__flag} ${styles.flags}`}>
        Size:
      </span>

      <div className={`${styles.product__size__selectBox}`}>
        <select
          name="size"
          id={`${styles.size}`}
          onChange={(e) => dispatch(chooseProductSize(e.target.value))}
        >
          <option value="">Choose size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
};

export default ProductSize;
