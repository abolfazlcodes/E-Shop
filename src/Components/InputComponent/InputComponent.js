import styles from "./InputComponent.module.css";

const InputComponent = ({ name, type = "text", placeholder, formik }) => {
  return (
    <div className={`${styles.input__group}`}>
      <input
        name={name}
        type={type}
        id={name}
        {...formik.getFieldProps({ name })}
        className={`${styles.signup__form__input}`}
        placeholder={placeholder}
      />
      {formik.touched[name] && formik.errors[name] && (
        <span className={`${styles.error__message}`}>
          {formik.errors[name]}
        </span>
      )}
    </div>
  );
};

export default InputComponent;
