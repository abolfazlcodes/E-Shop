import HeroSection from "../../Components/HeroSection/HeroSection";
import AdvertismentWrapper from "../../Components/AdvertismentsWrapper/AdvertismentWrapper";
import WhyChooseUsWrapper from "../../Components/WhyChooseUs/WhyChooseUsWrapper";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AdvertismentWrapper />
      <WhyChooseUsWrapper />
      <Newsletter />
      <Footer />
    </>
  );
};

export default HomePage;
