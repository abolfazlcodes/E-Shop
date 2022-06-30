import {
  DECREMENT_PRODUCT_QUANTITY,
  INCREMENT_PRODUCT_QUANTITY,
} from "./productQuantityTypes";

export const increaseProductQuantity = () => {
  return {
    type: INCREMENT_PRODUCT_QUANTITY,
  };
};

export const decreaseProductQuantity = () => {
  return {
    type: DECREMENT_PRODUCT_QUANTITY,
  };
};
