import styles from "./LoginWithAccountsBtn.module.css";
import { NavLink } from "react-router-dom";

const LoginWithAccountsBtn = ({ logo, name, style, linkTo }) => {
  return (
    <NavLink to={linkTo} className={`${styles.loginWithAccountBtn} ${style}`}>
      <img src={logo} alt={name} />
      <span className={`${styles.loginWithAccountBtnName}`}></span>
      {name}
    </NavLink>
  );
};

export default LoginWithAccountsBtn;
