import styles from "../SignupForm/SignupForm.module.css";
import FormHeader from "../FormHeader/FormHeader";
import InputComponent from "../InputComponent/InputComponent";
import LoginWithAccountsBtnsWrapper from "../LoginWithAccountsButtonsWrapper/LoginWithAccountsBtnsWrapper";
import PasswordInputComponent from "../PasswordInput/PasswordInputComponent";
import SignupFormButtons from "../SignupForm/SignupFormButtons/SignupFormButtons";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
  // axios
  //   .post(`http://localhost:3001/users`, values)
  //   .then((res) => notify.show("Toasty!"))
  //   .catch((err) => console.log(err));
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className={`${styles.signup__wrapper}`}>
      <div className={`${styles.form}`}>
        <FormHeader headerTitle="Login to your account" />
        <form className={`${styles.signup__form}`}>
          <InputComponent
            formik={formik}
            name="email"
            type="email"
            placeholder="email"
          />
          <PasswordInputComponent
            formik={formik}
            name="password"
            placeholder="password"
          />
          <LoginWithAccountsBtnsWrapper />
          <SignupFormButtons
            buttonText="Sign in"
            linkTo="/signup"
            switchFormButtonText="Not a member yet? Sign up"
            formik={formik}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
