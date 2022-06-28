import { useContext, useReducer, createContext } from "react";
import productsReducer from "./ProductsReducer";
import data from "../data";

const ProductsContext = createContext();
const ProductsContextDispatcher = createContext();

export const initialState = {
  products: [...data],
  shoppingCart: [],
  favourites: [],
  totalPrice: 0,
};

const ProductProvider = ({ Children }) => {
  const [products, dispatch] = useReducer(productsReducer, initialState);

  return (
    <ProductsContext.Provider value={products}>
      <ProductsContextDispatcher.Provider value={dispatch}>
        {Children}
      </ProductsContextDispatcher.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsActions = () => useContext(ProductsContextDispatcher);
