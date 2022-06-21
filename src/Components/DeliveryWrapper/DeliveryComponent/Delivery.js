import styles from "./Delivery.module.css";

const Delivery = ({ deliveryLogo, deliveryPrice, deliveryDescription }) => {
  return (
    <article className={`${styles.delivery__method} ${styles.active}`}>
      <div className={`${styles.delivery__method__company}`}>
        <img
          src={deliveryLogo}
          alt="Delivery Logo"
          className={`${styles.delivery__company__logo}`}
        />
      </div>
      <div className={`${styles.delivery__method__details}`}>
        <span className={`${styles.delivery__method__price}`}>
          {deliveryPrice}
        </span>
        <span className={`${styles.delivery__method__des}`}>
          {deliveryDescription}
        </span>
      </div>
    </article>
  );
};

export default Delivery;
