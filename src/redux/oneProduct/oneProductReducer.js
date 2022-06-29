import {
  FETCH_ONE_PRODUCT_REQUEST,
  FETCH_ONE_PRODUCT_SUCCESS,
  FETCH_ONE_PRODUCT_FAILURE,
} from "./oneProductypes";

const initialState = {
  loading: false,
  product: {},
  error: "",
};

const oneProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ONE_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case FETCH_ONE_PRODUCT_SUCCESS:
      return { loading: false, error: "", product: action.payload };
    case FETCH_ONE_PRODUCT_FAILURE:
      return { loading: false, product: {}, error: action.payload };
    default:
      return state;
  }
};

export default oneProductReducer;
