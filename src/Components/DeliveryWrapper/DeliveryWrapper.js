import styles from "./DeliveryWrapper.module.css";
import Delivery from "./DeliveryComponent/Delivery";
import deliveryLogo2 from "../../assets/delivery-1.png";
import deliveryLogo from "../../assets/delivery-2.png";

const DeliveryWrapper = () => {
  return (
    <div className={`${styles.delivery}`}>
      <header className={`${styles.delivery__header}`}>
        <h1 className={`${styles.delivery__title}`}>Delivery method:</h1>
      </header>

      <div className={`${styles.delivery__methods}`}>
        <Delivery
          deliveryLogo={deliveryLogo}
          deliveryPrice="$15.00"
          deliveryDescription="Payment in advance"
        />
        <Delivery
          deliveryLogo={deliveryLogo}
          deliveryPrice="$20.00"
          deliveryDescription="Cash on delivery"
        />
        <Delivery
          deliveryLogo={deliveryLogo2}
          deliveryPrice="$12.00"
          deliveryDescription="Cash on delivery"
        />
        <Delivery
          deliveryLogo={deliveryLogo2}
          deliveryPrice="$15.00"
          deliveryDescription="Personal collection"
        />
      </div>
    </div>
  );
};

export default DeliveryWrapper;
