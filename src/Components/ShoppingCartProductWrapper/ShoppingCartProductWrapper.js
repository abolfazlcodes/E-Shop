import ShoppingCartProduct from "../ShoppingCartProduct/ShoppingCartProduct";
import styles from "./ShoppingCartProductWrapper.module.css";

const ShoppingCartProductWrapper = () => {
  return (
    <div className={`${styles.products}`}>
      <ShoppingCartProduct />
    </div>
  );
};

export default ShoppingCartProductWrapper;
