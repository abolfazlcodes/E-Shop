import styles from "./SearchFilter.module.css";

const SearchFilter = () => {
  return (
    <div className={`${styles.filter__box} ${styles.search__filter}`}>
      <header className={`${styles.filter__box__header}`}>
        <h1 className={`${styles.filter__box__title}`}>Search:</h1>
      </header>
      <div className={`${styles.filter__box__options}`}>
        <input
          name="search"
          type="text"
          id="search"
          className={`${styles.signup__form__input}`}
          placeholder="Search product"
        />
      </div>
    </div>
  );
};

export default SearchFilter;
