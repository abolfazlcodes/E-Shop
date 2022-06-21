import styles from "./InputComponent.module.css";

const InputComponent = ({ name, type, errorMessage, placeholder }) => {
  return (
    <div className={`${styles.input__group}`}>
      <input
        name="FirstName"
        type="text"
        className={`${styles.signup__form__input}`}
        placeholder="FirstName"
      />
      <span className={`${styles.error__message}`}>Name is invalid</span>
    </div>
  );
};

export default InputComponent;
