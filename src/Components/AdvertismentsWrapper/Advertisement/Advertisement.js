import styles from "./Advertisement.module.css";

const Advertisment = ({
  advertismentImage,
  advertismentTitle,
  advertismentTitle2,
  advertismentBtnText,
}) => {
  return (
    <article className={`${styles.advertisment}`}>
      <div className={`${styles.advertisment__image}`}>
        <img
          src={advertismentImage}
          alt="advertisment-1"
          className={`${styles.advertisment__img}`}
        />
      </div>
      <div className={`${styles.overlay}`}></div>
      <div className={`${styles.advertisment__detail}`}>
        <h2 className={`${styles.advertisment__detail__title}`}>
          {advertismentTitle}
          <br />
          {advertismentTitle2}
        </h2>
        <a href="#" className={`${styles.advertisment__detail__btn}`}>
          {advertismentBtnText}
        </a>
      </div>
    </article>
  );
};

export default Advertisment;
