import styles from "../SignupForm/SignupForm.module.css";
import FormHeader from "../FormHeader/FormHeader";
import InputComponent from "../InputComponent/InputComponent";
import LoginWithAccountsBtnsWrapper from "../LoginWithAccountsButtonsWrapper/LoginWithAccountsBtnsWrapper";

const LoginForm = () => {
  return (
    <div className={`${styles.signup__wrapper}`}>
      <div className={`${styles.form}`}>
        <FormHeader headerTitle="Login to your account" />
        <form className={`${styles.signup__form}`}>
          <InputComponent />
          <InputComponent />
          <LoginWithAccountsBtnsWrapper />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
