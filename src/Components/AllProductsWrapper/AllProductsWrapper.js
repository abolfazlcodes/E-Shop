import AllProductsHeader from "./AllProductsHeader/AllProductsHeader";
import styles from "./AllProductsWrapper.module.css";
import Filters from "../Filters/Filters";
import Products from "./Products/Products";
import { useEffect, useState } from "react";

const AllProductsWrapper = () => {
  const [filtersHide, setFiltersHide] = useState(true);
  const [size, setSize] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [price, setPrice] = useState(35);
  const [filterTag, setFilterTage] = useState("");

  const sizeChangeHandler = (e) => {
    setSize(e.target.innerText);
    setFilterTage("size");
  };

  const priceChangeHandler = (e) => {
    const priceData = e.target.value;
    setPrice(priceData);
    setFilterTage("price");
  };

  const searchQueryChangeHander = (e) => {
    setSearchQuery(e.target.value);
    setFilterTage("search");
  };

  const showFiltersHandler = () => {
    setFiltersHide(!filtersHide);
  };

  return (
    <div className={`${styles.wrapper}`}>
      <AllProductsHeader showFiltersHandler={showFiltersHandler} />
      <Filters
        filtersHide={filtersHide}
        size={size}
        price={price}
        priceChangeHandler={priceChangeHandler}
        sizeChangeHandler={sizeChangeHandler}
        searchQuery={searchQuery}
        searchQueryChangeHander={searchQueryChangeHander}
      />
      <Products
        size={size}
        price={price}
        query={searchQuery}
        filterTag={filterTag}
      />
    </div>
  );
};

export default AllProductsWrapper;
