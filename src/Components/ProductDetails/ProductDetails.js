import styles from "./ProductDetails.module.css";
import Shipping from "./Shipping/Shipping";
import ProductFlags from "./ProductFlags/ProductFlags";
import ProductSize from "./ProductSize/ProductSize";
import ProductColor from "./ProductColor/ProductColor";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchOneProductAsync } from "../../redux/oneProduct/oneProductActions";
import { useEffect, useState } from "react";
import { addToCart } from "../../redux/shoppingCart/shoppingCartActions";
import ProductNumber from "./ProductNumber/ProductNumber";

const ProductDetails = () => {
  const productData = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { loading, product, error } = productData;
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchOneProductAsync(id));
  }, []);

  return (
    <div className={`${styles.product__details}`}>
      <div className={`${styles.product__image}`}>
        <img
          src={product.image}
          alt={product.name}
          className={`${styles.product__img}`}
        />
        <div className={`${styles.like__icon} ${styles.liked}`}>
          <MdFavoriteBorder />
        </div>
      </div>
      <div className={`${styles.product__detail}`}>
        <div className={`${styles.product__delivery}`}>
          <Shipping
            type="Standard shipment"
            description="Free within 3-6 business days"
          />
          <Shipping type="Express delivery" description="$35,00 available" />
        </div>
        <ProductFlags productID={product._id} />
        <div className={`${styles.product__detail__name}`}>
          <h1 className={`${styles.product__name}`}>{product.name}</h1>
          <div className={`${styles.product__detail__price}`}>
            {product.offPrice && (
              <span className={`${styles.product__price__discount}`}>
                {product.offPrice && product.offPrice}
              </span>
            )}
            <span
              className={`${styles.product__price} ${
                product.offPrice && styles.product__price__off
              } `}
            >
              ${product.price}
            </span>
          </div>
        </div>

        <ProductColor />
        <ProductSize />
        <div className={`${styles.product__action__btns}`}>
          <ProductNumber />
          <div
            className={`${styles.product__btn}`}
            onClick={() =>
              dispatch(
                addToCart({
                  ...product,
                })
              )
            }
          >
            <span className={`${styles.addToCart__btn}`}>Add to cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
