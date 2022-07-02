import styles from "./ShoppingCartProduct.module.css";
import { MdRemove, MdClear, MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../redux/shoppingCart/shoppingCartActions";
import { useState } from "react";

const ShoppingCartProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [productNumber, setProductNumber] = useState(product.productNumber);

  const productNumberIncrementHandler = () => {
    setProductNumber((prevState) => prevState + 1);
  };

  const productNumberDecrementHandler = () => {
    if (productNumber === 1) return;

    setProductNumber((prevState) => prevState - 1);
  };

  return (
    <article className={`${styles.product}`}>
      <div className={`${styles.product__details}`}>
        <div className={`${styles.product__image}`}>
          <img
            src={product.image}
            alt={product.name}
            className={`${styles.product__img}`}
          />
        </div>
        <div className={`${styles.product__name__id}`}>
          <p className={`${styles.product__name}`}>{product.name}</p>
          <span className={`${styles.product__id}`}>{product._id}</span>
          <div className={`${styles.product__tags}`}>
            <span className={`${styles.product__tag}`}>
              {product.productColor}
            </span>
            <span className={`${styles.product__tag}`}>
              {product.productSize || product.size}
            </span>
          </div>
        </div>
      </div>
      <div className={`${styles.product__buttons}`}>
        <div className={`${styles.product__quantity}`}>
          <span
            className={`${styles.product__quantity__btn}`}
            onClick={productNumberIncrementHandler}
          >
            <MdAdd />
          </span>
          <span className={`${styles.product__quantity__num}`}>
            {productNumber}
          </span>
          <span
            className={`${styles.product__quantity__btn}`}
            onClick={productNumberDecrementHandler}
          >
            <MdRemove />
          </span>
        </div>
        <div className={`${styles.product__price}`}>
          <span className={`${styles.price}`}>
            $ {product.price * productNumber}
          </span>
        </div>
        <div
          className={`${styles.product__delete__btn}`}
          onClick={() => dispatch(deleteFromCart(product._id))}
        >
          <i>
            <MdClear />
          </i>
        </div>
      </div>
    </article>
  );
};

export default ShoppingCartProduct;
