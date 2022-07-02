import styles from "./NotFoundPage.module.css";
import ghost from "../../assets/ghost.png";
import { NavLink } from "react-router-dom";

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
          <NavLink className={`${styles.home__button}`} to="/">
            Go Home
          </NavLink>
        </div>

        <div className={`${styles.home__img}`}>
          <img src={ghost} alt="ghost" />
          <div className={`${styles.home__shadow}`}></div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
