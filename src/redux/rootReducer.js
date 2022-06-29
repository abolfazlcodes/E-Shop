import { combineReducers } from "redux";
import oneProductReducer from "./oneProduct/oneProductReducer";
import productsReducer from "./products/productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  product: oneProductReducer,
});

export default rootReducer;
