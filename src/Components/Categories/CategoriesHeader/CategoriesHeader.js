import styles from "./CategoriesHeader.module.css";
import { NavLink } from "react-router-dom";

const CategoriesHeader = () => {
  return (
    <header className={`${styles.top__categories__header}`}>
      <h1 className={`${styles.title}`}>Selected just for you</h1>
      <NavLink className={`${styles.top__categories__btn}`} to="/products">
        show more
      </NavLink>
    </header>
  );
};

export default CategoriesHeader;
