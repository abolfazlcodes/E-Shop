import styles from "./ProductDetails.module.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { MdRemove, MdAdd } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchOneProductAsync } from "../../redux/oneProduct/oneProductActions";
import { useEffect } from "react";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
} from "../../redux/productQuanity/productQuantityActions";

const ProductDetails = () => {
  const productData = useSelector((state) => state.product);
  const productQuantity = useSelector((state) => state.productQuantity);
  console.log(productQuantity);
  const dispatch = useDispatch();
  const { loading, product, error } = productData;
  const { id } = useParams();
  console.log(productData);

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
          <div
            className={`${styles.product__delivery__type} ${styles.product__delivery__shipment}`}
          >
            <div className={`${styles.product__delivery__icon}`}>
              <FaTruck className={`${styles.delivery__icon}`} />
            </div>
            <div className={`${styles.product__delivery__details}`}>
              <span className={`${styles.product__delivery__heading}`}>
                Standard shipment
              </span>
              <span className={`${styles.product__delivery__subheading}`}>
                Free within 3-6 business days
              </span>
            </div>
          </div>
          <div
            className={`${styles.product__delivery__type} ${styles.product__delivery__express}`}
          >
            <div className={`${styles.product__delivery__icon}`}>
              <FaTruck className={`${styles.delivery__icon}`} />
            </div>
            <div className={`${styles.product__delivery__details}`}>
              <span className={`${styles.product__delivery__heading}`}>
                Express delivery
              </span>
              <span className={`${styles.product__delivery__subheading}`}>
                $35,00 available
              </span>
            </div>
          </div>
        </div>

        <div className={`${styles.product__flags}`}>
          <span className={`${styles.product__banner}`}>sale</span>
          <span className={`${styles.product__id}`}>
            Product ID:
            <span>{product._id}</span>
          </span>
        </div>

        <div className={`${styles.product__detail__name}`}>
          <h1 className={`${styles.product__name}`}>{product.name}</h1>
          <div className={`${styles.product__detail__price}`}>
            {product.offPrice && (
              <span className={`${styles.product__price__discount}`}>
                {product.offPrice &&
                  product.offPrice * productQuantity.productQuantity}
              </span>
            )}
            <span
              className={`${styles.product__price} ${
                product.offPrice && styles.product__price__off
              } `}
            >
              ${product.price * productQuantity.productQuantity}
            </span>
          </div>
        </div>

        <div className={`${styles.product__color}`}>
          <span className={`${styles.product__color__flag} ${styles.flags}`}>
            Color:
          </span>

          <div className={`${styles.product__color__boxes}`}>
            <div
              className={`${styles.product__color__box} ${styles.colorActive}`}
              data-value="black"
            >
              <div className={`${styles.color} ${styles.color__one}`}></div>
            </div>
            <div className={`${styles.product__color__box}`} data-value="blue">
              <div className={`${styles.color} ${styles.color__two}`}></div>
            </div>
            <div className={`${styles.product__color__box}`} data-value="white">
              <div className={`${styles.color} ${styles.color__three}`}></div>
            </div>
            <div className={`${styles.product__color__box}`} data-value="brown">
              <div className={`${styles.color} ${styles.color__four}`}></div>
            </div>
          </div>
        </div>

        <div className={`${styles.product__size}`}>
          <span className={`${styles.product__size__flag} ${styles.flags}`}>
            Size:
          </span>

          <div className={`${styles.product__size__selectBox}`}>
            <select name="size" id={`${styles.size}`}>
              <option value="">Choose size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
        </div>

        <div className={`${styles.product__action__btns}`}>
          <div className={`${styles.product__quantity}`}>
            <span
              className={`${styles.product__quantity__flag} ${styles.flags}`}
            >
              Quantity:
            </span>
            <div className={`${styles.product__quantity__btns}`}>
              <i>
                <MdRemove onClick={() => dispatch(decreaseProductQuantity())} />
              </i>
              <span className={`${styles.quantity}`}>
                {productQuantity.productQuantity}
              </span>
              <i>
                <MdAdd onClick={() => dispatch(increaseProductQuantity())} />
              </i>
            </div>
          </div>

          <div className={`${styles.product__btn}`}>
            <span className={`${styles.addToCart__btn}`}>add to cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
