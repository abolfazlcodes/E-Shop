import { combineReducers } from "redux";
import favouritesReducer from "./favouriteProducts/favouriteProductsReducer";
import oneProductReducer from "./oneProduct/oneProductReducer";
import productsReducer from "./products/productsReducer";
import shoppingCartReducer from "./shoppingCart/shoppingCartReducer";
import userAuthReducer from "./userAuth/userAuthReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  product: oneProductReducer,
  cart: shoppingCartReducer,
  favourites: favouritesReducer,
  userAuth: userAuthReducer,
});

export default rootReducer;
