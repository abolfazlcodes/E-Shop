import { useState } from "react";
import styles from "./PriceFilter.module.css";

const PriceFilter = () => {
  const [price, setPrice] = useState({
    minimumPrice: 0,
    maximumPrice: 50,
  });

  const priceChangeHandler = (e) => {
    const priceData = { [e.target.name]: e.target.value };
    console.log(priceData);
    setPrice({ ...price, ...priceData });
  };

  return (
    <div className={`${styles.filter__box} `}>
      <header className={`${styles.filter__box__header}`}>
        <h1 className={`${styles.filter__box__title}`}>Price:</h1>
      </header>
      <div className={`${styles.filter__box__options}`}>
        <div className={`${styles.filter__box__option}`}>
          <label>From: {price.minimumPrice}</label>
          <input
            type="range"
            name="minimumPrice"
            id="minimumPrice"
            min="0"
            max="100"
            value={price.minimumPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div className={`${styles.filter__box__option}`}>
          <label>To: {price.maximumPrice}</label>
          <input
            type="range"
            name="maximumPrice"
            id="maximumPrice"
            min="50"
            max="400"
            value={price.maximumPrice}
            onChange={priceChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
