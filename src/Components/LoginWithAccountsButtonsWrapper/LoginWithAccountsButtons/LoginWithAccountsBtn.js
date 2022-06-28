import styles from "./LoginWithAccountsBtn.module.css";
import { NavLink } from "react-router-dom";

const LoginWithAccountsBtn = ({ logo, name, style, linkTo }) => {
  return (
    <div className={`${styles.loginWithAccountBtn} ${style}`}>
      <img src={logo} alt={name} />
      <NavLink to={linkTo} className={`${styles.loginWithAccountBtnName}`}>
        {name}
      </NavLink>
    </div>
  );
};

export default LoginWithAccountsBtn;
