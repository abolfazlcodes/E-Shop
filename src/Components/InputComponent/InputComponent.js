import styles from "./InputComponent.module.css";

const InputComponent = ({ name, type = "text", errorMessage, placeholder }) => {
  return (
    <div className={`${styles.input__group}`}>
      <input
        name={name}
        type={type}
        className={`${styles.signup__form__input}`}
        placeholder={placeholder}
      />
      <span className={`${styles.error__message}`}>Name is invalid</span>
    </div>
  );
};

export default InputComponent;
