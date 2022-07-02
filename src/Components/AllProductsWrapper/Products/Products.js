import styles from "./Products.module.css";
import Product from "../../Product/Product";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../../redux/products/productsActions";
import { useLocation } from "react-router-dom";

const Products = ({ size, price, query, filterTag }) => {
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
      return category
        ? checkProductsCategory(products, category)
        : renderFilteredProducts(products, filterTag);
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

  const renderFilteredProducts = (productsItems, options) => {
    switch (options) {
      case "search": {
        if (query === "") {
          return productsItems.map((item) => {
            return <Product product={item} key={item._id} />;
          });
        }
        // we need to filter based on products names.
        const filteredProducts = productsItems.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );

        return filteredProducts.map((item) => {
          return <Product product={item} key={item._id} />;
        });
      }
      case "price": {
        const minimumPrice = String(price);

        if (minimumPrice === "0") {
          return productsItems.map((item) => {
            return <Product product={item} key={item._id} />;
          });
        }

        if (minimumPrice === "100") {
          return <p>No products matched</p>;
        }

        const filteredProducts = productsItems.filter((item) => {
          return item.price >= minimumPrice;
        });

        console.log(filteredProducts);

        return filteredProducts.map((item) => {
          return <Product product={item} key={item._id} />;
        });
      }

      case "size": {
        const sizeValue = size;

        const filteredProducts = productsItems.filter(
          (item) => item.size === sizeValue
        );
        return filteredProducts.map((item) => {
          return <Product product={item} key={item._id} />;
        });
      }

      default:
        return productsItems.map((item) => {
          return <Product product={item} key={item._id} />;
        });
    }
  };

  return (
    <div className={`${styles.products__container}`}>
      <header className={`${styles.products__header}`}>
        <h1 className={`${styles.products__header__title}`}>
          Top clothes {category ? category : ""}
        </h1>
      </header>
      <div className={`${styles.products}`}>
        {render(loading, products, error)}
      </div>
    </div>
  );
};

export default Products;
