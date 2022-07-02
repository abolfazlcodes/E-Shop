import styles from "../SignupForm/SignupForm.module.css";
import FormHeader from "../FormHeader/FormHeader";
import InputComponent from "../InputComponent/InputComponent";
import LoginWithAccountsBtnsWrapper from "../LoginWithAccountsButtonsWrapper/LoginWithAccountsBtnsWrapper";
import PasswordInputComponent from "../PasswordInput/PasswordInputComponent";
import SignupFormButtons from "../SignupForm/SignupFormButtons/SignupFormButtons";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { loginUser } from "../../Services/loginService";
import { useNavigate } from "react-router-dom";
import {
  useAuth,
  useAuthActions,
} from "../../Context/useAuthContext/AuthProvider";
import { useQuery } from "../../Hooks/useQuery";
import { toast } from "react-toastify";

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
  const query = useQuery();
  const redirect = query.get("redirect") || "/"; //default redirect in case there was not any
  const isAuth = useAuth();

  const [errorMessage, setErrorMessage] = useState(null);
  const setAuth = useAuthActions();

  useEffect(() => {
    if (isAuth) {
      navigate(`/${redirect}`);
    }
  }, [isAuth, redirect]);

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setAuth(data);
      localStorage.setItem("authState", JSON.stringify(data));
      setErrorMessage(null);
      navigate(`${redirect}`);
      toast.success("Logged in successfully");
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
        toast.error(errorMessage);
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
            linkTo={`/signup?redirect=${redirect}`}
            switchFormButtonText="Not a member yet? Sign up"
            formik={formik}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
