const SearchFilter = () => {
  return (
    <div className={`${styles.filter__box} ${styles.search__filter}`}>
      <header className={`${styles.filter__box__header}`}>
        <h1 className={`${styles.filter__box__title}`}>Search:</h1>
      </header>
      <div className={`${styles.filter__box__options}`}>
        <InputComponent name="searchQuery" type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchFilter;
