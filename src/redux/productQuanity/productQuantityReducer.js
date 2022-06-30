import {
  DECREMENT_PRODUCT_QUANTITY,
  INCREMENT_PRODUCT_QUANTITY,
} from "./productQuantityTypes";

const initialState = { productQuantity: 1 };

const productQuantityReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_PRODUCT_QUANTITY:
      return { ...state, productQuantity: state.productQuantity + 1 };
    case DECREMENT_PRODUCT_QUANTITY:
      if (state.productQuantity === 1) return state;
      return { ...state, productQuantity: state.productQuantity - 1 };
    default:
      return state;
  }
};

export default productQuantityReducer;
