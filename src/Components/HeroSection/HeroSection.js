import styles from "./HeroSection.module.css";
import Navbar from "../Navbar/Navbar";
import backgroundImage1 from "../../assets/hero-cover-1.jpg";
import backgroundImage2 from "../../assets/hero-cover-2.jpg";
import backgroundImage3 from "../../assets/hero-cover-3.jpg";

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
        <a href="#" className={`${styles.btns} ${styles.shop__btn}`}>
          Shop now
        </a>
      </header>
    </section>
  );
};

export default HeroSection;
