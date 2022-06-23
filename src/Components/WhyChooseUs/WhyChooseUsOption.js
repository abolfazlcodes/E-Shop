import styles from "./WhyChooseUsOption.module.css";

const WhyChooseUsOption = ({ image, title, description }) => {
  return (
    <article className={`${styles.whyChooseUs__option}`}>
      <div className={`${styles.whyChooseUs__option__image}`}>
        <img
          src={image}
          alt=""
          className={`${styles.whyChooseUs__option__img}`}
        />
      </div>
      <div className={`${styles.whyChooseUs__option__details}`}>
        <h3 className={`${styles.whyChooseUs__option__title}`}>{title}</h3>
        <span className={`${styles.whyChooseUs__option__des}`}>
          {description}
        </span>
      </div>
    </article>
  );
};

export default WhyChooseUsOption;
