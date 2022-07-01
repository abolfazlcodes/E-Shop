import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import styles from "../Components/Product/Product.module.css";

export const checkIfInfavouries = (id, favouriteProducts) => {
  const productItem = favouriteProducts.findIndex((item) => item._id === id);

  return productItem;
};

export const renderLikeIcon = (itemIndex) => {
  if (itemIndex < 0) {
    return <MdFavoriteBorder className={`${styles.icon}`} />;
  } else {
    return (
      <IconContext.Provider value={{ color: "#fbb03b" }}>
        <MdFavorite className={`${styles.icon}`} />
      </IconContext.Provider>
    );
  }
};
