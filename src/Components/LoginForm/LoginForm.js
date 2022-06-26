import styles from "../SignupForm/SignupForm.module.css";
import FormHeader from "../FormHeader/FormHeader";
import InputComponent from "../InputComponent/InputComponent";
import LoginWithAccountsBtnsWrapper from "../LoginWithAccountsButtonsWrapper/LoginWithAccountsBtnsWrapper";
import PasswordInputComponent from "../PasswordInput/PasswordInputComponent";
import SignupFormButtons from "../SignupForm/SignupFormButtons/SignupFormButtons";

const LoginForm = () => {
  return (
    <div className={`${styles.signup__wrapper}`}>
      <div className={`${styles.form}`}>
        <FormHeader headerTitle="Login to your account" />
        <form className={`${styles.signup__form}`}>
          <InputComponent name="email" type="email" placeholder="email" />
          <PasswordInputComponent name="password" placeholder="password" />
          <LoginWithAccountsBtnsWrapper />
          <SignupFormButtons
            buttonText="Sign in"
            linkTo=""
            switchFormButtonText="Not a member yet? Sign up"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
