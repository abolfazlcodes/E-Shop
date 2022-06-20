import styles from "./AdvertismentWrapper.module.css";
import Advertisment from "./Advertisement/Advertisement";
import advertismentImage1 from "../../assets/advertisment-1.jpg";
import advertismentImage2 from "../../assets/advertisment-2.jpg";
import advertismentImage3 from "../../assets/advertisment-3.jpg";

const AdvertismentWrapper = () => {
  return (
    <section className={`${styles.advertisments__wrapper}`}>
      <div className={`${styles.advertisments}`}>
        <Advertisment
          advertismentImage={advertismentImage1}
          advertismentTitle="New arrivals"
          advertismentTitle2="are now in!"
          advertismentBtnText="Show collection"
        />
        <Advertisment
          advertismentImage={advertismentImage2}
          advertismentTitle="Basic t-shirts"
          advertismentTitle2="$29,99"
          advertismentBtnText="More details"
        />
        <Advertisment
          advertismentImage={advertismentImage3}
          advertismentTitle="Sale this "
          advertismentTitle2="summer"
          advertismentBtnText="View all"
        />
      </div>
    </section>
  );
};

export default AdvertismentWrapper;
