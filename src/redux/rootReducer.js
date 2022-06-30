import { combineReducers } from "redux";
import oneProductReducer from "./oneProduct/oneProductReducer";
import productColorReducer from "./productColor/productColorReducer";
import productQuantityReducer from "./productQuanity/productQuantityReducer";
import productsReducer from "./products/productsReducer";
import productSizeReducer from "./productSize/productSizeReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  product: oneProductReducer,
  productQuantity: productQuantityReducer,
  productColor: productColorReducer,
  productSize: productSizeReducer,
});

export default rootReducer;
