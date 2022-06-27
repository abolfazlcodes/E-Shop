import HeroSection from "../../Components/HeroSection/HeroSection";
import AdvertismentWrapper from "../../Components/AdvertismentsWrapper/AdvertismentWrapper";
import WhyChooseUsWrapper from "../../Components/WhyChooseUs/WhyChooseUsWrapper";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Layout from "../../Layout/Layout";
import CategoriesWrapper from "../../Components/Categories/CategoriesWrapper";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <AdvertismentWrapper />
      <CategoriesWrapper />
      <WhyChooseUsWrapper />
      <Newsletter />
    </Layout>
  );
};

export default HomePage;
