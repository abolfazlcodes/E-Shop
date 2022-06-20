import styles from "./WhyChooseUsOption.module.css";

const WhyChooseUsOption = ({ image, title, description }) => {
  return (
    <article class={`${styles.whyChooseUs__option}`}>
      <div class={`${styles.whyChooseUs__option__image}`}>
        <img src={image} alt="" class={`${styles.whyChooseUs__option__img}`} />
      </div>
      <div class={`${styles.whyChooseUs__option__details}`}>
        <h3 class={`${styles.whyChooseUs__option__title}`}>{title}</h3>
        <span class={`${styles.whyChooseUs__option__des}`}>{description}</span>
      </div>
    </article>
  );
};

export default WhyChooseUsOption;
