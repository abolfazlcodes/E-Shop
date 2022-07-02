import FormHeader from "../FormHeader/FormHeader";
import styles from "./SignupForm.module.css";
import InputComponent from "../InputComponent/InputComponent";
import SignupFormButtons from "./SignupFormButtons/SignupFormButtons";
import PasswordInputComponent from "../PasswordInput/PasswordInputComponent";
import InputCheckboxComponent from "../InputCheckboxComponent/InputCheckboxComponent";
import { useFormik } from "formik";
import * as yup from "yup";
import { signupUser } from "../../Services/signupService";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
  terms: false,
};

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required("Name is required")
    .min(6, "Name is shorter than 6 characters"),
  lastName: yup
    .string()
    .required("Name is required")
    .min(6, "Name is shorter than 6 characters"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{11}$/, "Invalid phone number")
    .nullable(),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})^/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirm: yup
    .string()
    .required("Password Confirmation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  terms: yup.boolean().required("Required.").oneOf([true], "Required."),
});

const SignupForm = () => {
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    const { firstName, lastName, email, password, phoneNumber } = values;

    // form values that need to be sent to database
    const userData = {
      name: `${firstName} ${lastName}`,
      email,
      password,
      phoneNumber,
    };

    try {
      const res = await signupUser(userData);
      setError(null);
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
        <FormHeader headerTitle="Create an account and discover the benefits" />
        <form
          className={`${styles.signup__form}`}
          onSubmit={formik.handleSubmit}
        >
          <InputComponent
            formik={formik}
            name="firstName"
            placeholder="First Name"
          />
          <InputComponent
            formik={formik}
            name="lastName"
            placeholder="Last Name"
          />
          <InputComponent
            formik={formik}
            name="email"
            type="email"
            placeholder="Email"
          />
          <InputComponent
            formik={formik}
            name="phoneNumber"
            type="tel"
            placeholder="09150000000"
          />
          <PasswordInputComponent
            formik={formik}
            name="password"
            placeholder="Password"
          />
          <PasswordInputComponent
            formik={formik}
            name="passwordConfirm"
            placeholder="Confirm Password"
          />
          <InputCheckboxComponent formik={formik} name="terms" />
          <SignupFormButtons
            buttonText="Sign up"
            linkTo="/login"
            switchFormButtonText="Already have an account? Login"
            formik={formik}
          />
        </form>
      </div>

      {error && <ErrorMessage error={error} />}
    </div>
  );
};

export default SignupForm;
