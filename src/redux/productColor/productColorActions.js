import { CHOOSE_PRODUCT_COLOR } from "./productColorTypes";

export const chooseProductColor = (color) => {
  return {
    type: CHOOSE_PRODUCT_COLOR,
    payload: color,
  };
};
