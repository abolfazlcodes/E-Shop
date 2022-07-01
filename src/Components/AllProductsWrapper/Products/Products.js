import styles from "./Products.module.css";
import Product from "../../Product/Product";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../../redux/products/productsActions";
import { useLocation } from "react-router-dom";

const Products = () => {
  const productsData = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { loading, products, error } = productsData;
  // console.log(products);
  const { search } = useLocation();
  const category = search.split("=")[1];

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const render = (loading, products, error) => {
    if (loading) return <p>Loading products. Please wait ...</p>;

    if (!loading && error) return <p>{error}</p>;

    if (products && products.length) {
      return checkProductsCategory(products, category);
    }
  };

  const checkProductsCategory = (productsItems, categoryName) => {
    switch (categoryName) {
      case "men":
        const menProducts = productsItems.filter(
          (item) => item.category === "men"
        );

        // rendering the products
        return menProducts.map((item) => {
          return <Product product={item} key={item._id} />;
        });

      case "women":
        const womenProducts = productsItems.filter(
          (item) => item.category === "women"
        );
        return womenProducts.map((item) => {
          return <Product product={item} key={item._id} />;
        });

      case "shoes":
        const shoesProducts = productsItems.filter(
          (item) => item.category === "shoes"
        );
        return shoesProducts.map((item) => {
          return <Product product={item} key={item._id} />;
        });

      default:
        return productsItems.map((item) => {
          return <Product product={item} key={item._id} />;
        });
    }
  };

  return (
    <div className={`${styles.products__container}`}>
      <header className={`${styles.products__header}`}>
        <h1 className={`${styles.products__header__title}`}>Men's tops</h1>
      </header>
      <div className={`${styles.products}`}>
        {render(loading, products, error)}
      </div>
    </div>
  );
};

export default Products;
