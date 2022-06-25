import styles from "./CartWrapper.module.css";
import ShoppingCartProductWrapper from "../ShoppingCartProductWrapper/ShoppingCartProductWrapper";
import ShoppingCartTotal from "../ShoppingCartTotal/ShoppingCartTotal";

const CartWrapper = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.shopping__cart}`}>
        <header className={`${styles.shopping__cart__header}`}>
          <h1 className={`${styles.shopping__cart__title}`}>Shopping Cart</h1>
        </header>
        <div className={`${styles.shopping__cart__products}`}>
          <ShoppingCartProductWrapper />
          <ShoppingCartTotal />
        </div>
      </div>
    </div>
  );
};

export default CartWrapper;
