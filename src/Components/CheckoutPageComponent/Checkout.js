import styles from "./Checkout.module.css";
import DeliveryWrapper from "../DeliveryWrapper/DeliveryWrapper";
import ShippingWrapper from "../ShippingWrapper/ShippingWrapper";
import CheckoutButtons from "./CheckoutButtons/CheckoutButtons";

const Checkout = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <header className={`${styles.payment__header}`}>
        <h1 className={`${styles.payment__title}`}>Shipping and Payment</h1>
      </header>
      <div class={`${styles.shipping__Delivery__wrapper}`}>
        <ShippingWrapper />
        <DeliveryWrapper />
      </div>
      <CheckoutButtons />
    </div>
  );
};

export default Checkout;
