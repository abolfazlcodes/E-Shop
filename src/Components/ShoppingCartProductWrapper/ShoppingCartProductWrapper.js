import ShoppingCartProduct from "../ShoppingCartProduct/ShoppingCartProduct";
import styles from "./ShoppingCartProductWrapper.module.css";
import { useSelector } from "react-redux";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const ShoppingCartProductWrapper = () => {
  const cartData = useSelector((state) => state.cart);

  const render = (cartItems) => {
    if (!cartItems.length)
      return <ErrorMessage error="No product in cart yet." />;

    if (cartItems && cartItems.length) {
      return cartItems.map((item) => {
        return <ShoppingCartProduct product={item} key={item._id} />;
      });
    }
  };
  return <div className={`${styles.products}`}>{render(cartData)}</div>;
};

export default ShoppingCartProductWrapper;
