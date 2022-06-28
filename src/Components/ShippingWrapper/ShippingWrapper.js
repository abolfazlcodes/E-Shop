import styles from "./ShippingWrapper.module.css";
import InputComponent from "../InputComponent/InputComponent";
import CountriesSelectBox from "../CountriesSelectBox/CountriesSelectBox";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  city: "",
  phone: "",
  ZIP: "",
  address: "",
};

const onSubmit = (values) => {
  console.log(values);
  // axios
  //   .post(`http://localhost:3001/users`, values)
  //   .then((res) => notify.show("Toasty!"))
  //   .catch((err) => console.log(err));
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
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{11}$/, "Invalid phone number")
    .nullable(),
  address: yup.object().default(null).nullable().shape({
    country: yup.string().required(),
    state: yup.string().required(),
    city: yup.string().required(),
  }),
});

const ShippingWrapper = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  console.log(formik.values);

  return (
    <div className={`${styles.shipping}`}>
      <form
        className={`${styles.shipping__form}`}
        onSubmit={formik.handleSubmit}
      >
        <InputComponent
          formik={formik}
          name="firstName"
          placeholder="Beatrice"
        />
        <InputComponent formik={formik} name="lastName" placeholder="Waddle" />
        <InputComponent
          formik={formik}
          name="address"
          placeholder="1391 Signle Street"
        />
        <InputComponent formik={formik} name="city" placeholder="Chicago" />
        <InputComponent formik={formik} name="ZIP" placeholder="MA 02129" />
        <InputComponent
          formik={formik}
          name="phone"
          type="tel"
          placeholder="09111111111"
        />
        <CountriesSelectBox />
        <InputComponent
          formik={formik}
          name="email"
          type="email"
          placeholder="BeatriceLWaddle@rhyta.com"
        />
      </form>
    </div>
  );
};

export default ShippingWrapper;
