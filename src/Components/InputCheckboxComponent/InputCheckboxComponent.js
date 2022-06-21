import styles from "./InputCheckboxComponent.module.css";

const InputCheckboxComponent = ({ name, errorMessage }) => {
  return (
    <div className={`${styles.signup__terms}`}>
      <input type="checkbox" name="terms" id="" />
      <label for="terms">
        I agree to the Google Terms of Service and Privacy Policy
      </label>
      <span className={`${styles.error__message}`}>Required!</span>
    </div>
  );
};

export default InputCheckboxComponent;
