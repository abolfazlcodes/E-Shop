import { CHOOSE_PRODUCT_COLOR } from "./productColorTypes";

const initialState = { color: "" };

const productColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_PRODUCT_COLOR:
      return { ...state, color: (state.color = action.payload) };
    default:
      return state;
  }
};

export default productColorReducer;
