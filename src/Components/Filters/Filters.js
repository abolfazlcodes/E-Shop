import styles from "./Filters.module.css";
import SearchFilter from "./SearchFilter/SearchFilter";
import SizeFilter from "./SizeFilter/SizeFilter";

const Filters = () => {
  return (
    <div className={`${styles.filter}`}>
      <SearchFilter />
      <SizeFilter />
    </div>
  );
};

export default Filters;
