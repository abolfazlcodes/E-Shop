import styles from "./ShippingWrapper.module.css";
import InputComponent from "../InputComponent/InputComponent";
import CountriesSelectBox from "../CountriesSelectBox/CountriesSelectBox";

const ShippingWrapper = () => {
  return (
    <div className={`${styles.shipping}`}>
      <form className={`${styles.shipping__form}`}>
        <InputComponent name="FirstName" placeholder="Beatrice" />
        <InputComponent name="LastName" placeholder="Waddle" />
        <InputComponent name="address" placeholder="1391 Signle Street" />
        <InputComponent name="City" placeholder="Chicago" />
        <InputComponent name="ZIP" placeholder="MA 02129" />
        <InputComponent
          name="PhoneNumber"
          type="tel"
          placeholder="09111111111"
        />
        <CountriesSelectBox />
        <InputComponent
          name="email"
          type="email"
          placeholder="BeatriceLWaddle@rhyta.com"
        />
      </form>
    </div>
  );
};

export default ShippingWrapper;
