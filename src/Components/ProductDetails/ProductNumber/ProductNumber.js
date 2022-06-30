import styles from "./ProductNumber.module.css";
import { MdRemove, MdAdd } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
} from "../../../redux/productQuanity/productQuantityActions";

const ProductNumber = () => {
  const productQuantity = useSelector((state) => state.productQuantity);
  const dispatch = useDispatch();

  return (
    <div className={`${styles.product__quantity}`}>
      <span className={`${styles.product__quantity__flag} ${styles.flags}`}>
        Quantity:
      </span>
      <div className={`${styles.product__quantity__btns}`}>
        <i>
          <MdRemove onClick={() => dispatch(decreaseProductQuantity())} />
        </i>
        <span className={`${styles.quantity}`}>
          {productQuantity.productQuantity}
        </span>
        <i>
          <MdAdd onClick={() => dispatch(increaseProductQuantity())} />
        </i>
      </div>
    </div>
  );
};

export default ProductNumber;
