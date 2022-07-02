import styles from "./PriceFilter.module.css";

const PriceFilter = ({ price, priceChangeHandler }) => {
  return (
    <div className={`${styles.filter__box} `}>
      <header className={`${styles.filter__box__header}`}>
        <h1 className={`${styles.filter__box__title}`}>Price:</h1>
      </header>
      <div className={`${styles.filter__box__options}`}>
        <div className={`${styles.filter__box__option}`}>
          <label>From: ${price}</label>
          <input
            type="range"
            name="maximumPrice"
            id="maximumPrice"
            min="35"
            max="100"
            value={price}
            onChange={priceChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
