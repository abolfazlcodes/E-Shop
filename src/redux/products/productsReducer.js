import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
} from "./productsTypes";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { loading: false, error: "", products: action.payload };
    case FETCH_PRODUCTS_FAILURE:
      return { loading: false, products: [], error: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
