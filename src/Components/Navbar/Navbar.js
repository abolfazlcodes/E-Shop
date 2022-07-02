import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import {
  MdShoppingCart,
  MdOutlinePersonOutline,
  MdOutlineMenu,
} from "react-icons/md";
import { useState } from "react";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
  const [hideMenu, setHideMenue] = useState(false);

  const showMenuHandler = () => {
    setHideMenue(!hideMenu);
  };

  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.logo__wrapper}`}>
        <img src={logo} alt="Logo Image" className={`${styles.logo__image}`} />
        <span className={`${styles.logo__name}`}>E-Shop</span>
      </div>

      <ul
        className={`${styles.nav__items} ${
          hideMenu ? styles.active : styles.nav__items
        }`}
      >
        <NavLink
          className={`${styles.nav__item}`}
          to={{ pathname: "/products", search: "categories=men" }}
        >
          Men
        </NavLink>
        <NavLink
          className={`${styles.nav__item}`}
          to={{ pathname: "/products", search: "categories=women" }}
        >
          Women
        </NavLink>
        <NavLink
          className={`${styles.nav__item}`}
          to={{ pathname: "/products", search: "categories=shoes" }}
        >
          Shoes
        </NavLink>
      </ul>

      <div className={`${styles.action__btns}`}>
        <span className={`${styles.btns} ${styles.cart__btn}`}>
          <NavLink to="/cart">
            <IconContext.Provider value={{ color: "#161513" }}>
              <MdShoppingCart className={`${styles.icons}`} />
            </IconContext.Provider>
          </NavLink>
        </span>
        <span className={`${styles.btns} ${styles.menu__btn}`}>
          <IconContext.Provider value={{ color: "#161513" }}>
            <MdOutlinePersonOutline
              className={`${styles.icons} ${styles.user__icon}`}
            />
            <MdOutlineMenu
              className={`${styles.icons} ${styles.menu__icon}`}
              onClick={showMenuHandler}
            />
          </IconContext.Provider>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
