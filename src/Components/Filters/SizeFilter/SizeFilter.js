import styles from "./SizeFilter.module.css";

const SizeFilter = () => {
  return (
    <div className={`${styles.filter__box} ${styles.size__filter}`}>
      <header className={`${styles.filter__box__header}`}>
        <h1 className={`${styles.filter__box__title}`}>Size:</h1>
      </header>
      <div className={`${styles.filter__box__options}`}>
        <span className={`${styles.filter__box__option} ${styles.active}`}>
          xs
        </span>
        <span className={`${styles.filter__box__option}`}>s</span>
        <span className={`${styles.filter__box__option}`}>m</span>
        <span className={`${styles.filter__box__option}`}>l</span>
        <span className={`${styles.filter__box__option}`}>xl</span>
        <span className={`${styles.filter__box__option}`}>xxl</span>
      </div>
    </div>
  );
};

export default SizeFilter;
