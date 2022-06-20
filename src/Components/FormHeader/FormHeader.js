import styles from "./SignupFormHeader.module.css";

const FormHeader = () => {
  return (
    <header className={`${styles.form__header}`}>
      <h1 className={`${styles.form__title}`}>
        Create an account and discover the benefits
      </h1>
    </header>
  );
};

export default FormHeader;
