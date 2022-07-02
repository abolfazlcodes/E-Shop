import styles from "../SignupForm/SignupForm.module.css";
import FormHeader from "../FormHeader/FormHeader";
import InputComponent from "../InputComponent/InputComponent";
import LoginWithAccountsBtnsWrapper from "../LoginWithAccountsButtonsWrapper/LoginWithAccountsBtnsWrapper";
import PasswordInputComponent from "../PasswordInput/PasswordInputComponent";
import SignupFormButtons from "../SignupForm/SignupFormButtons/SignupFormButtons";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { loginUser } from "../../Services/loginService";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    try {
      await loginUser(values);
      setError(null);
      navigate("/products");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  };

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
        <form
          className={`${styles.signup__form}`}
          onSubmit={formik.handleSubmit}
        >
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
      {error && <ErrorMessage error={error} />}
    </div>
  );
};

export default LoginForm;
