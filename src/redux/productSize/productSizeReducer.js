import { CHOOSE_PRODUCT_SIZE } from "./productSizeTypes";

const initialState = { size: "" };

const productSizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_PRODUCT_SIZE:
      return { ...state, size: (state.size = action.payload) };
    default:
      return state;
  }
};

export default productSizeReducer;
