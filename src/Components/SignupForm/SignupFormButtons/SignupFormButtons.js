import styles from "./SignupFormButtons.module.css";
import { NavLink } from "react-router-dom";

const SignupFormButtons = ({
  buttonText,
  linkTo,
  switchFormButtonText,
  formik,
}) => {
  return (
    <div className={`${styles.signup__form__btn}`}>
      <button
        href="#"
        className={`${styles.btn} ${styles.signup__form__btn__submit}`}
        disabled={!formik.isValid}
      >
        {buttonText}
      </button>
      <NavLink className={`${styles.login__form__btn}`} to={linkTo}>
        {switchFormButtonText}
      </NavLink>
    </div>
  );
};

export default SignupFormButtons;
