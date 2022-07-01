import styles from "./ProductNumber.module.css";
import { MdRemove, MdAdd } from "react-icons/md";

const ProductNumber = ({ productNumber, onIncrement, onDecrement }) => {
  return (
    <div className={`${styles.product__quantity}`}>
      <span className={`${styles.product__quantity__flag} ${styles.flags}`}>
        Quantity:
      </span>
      <div className={`${styles.product__quantity__btns}`}>
        <i>
          <MdRemove onClick={onDecrement} />
        </i>
        <span className={`${styles.quantity}`}>{productNumber}</span>
        <i>
          <MdAdd onClick={onIncrement} />
        </i>
      </div>
    </div>
  );
};

export default ProductNumber;
