import AllProductsHeader from "./AllProductsHeader/AllProductsHeader";
import styles from "./AllProductsWrapper.module.css";
import Filters from "../Filters/Filters";
import Products from "./Products/Products";
import { useState } from "react";

const AllProductsWrapper = () => {
  const [filtersHide, setFiltersHide] = useState(true);

  const showFiltersHandler = () => {
    setFiltersHide(!filtersHide);
  };

  return (
    <div className={`${styles.wrapper}`}>
      <AllProductsHeader showFiltersHandler={showFiltersHandler} />
      <Filters filtersHide={filtersHide} />
      <Products />
    </div>
  );
};

export default AllProductsWrapper;
