import styles from "./Category.module.css";

const Category = ({ image, title }) => {
  return (
    <article className={`${styles.category}`}>
      <div className={`${styles.category__image}`}>
        <img src={image} alt="" className={`${styles.category__img}`} />
      </div>
      <div className={`${styles.overlay}`}></div>
      <div className={`${styles.category__details}`}>
        <h2 className={`${styles.category__title}`}>{title}</h2>
      </div>
    </article>
  );
};

export default Category;
