import FormHeader from "../FormHeader/FormHeader";
import styles from "./SignupForm.module.css";
import InputComponent from "../InputComponent/InputComponent";
import SignupFormButtons from "./SignupFormButtons/SignupFormButtons";

const SignupForm = () => {
  return (
    <div className={`${styles.signup__wrapper}`}>
      <div className={`${styles.form}`}>
        <FormHeader headerTitle="Create an account and discover the benefits" />
        <form className={`${styles.signup__form}`}>
          <InputComponent />
          <InputComponent />
          <InputComponent />
          <InputComponent />
          <SignupFormButtons />
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
