import { useState } from "react";
import styles from "./Filters.module.css";
import PriceFilter from "./PriceFilter/PriceFilter";
import SearchFilter from "./SearchFilter/SearchFilter";
import SizeFilter from "./SizeFilter/SizeFilter";

const Filters = ({
  filtersHide,
  size,
  price,
  priceChangeHandler,
  sizeChangeHandler,
  searchQuery,
  searchQueryChangeHander,
}) => {
  return (
    <div
      className={filtersHide ? `${styles.filters}` : ` ${styles.filtersActive}`}
    >
      <SearchFilter
        query={searchQuery}
        searchQueryChangeHander={searchQueryChangeHander}
      />
      <PriceFilter price={price} priceChangeHandler={priceChangeHandler} />
      <SizeFilter size={size} sizeChangeHandler={sizeChangeHandler} />
    </div>
  );
};

export default Filters;
