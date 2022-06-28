import styles from "./SignupFormButtons.module.css";
import { NavLink } from "react-router-dom";

const SignupFormButtons = ({ buttonText, linkTo, switchFormButtonText }) => {
  return (
    <div className={`${styles.signup__form__btn}`}>
      <a
        href="#"
        className={`${styles.btn} ${styles.signup__form__btn__submit}`}
      >
        {buttonText}
      </a>
      <NavLink className={`${styles.login__form__btn}`} to={linkTo}>
        {switchFormButtonText}
      </NavLink>
    </div>
  );
};

export default SignupFormButtons;
