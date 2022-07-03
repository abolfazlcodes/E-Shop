import styles from "./HeroSection.module.css";
import backgroundImage1 from "../../assets/hero-cover.jpg";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className={`${styles.hero__section}`}>
      <div className={`${styles.backgrounds}`}>
        <img
          src={backgroundImage1}
          alt=""
          className={`${styles.background__image}`}
        />
        <div className={`${styles.overlay}`}></div>
      </div>
      <header className={`${styles.hero__header}`}>
        <h1 className={`${styles.hero__header__title}`}>
          Sale of the summer collection
        </h1>
        <NavLink
          className={`${styles.btns} ${styles.shop__btn}`}
          to="/products"
        >
          Shop now
        </NavLink>
      </header>
    </section>
  );
};

export default HeroSection;
