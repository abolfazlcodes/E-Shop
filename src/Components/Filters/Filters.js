import styles from "./Filters.module.css";
import SearchFilter from "./SearchFilter/SearchFilter";
import SizeFilter from "./SizeFilter/SizeFilter";

const Filters = ({ filtersHide }) => {
  return (
    <div
      className={filtersHide ? `${styles.filters}` : ` ${styles.filtersActive}`}
    >
      <SearchFilter />
      <SizeFilter />
    </div>
  );
};

export default Filters;
