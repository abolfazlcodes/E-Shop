import { useState } from "react";
import styles from "./SizeFilter.module.css";

const SizeFilter = ({ size, sizeChangeHandler }) => {
  return (
    <div className={`${styles.filter__box} ${styles.size__filter}`}>
      <header className={`${styles.filter__box__header}`}>
        <h1 className={`${styles.filter__box__title}`}>Size:</h1>
      </header>
      <div className={`${styles.filter__box__options}`}>
        <span
          onClick={sizeChangeHandler}
          className={`${styles.filter__box__option} ${
            size === "XS" && styles.active
          }`}
        >
          xs
        </span>
        <span
          onClick={sizeChangeHandler}
          className={`${styles.filter__box__option} ${
            size === "S" && styles.active
          } `}
        >
          s
        </span>
        <span
          onClick={sizeChangeHandler}
          className={`${styles.filter__box__option} ${
            size === "M" && styles.active
          } `}
        >
          m
        </span>
        <span
          onClick={sizeChangeHandler}
          className={`${styles.filter__box__option} ${
            size === "L" && styles.active
          } `}
        >
          l
        </span>
        <span
          onClick={sizeChangeHandler}
          className={`${styles.filter__box__option} ${
            size === "XL" && styles.active
          } `}
        >
          xl
        </span>
        <span
          onClick={sizeChangeHandler}
          className={`${styles.filter__box__option} ${
            size === "XXL" && styles.active
          } `}
        >
          xxl
        </span>
      </div>
    </div>
  );
};

export default SizeFilter;
