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
import { useAuth } from "../../Context/useAuthContext/AuthProvider";

const Navbar = () => {
  const [hideMenu, setHideMenue] = useState(false);
  const userData = useAuth();

  const showMenuHandler = () => {
    setHideMenue(!hideMenu);
  };

  return (
    <nav className={`${styles.navbar}`}>
      <div>
        <NavLink className={`${styles.logo__wrapper}`} to="/">
          <img
            src={logo}
            alt="Logo Image"
            className={`${styles.logo__image}`}
          />
          <span className={`${styles.logo__name}`}>E-Shop</span>
        </NavLink>
      </div>

      <ul
        className={`${styles.nav__items} ${
          hideMenu ? styles.active : styles.nav__items
        }`}
      >
        <NavLink
          className={`${styles.nav__item}`}
          to={{ pathname: "/products", search: "categories=all" }}
        >
          All
        </NavLink>
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
            {userData ? (
              <span className={`${styles.userName}`}>{userData.name}</span>
            ) : (
              <NavLink to="/login">
                <MdOutlinePersonOutline
                  className={`${styles.icons} ${styles.user__icon}`}
                />
              </NavLink>
            )}
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
