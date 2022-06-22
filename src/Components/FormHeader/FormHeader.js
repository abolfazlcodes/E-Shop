import styles from "./FormHeader.module.css";

const FormHeader = ({ headerTitle }) => {
  return (
    <header className={`${styles.form__header}`}>
      <h1 className={`${styles.form__title}`}>{headerTitle}</h1>
    </header>
  );
};

export default FormHeader;
