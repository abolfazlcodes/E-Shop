import styles from "./LoginWithAccountsBtn.module.css";

const LoginWithAccountsBtn = ({ logo, name, style }) => {
  return (
    <div className={`${styles.loginWithAccountBtn} ${style}`}>
      <img src={logo} alt={name} />
      <a className={`${styles.loginWithAccountBtnName}`}>{name}</a>
    </div>
  );
};

export default LoginWithAccountsBtn;
