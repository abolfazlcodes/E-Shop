import styles from "./AllProductsHeader.module.css";
import { FaFilter } from "react-icons/fa";

const AllProductsHeader = ({ showFiltersHandler }) => {
  return (
    <header className={`${styles.wrapper__header}`}>
      <h1 className={`${styles.products__header__title}`}>Men's tops</h1>
      <span className={`${styles.filters__btn}`}>
        <FaFilter className={`${styles.icons}`} onClick={showFiltersHandler} />
      </span>
    </header>
  );
};

export default AllProductsHeader;
