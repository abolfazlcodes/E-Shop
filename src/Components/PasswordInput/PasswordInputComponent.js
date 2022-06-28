import styles from "./PasswordInputComponent.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const PasswordInputComponent = ({ name, placeholder, formik }) => {
  const [isPassword, setIsPassword] = useState(true);

  const changeTypeHandler = () => {
    setIsPassword(!isPassword);
  };

  return (
    <div className={`${styles.input__group}`}>
      <input
        name={name}
        type={isPassword ? "password" : "text"}
        className={`${styles.signup__form__input}`}
        {...formik.getFieldProps({ name })}
        placeholder={placeholder}
        autoComplete="current-password"
      />
      {isPassword ? (
        <FaEyeSlash
          className={`${styles.icons} ${styles.passwordIcon}`}
          onClick={changeTypeHandler}
        />
      ) : (
        <FaEye
          className={`${styles.icons} ${styles.passwordIcon}`}
          onClick={changeTypeHandler}
        />
      )}
      {formik.touched[name] && formik.errors[name] && (
        <span className={`${styles.error__message}`}>
          {formik.errors[name]}
        </span>
      )}
    </div>
  );
};

export default PasswordInputComponent;
