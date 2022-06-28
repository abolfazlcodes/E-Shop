import FormHeader from "../FormHeader/FormHeader";
import styles from "./SignupForm.module.css";
import InputComponent from "../InputComponent/InputComponent";
import SignupFormButtons from "./SignupFormButtons/SignupFormButtons";
import PasswordInputComponent from "../PasswordInput/PasswordInputComponent";

const SignupForm = () => {
  return (
    <div className={`${styles.signup__wrapper}`}>
      <div className={`${styles.form}`}>
        <FormHeader headerTitle="Create an account and discover the benefits" />
        <form className={`${styles.signup__form}`}>
          <InputComponent name="FirstName" placeholder="First Name" />
          <InputComponent name="LastName" placeholder="Last Name" />
          <InputComponent name="email" type="email" placeholder="Email" />
          <PasswordInputComponent name="password" placeholder="Password" />
          <SignupFormButtons
            buttonText="Sign up"
            linkTo="/login"
            switchFormButtonText="Already have an account? Login"
          />
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
