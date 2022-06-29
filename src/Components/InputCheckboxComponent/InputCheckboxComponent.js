import styles from "./InputCheckboxComponent.module.css";

const InputCheckboxComponent = ({ name, formik }) => {
  return (
    <div className={`${styles.signup__terms}`}>
      <input
        type="checkbox"
        name={name}
        id={name}
        {...formik.getFieldProps({ name })}
      />
      <label htmlFor={name}>
        I agree to the Google Terms of Service and Privacy Policy
      </label>
      {formik.touched[name] && formik.errors[name] && (
        <span className={`${styles.error__message}`}>
          {formik.errors[name]}
        </span>
      )}
    </div>
  );
};

export default InputCheckboxComponent;
