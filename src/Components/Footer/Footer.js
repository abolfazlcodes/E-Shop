import styles from "./Footer.module.css";
import logo from "../../assets/Logo.svg";
import facebook from "../../assets/002-facebook-logo.svg";
import twitter from "../../assets/001-twitter-logo-silhouette.svg";
import linkdin from "../../assets/004-linkedin-logo.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/005-youtube.svg";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.company__information}`}>
        <header className={`${styles.company__logo}`}>
          <div className={`${styles.logo__wrapper}`}>
            <img src={logo} alt="E-shop logo" className={`${styles.logo}`} />
          </div>
          <div className={`${styles.company__information__name}`}>
            <span className={`${styles.company__name}`}>E-Shop</span>
          </div>
        </header>

        <p className={`${styles.company__information__description}`}>
          House My Brand designs clothing for the young, the old & everyone in
          between – but most importantly, for the fashionable
        </p>

        <article className={`${styles.company__socials}`}>
          <div className={`${styles.company__social}`}>
            <a href="" className={`${styles.social}`}>
              <img src={facebook} alt="facebook" />
            </a>
          </div>
          <div className={`${styles.company__social}`}>
            <a href="" className={`${styles.social}`}>
              <img src={twitter} alt="twitter" />
            </a>
          </div>
          <div className={`${styles.company__social}`}>
            <a href="" className={`${styles.social}`}>
              <img src={linkdin} alt="linkedin" />
            </a>
          </div>
          <div className={`${styles.company__social}`}>
            <a href="" className={`${styles.social}`}>
              <img src={instagram} alt="instagram" />
            </a>
          </div>
          <div className={`${styles.company__social}`}>
            <a href="" className={`${styles.social}`}>
              <img src={youtube} alt="youtube" />
            </a>
          </div>
        </article>
      </div>
      <div className={`${styles.links__wrapper}`}>
        <div className={`${styles.links} ${styles.shopping__links}}`}>
          <header className={`${styles.links__header}`}>
            <span className={`${styles.links__title}`}>Shopping online</span>
          </header>
          <div className={`${styles.links__options}`}>
            <a href="" className={`${styles.link}`}>
              Order Status
            </a>
            <a href="" className={`${styles.link}`}>
              Shopping and Deliver
            </a>
            <a href="" className={`${styles.link}`}>
              Returns
            </a>
            <a href="" className={`${styles.link}`}>
              Payment Options
            </a>
            <a href="" className={`${styles.link}`}>
              Contact Us
            </a>
          </div>
        </div>

        <div className={`${styles.links} ${styles.information__links}`}>
          <header className={`${styles.links__header}`}>
            <span className={`${styles.links__title}`}>Information</span>
          </header>
          <div className={`${styles.links__options}`}>
            <a href="" className={`${styles.link}`}>
              Gift Cards
            </a>
            <a href="" className={`${styles.link}`}>
              Find a Store
            </a>
            <a href="" className={`${styles.link}`}>
              Newsletter
            </a>
            <a href="" className={`${styles.link}`}>
              Become a Member
            </a>
            <a href="" className={`${styles.link}`}>
              Site Feedback
            </a>
          </div>
        </div>

        <div className={`${styles.links} ${styles.contact__links}`}>
          <header className={`${styles.links__header}`}>
            <span className={`${styles.links__title}`}>Contact</span>
          </header>
          <div className={`${styles.links__options}`}>
            <span className={`${styles.link}`}>store@eshop.com</span>
            <span className={`${styles.link}`}>Hotline: +1 111 111 111</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
