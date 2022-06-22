import styles from "./Navbar.module.css";
import logo from "../../assets/logo-white.svg";
import logoBlack from "../../assets/Logo.svg";
import {
  MdShoppingCart,
  MdOutlinePersonOutline,
  MdOutlineMenu,
} from "react-icons/md";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.logo__wrapper}`}>
        <img src={logo} alt="Logo Image" className={`${styles.logo__image}`} />
        <span className={`${styles.logo__name}`}>E-Shop</span>
      </div>

      <ul className={`${styles.nav__items}`}>
        <li className={`${styles.nav__item}`}>men</li>
        <li className={`${styles.nav__item}`}>women</li>
        <li className={`${styles.nav__item}`}>kids</li>
      </ul>

      <div className={`${styles.action__btns}`}>
        <span className={`${styles.btns} ${styles.cart__btn}`}>
          <MdShoppingCart className={`${styles.icons}`} />
        </span>
        <span className={`${styles.btns} ${styles.menu__btn}`}>
          <MdOutlinePersonOutline className={`${styles.icons}`} />
          <MdOutlineMenu className={`${styles.icons}`} />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
