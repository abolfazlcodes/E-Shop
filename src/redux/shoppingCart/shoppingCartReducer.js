import { ADDTO_CART, DELETE__FROM_CART } from "./shoppingCartTypes";
import { toast } from "react-toastify";

const initialState = [];

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTO_CART: {
      const updatedCart = [...state];

      console.log(action.payload);
      // check if product is inside the cart
      const cartItemIndex = updatedCart.findIndex(
        (item) => item._id === action.payload._id
      );

      if (cartItemIndex < 0) {
        updatedCart.push({ ...action.payload });
        toast.success("Product was added to cart");
      } else {
        const cartItem = { ...updatedCart[cartItemIndex] };
        cartItem.productNumber++;
        cartItem.price = cartItem.price * cartItem.productNumber;
        updatedCart[cartItemIndex] = cartItem;
        toast.success(`Added ${cartItem.productNumber}  to cart`);
      }

      return updatedCart;
    }
    case DELETE__FROM_CART: {
      console.log(state);
      const updatedCart = [...state];

      const returnedCart = updatedCart.filter(
        (item) => item._id !== action.payload
      );

      toast.error("Product was deleted");

      return returnedCart;
    }
    default:
      return state;
  }
};

export default shoppingCartReducer;
