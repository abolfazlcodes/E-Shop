import styles from "./SignupFormButtons.module.css";

const SignupFormButtons = ({ buttonText, linkTo, switchFormButtonText }) => {
  return (
    <div className={`${styles.signup__form__btn}`}>
      <a
        href="#"
        className={`${styles.btn} ${styles.signup__form__btn__submit}`}
      >
        {buttonText}
      </a>
      <a href="#" className={`${styles.login__form__btn}`}>
        {switchFormButtonText}
      </a>
    </div>
  );
};

export default SignupFormButtons;
