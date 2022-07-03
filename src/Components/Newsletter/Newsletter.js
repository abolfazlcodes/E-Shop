import styles from "./Newsletter.module.css";
import newsletter from "../../assets/newsletter1.jpg";

const Newsletter = () => {
  return (
    <section className={`${styles.newsletter__wrapper}`}>
      <article className={`${styles.newsletter}`}>
        <div className={`${styles.overlay}`}></div>
        <div className={`${styles.newsletter__image}`}>
          <img
            src={newsletter}
            alt="banner image"
            className={`${styles.newsletter__img}`}
          />
        </div>
        <div className={`${styles.newsletter__header}`}>
          <h2 className={`${styles.newsletter__title}`}>
            Subscribe to our newsletter and receive exclusive offers every week
          </h2>
        </div>
        <div className={`${styles.newsletter__form}`}>
          <input
            type="email"
            className={`${styles.newsletter__form__input}`}
            placeholder="Enter your email"
          />
          <button className={`${styles.newsletter__form__btn}`}>
            subscribe
          </button>
        </div>
      </article>
    </section>
  );
};

export default Newsletter;
