import styles from "./WhyChooseUsWrapper.module.css";
import WhyChooseUsOption from "./WhyChooseUsOption";
import optionImage1 from "../../assets/icon5.jpg";
import optionImage2 from "../../assets/icon6.jpg";
import optionImage3 from "../../assets/icon7.jpg";
import optionImage4 from "../../assets/icon8.jpg";

const WhyChooseUsWrapper = () => {
  return (
    <section className={`${styles.whyChooseUs}`}>
      <header className={`${styles.whyChooseUs__header}`}>
        <h2 className={`${styles.whyChooseUs__title}`}>
          Why should you choose us?
        </h2>
      </header>

      <div className={`${styles.whyChooseUs__options}`}>
        <WhyChooseUsOption
          image={optionImage1}
          title="Free Shipping"
          description="All purchases over $99 are eligible for free shipping via USPS
              First Class Mail."
        />
        <WhyChooseUsOption
          image={optionImage2}
          title="Easy Payments"
          description=" All payments are processed instantly over a secure payment
              protocol."
        />
        <WhyChooseUsOption
          image={optionImage3}
          title="Money-Back Guarantee"
          description="If an item arrived damaged or you've changed your mind, you can
          send it back for a full refund."
        />
        <WhyChooseUsOption
          image={optionImage4}
          title="Finest Quality"
          description="Designed to last, each of our products has been crafted with the
          finest materials."
        />
      </div>
    </section>
  );
};

export default WhyChooseUsWrapper;
