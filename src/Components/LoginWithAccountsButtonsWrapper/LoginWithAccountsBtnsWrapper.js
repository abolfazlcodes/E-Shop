import styles from "./LoginWithAccountsBtnsWrapper.module.css";
import LoginWithAccountsBtn from "./LoginWithAccountsButtons/LoginWithAccountsBtn";
import facebookLogo from "../../assets/facebook.png";
import gmailLogo from "../../assets/gmail.png";

const LoginWithAccountsBtnsWrapper = () => {
  return (
    <div className={`${styles.LoginWithAccountsBtnWrapper}`}>
      <LoginWithAccountsBtn
        logo={facebookLogo}
        name="Facebook"
        style={styles.facebookStyle}
      />
      <LoginWithAccountsBtn
        logo={gmailLogo}
        name="Gmail"
        style={styles.gmail}
      />
    </div>
  );
};

export default LoginWithAccountsBtnsWrapper;
