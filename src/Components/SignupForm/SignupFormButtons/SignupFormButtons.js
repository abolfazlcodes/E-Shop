import styles from "./SignupFormButtons.module.css";

const SignupFormButtons = () => {
  return (
    <div className={`${styles.signup__form__btn}`}>
      <a
        href="#"
        className={`${styles.btn} ${styles.signup__form__btn__submit}`}
      >
        Sign up
      </a>
      <a href="#" className={`${styles.login__form__btn}`}>
        Already have an account? Login
      </a>
    </div>
  );
};

export default SignupFormButtons;
