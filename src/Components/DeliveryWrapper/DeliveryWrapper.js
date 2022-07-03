import styles from "./DeliveryWrapper.module.css";
import Delivery from "./DeliveryComponent/Delivery";
import deliveryLogo2 from "../../assets/delivery-1.png";
import deliveryLogo from "../../assets/delivery-2.png";

const DeliveryWrapper = ({ deliveryTypeName, setDeliveryTypeName }) => {
  const changeDeliveryTypeHandler = (type) => {
    setDeliveryTypeName(type);
  };

  return (
    <div className={`${styles.delivery}`}>
      <header className={`${styles.delivery__header}`}>
        <h1 className={`${styles.delivery__title}`}>Delivery method:</h1>
      </header>

      <div className={`${styles.delivery__methods}`}>
        <Delivery
          changeDeliveryTypeHandler={changeDeliveryTypeHandler}
          deliveryLogo={deliveryLogo}
          deliveryPrice="$15.00"
          deliveryDescription="Payment in advance"
          deliveryType={"Train"}
          deliveryTypeName={deliveryTypeName}
        />
        <Delivery
          changeDeliveryTypeHandler={changeDeliveryTypeHandler}
          deliveryLogo={deliveryLogo}
          deliveryPrice="$20.00"
          deliveryType={"Air"}
          deliveryDescription="Cash on delivery"
          deliveryTypeName={deliveryTypeName}
        />
        <Delivery
          changeDeliveryTypeHandler={changeDeliveryTypeHandler}
          deliveryLogo={deliveryLogo2}
          deliveryPrice="$12.00"
          deliveryType={"fast"}
          deliveryDescription="Cash on delivery"
          deliveryTypeName={deliveryTypeName}
        />
        <Delivery
          changeDeliveryTypeHandler={changeDeliveryTypeHandler}
          deliveryLogo={deliveryLogo2}
          deliveryPrice="$15.00"
          deliveryType={"slow"}
          deliveryDescription="Personal collection"
          deliveryTypeName={deliveryTypeName}
        />
      </div>
    </div>
  );
};

export default DeliveryWrapper;
