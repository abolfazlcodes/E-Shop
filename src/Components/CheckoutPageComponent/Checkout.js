import styles from "./Checkout.module.css";
import DeliveryWrapper from "../DeliveryWrapper/DeliveryWrapper";
import ShippingWrapper from "../ShippingWrapper/ShippingWrapper";
import CheckoutButtons from "./CheckoutButtons/CheckoutButtons";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const [userInformation, setUserInformation] = useState(null);
  const [deliveryTypeName, setDeliveryTypeName] = useState("Train");

  const submitHandler = (userData) => {
    const userDataUpdated = { ...userData, deliveryType: deliveryTypeName };
    setUserInformation(userDataUpdated);
  };

  const finishCheckoutHandler = () => {
    toast.success("Purchase Done");
  };

  return (
    <div className={`${styles.wrapper}`}>
      <header className={`${styles.payment__header}`}>
        <h1 className={`${styles.payment__title}`}>Shipping and Payment</h1>
      </header>
      <div className={`${styles.shipping__Delivery__wrapper}`}>
        <ShippingWrapper submitHandler={submitHandler} />
        <DeliveryWrapper
          deliveryTypeName={deliveryTypeName}
          setDeliveryTypeName={setDeliveryTypeName}
        />
      </div>
      <CheckoutButtons finishCheckoutHandler={finishCheckoutHandler} />
    </div>
  );
};

export default Checkout;
