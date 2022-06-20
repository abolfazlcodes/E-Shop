import ShoppingCartProduct from "../ShoppingCartProduct/ShoppingCartProduct";

const ShoppingCartProductWrapper = () => {
  return (
    <div className={`${styles.products}`}>
      <ShoppingCartProduct />
    </div>
  );
};

export default ShoppingCartProductWrapper;
