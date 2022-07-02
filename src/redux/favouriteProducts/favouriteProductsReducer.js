import {
  ADD_TO_FAVOURITES,
  DELETE_FROM_FAVOURITES,
} from "./favouriteProductsTypes";

const initialState = [];

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES: {
      const updatedCart = [...state];
      const cartItemIndex = updatedCart.findIndex(
        (item) => item._id === action.payload._id
      );

      if (cartItemIndex < 0) {
        updatedCart.push({ ...action.payload });
      }
      localStorage.setItem("favourites", JSON.stringify(updatedCart));
      return updatedCart;
    }
    case DELETE_FROM_FAVOURITES: {
      const clonedFavourites = [...state];
      const updatedFavourites = clonedFavourites.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      return updatedFavourites;
    }
    default:
      return state;
  }
};

export default favouritesReducer;
