import { combineReducers } from "redux";
import oneProductReducer from "./oneProduct/oneProductReducer";
import productQuantityReducer from "./productQuanity/productQuantityReducer";
import productsReducer from "./products/productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  product: oneProductReducer,
  productQuantity: productQuantityReducer,
});

export default rootReducer;
