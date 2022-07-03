import axios from "axios";
import {
  FETCH_ONE_PRODUCT_REQUEST,
  FETCH_ONE_PRODUCT_SUCCESS,
  FETCH_ONE_PRODUCT_FAILURE,
} from "./oneProductypes";

const fetchOneProductRequest = () => {
  return {
    type: FETCH_ONE_PRODUCT_REQUEST,
  };
};

const fetchOneProductSuccess = (product) => {
  return {
    type: FETCH_ONE_PRODUCT_SUCCESS,
    payload: product,
  };
};

const fetchOneProductFailure = (error) => {
  return {
    type: FETCH_ONE_PRODUCT_FAILURE,
    payload: error,
  };
};

export const fetchOneProductAsync = (id) => {
  return (dispatch) => {
    dispatch(fetchOneProductRequest());
    axios
      .get(`/product/${id}`)
      .then((res) => {
        const product = res.data;
        dispatch(fetchOneProductSuccess(product));
      })
      .catch((err) => {
        dispatch(fetchOneProductFailure(err.message));
      });
  };
};
