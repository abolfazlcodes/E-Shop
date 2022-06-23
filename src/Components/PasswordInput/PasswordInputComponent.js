import styles from "./PasswordInputComponent.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const PasswordInputComponent = ({ errorMessage }) => {
  const [isPassword, setIsPassword] = useState(true);

  const changeTypeHandler = () => {
    setIsPassword(!isPassword);
  };

  return (
    <div className={`${styles.input__group}`}>
      <input
        name="FirstName"
        type={isPassword ? "password" : "text"}
        className={`${styles.signup__form__input}`}
        placeholder="FirstName"
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

      <span className={`${styles.error__message}`}></span>
    </div>
  );
};

export default PasswordInputComponent;
