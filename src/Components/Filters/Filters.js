import styles from "./Filters.module.css";
import PriceFilter from "./PriceFilter/PriceFilter";
import SearchFilter from "./SearchFilter/SearchFilter";
import SizeFilter from "./SizeFilter/SizeFilter";

const Filters = ({ filtersHide }) => {
  return (
    <div
      className={filtersHide ? `${styles.filters}` : ` ${styles.filtersActive}`}
    >
      <SearchFilter />
      <PriceFilter />
      <SizeFilter />
    </div>
  );
};

export default Filters;
