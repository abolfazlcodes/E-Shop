const CartWrapper = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.shopping__cart}`}>
        <header class={`${styles.shopping__cart__header}`}>
          <h1 class={`${styles.shopping__cart__title}`}>Shopping Cart</h1>
        </header>
        <div class={`${styles.shopping__cart__products}`}>
          <ShoppingCartHeader />
          <ShoppingCartProductWrapper />
          <ShoppingCartTotal />
        </div>
      </div>
    </div>
  );
};

export default CartWrapper;
