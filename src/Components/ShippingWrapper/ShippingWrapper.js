import styles from "./ShippingWrapper.module.css";
import InputComponent from "../InputComponent/InputComponent";

const ShippingWrapper = () => {
  return (
    <div className={`${styles.shipping}`}>
      <form className={`${styles.shipping__form}`}>
        <InputComponent />
        <InputComponent />
        <InputComponent />
        <InputComponent />
        <InputComponent />
        <InputComponent />
        <InputComponent />
        <InputComponent />
      </form>
    </div>
  );
};

export default ShippingWrapper;
