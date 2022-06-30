import { CHOOSE_PRODUCT_SIZE } from "./productSizeTypes";

export const chooseProductSize = (size) => {
  return {
    type: CHOOSE_PRODUCT_SIZE,
    payload: size,
  };
};
