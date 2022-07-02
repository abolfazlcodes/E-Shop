import styles from "./Product.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  checkIfInfavouries,
  renderLikeIcon,
} from "../../utils/checkIfProductIsInFavorites";
import { useEffect } from "react";

const Product = ({ product }) => {
  const { pathname } = useLocation();
  const favouriteProducts = useSelector((state) => state.favourites);

  useEffect(() => {}, [favouriteProducts]);

  const localFavouritesData =
    JSON.parse(localStorage.getItem("favourites")) || [];

  return (
    <NavLink
      className={`${styles.product}`}
      to={`${pathname}/product/${product._id}`}
    >
      <div className={`${styles.product__image}`}>
        <img
          src={product.image}
          alt={product.name}
          className={`${styles.product__img}`}
        />
      </div>
      <div className={`${styles.product__details}`}>
        <span className={`${styles.product__name}`}>{product.name}</span>
        <span className={`${styles.product__price}`}>${product.price}</span>
      </div>

      <div className={`${styles.like__icon} ${styles.liked}}`}>
        {renderLikeIcon(
          checkIfInfavouries(
            product._id,
            localFavouritesData || favouriteProducts
          )
        )}
      </div>
    </NavLink>
  );
};

export default Product;
