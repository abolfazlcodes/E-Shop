import HeroSection from "../../Components/HeroSection/HeroSection";
import AdvertismentWrapper from "../../Components/AdvertismentsWrapper/AdvertismentWrapper";
import WhyChooseUsWrapper from "../../Components/WhyChooseUs/WhyChooseUsWrapper";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Layout from "../../Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <AdvertismentWrapper />
      <WhyChooseUsWrapper />
      <Newsletter />
    </Layout>
  );
};

export default HomePage;
