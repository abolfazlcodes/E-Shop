import styles from "./ShoppingCartTotal.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const ShoppingCartTotal = () => {
  const cartData = useSelector((state) => state.cart);
  const total = cartData.map((item) => Number(item.price * item.productNumber));
  console.log(total);

  const render = (cart) => {
    if (!cart.length) return;

    return (
      <div className={`${styles.shopping__cart__total}`}>
        <div className={`${styles.product_btn}`}>
          <NavLink
            className={`${styles.btn} ${styles.product__btn__backToStore}`}
            to="/products"
          >
            Continue shopping
          </NavLink>
        </div>
        <span className={`${styles.total__cart__price}`}>
          Total cost: $ {total.reduce((acc, cur) => acc + cur)}
        </span>
        <div className={`${styles.product_btn}`}>
          <NavLink
            className={`${styles.btn} ${styles.product__btn__nextStep}`}
            to="/nextStep"
          >
            Next step
          </NavLink>
        </div>
      </div>
    );
  };

  return render(cartData);
};

export default ShoppingCartTotal;
