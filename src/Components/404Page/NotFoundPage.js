import styles from "./NotFoundPage.module.css";
import ghost from "../../assets/ghost-img.png";

const NotFoundPage = () => {
  return (
    <section className={`${styles.home}`}>
      <div className={`${styles.home__container}`}>
        <div className={`${styles.home__data}`}>
          <span className={`${styles.home__subtitle}`}>Error 404</span>
          <h1 className={`${styles.home__title}`}>Hey Buddy</h1>
          <p className={`${styles.home__description}`}>
            We can't seem to find the page <br />
            you are looking for.
          </p>
          <a href="#" className={`${styles.home__button}`}>
            Go Home
          </a>
        </div>

        <div className={`${styles.home__img}`}>
          <img src={ghost} alt="ghost image" />
          <div className={`${styles.home__shadow}`}></div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
