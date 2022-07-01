import { combineReducers } from "redux";
import oneProductReducer from "./oneProduct/oneProductReducer";
import productsReducer from "./products/productsReducer";
import shoppingCartReducer from "./shoppingCart/shoppingCartReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  product: oneProductReducer,
  cart: shoppingCartReducer,
});

export default rootReducer;
