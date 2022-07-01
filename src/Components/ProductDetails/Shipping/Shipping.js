import { FaTruck } from "react-icons/fa";
import styles from "./Shipping.module.css";

const Shipping = ({ type, description }) => {
  return (
    <div
      className={`${styles.product__delivery__type} ${styles.product__delivery__shipment}`}
    >
      <div className={`${styles.product__delivery__icon}`}>
        <FaTruck className={`${styles.delivery__icon}`} />
      </div>
      <div className={`${styles.product__delivery__details}`}>
        <span className={`${styles.product__delivery__heading}`}>{type}</span>
        <span className={`${styles.product__delivery__subheading}`}>
          {description}
        </span>
      </div>
    </div>
  );
};

export default Shipping;
