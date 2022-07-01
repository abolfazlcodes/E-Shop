import { useState } from "react";
import styles from "./Filters.module.css";
import PriceFilter from "./PriceFilter/PriceFilter";
import SearchFilter from "./SearchFilter/SearchFilter";
import SizeFilter from "./SizeFilter/SizeFilter";

const Filters = ({ filtersHide }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [price, setPrice] = useState({
    minimumPrice: 0,
    maximumPrice: 50,
  });
  const [size, setSize] = useState("");

  const sizeChangeHandler = (e) => {
    setSize(e.target.innerText);
  };

  const priceChangeHandler = (e) => {
    const priceData = { [e.target.name]: e.target.value };
    console.log(priceData);
    setPrice({ ...price, ...priceData });
  };

  const searchQueryChangeHander = (e) => {
    setSearchQuery(e.target.value);
  };

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
      <button className={`${styles.submitFilter__btn}`}>Apply Filters</button>
    </div>
  );
};

export default Filters;
