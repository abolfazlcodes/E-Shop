import { ADDTO_CART, DELETE__FROM_CART } from "./shoppingCartTypes";

export const addToCart = (product) => {
  return {
    type: ADDTO_CART,
    payload: product,
  };
};

export const deleteFromCart = (id) => {
  return {
    type: DELETE__FROM_CART,
    payload: id,
  };
};
