import styles from "./CategoriesWrapper.module.css";
import Category from "./Category/Category";
import CategoriesHeader from "./CategoriesHeader/CategoriesHeader";
import womenImage from "../../assets/women-clothes.jpg";
import menImage from "../../assets/men-clothes.jpg";
import shoesImage from "../../assets/shoes.jpg";
import jeansImage from "../../assets/jeans.jpg";
import skirtsImage from "../../assets/skirts.jpg";

const CategoriesWrapper = () => {
  return (
    <section className={`${styles.top__categories}`}>
      <CategoriesHeader />
      <div className={`${styles.top__categories__wrapper}`}>
        <Category image={womenImage} title="Top women's clothes" />
        <Category image={menImage} title="Top men's clothes" />
        <Category image={shoesImage} title="Top shoes" />
        <Category image={jeansImage} title="Top jeans" />
        <Category image={skirtsImage} title="Top skirts" />
      </div>
    </section>
  );
};

export default CategoriesWrapper;
