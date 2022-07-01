import {
  ADD_TO_FAVOURITES,
  DELETE_FROM_FAVOURITES,
} from "./favouriteProductsTypes";

const initialState = [];

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      const updatedCart = [...state];
      const cartItemIndex = updatedCart.findIndex(
        (item) => item._id === action.payload._id
      );

      if (cartItemIndex < 0) {
        updatedCart.push({ ...action.payload });
      }
      console.log(updatedCart);

      return updatedCart;

    case DELETE_FROM_FAVOURITES:
      const updatedFavourites = [...state];
      console.log(updatedFavourites);
      return [
        ...updatedFavourites.filter(
          (cartItem) => cartItem._id !== action.payload._id
        ),
      ];

    default:
      return state;
  }
};

export default favouritesReducer;
