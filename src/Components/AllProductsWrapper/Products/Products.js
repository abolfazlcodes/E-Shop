import styles from "./Products.module.css";
import Product from "../../Product/Product";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../../redux/products/productsActions";

const Products = () => {
  const productsData = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { loading, products, error } = productsData;
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const render = (loading, products, error) => {
    if (loading) return <p>Loading products. Please wait ...</p>;

    if (!loading && error) return <p>{error}</p>;

    if (products && products.length) {
      return products.map((product) => {
        return <Product product={product} key={product._id} />;
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
