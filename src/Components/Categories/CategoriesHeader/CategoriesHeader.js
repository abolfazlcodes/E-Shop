import styles from "./CategoriesHeader.module.css";

const CategoriesHeader = () => {
  return (
    <header className={`${styles.top__categories__header}`}>
      <h1 className={`${styles.title}`}>Selected just for you</h1>
      <a className={`${styles.top__categories__btn}`} href="#go to products">
        show more
      </a>
    </header>
  );
};

export default CategoriesHeader;
