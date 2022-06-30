import { ADDTO_CART, DELETE__FROM_CART } from "./shoppingCartTypes";

const initialState = [];

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTO_CART:
      const updatedCart = [...state];
      // check if product is inside the cart
      const cartItemIndex = updatedCart.findIndex(
        (item) => item._id === action.payload._id
      );

      if (cartItemIndex < 0) {
        updatedCart.push({ ...action.payload });
      } else {
        const cartItem = { ...updatedCart[cartItemIndex] };
        cartItem.productQuantity++;
        cartItem.price = cartItem.price * cartItem.productQuantity;
        updatedCart[cartItemIndex] = cartItem;
      }

      return updatedCart;

    case DELETE__FROM_CART:
      console.log(state);
      return [
        ...state,
        ...state.filter((cartItem) => cartItem._id !== action.payload._id),
      ];
    default:
      return state;
  }
};

export default shoppingCartReducer;
