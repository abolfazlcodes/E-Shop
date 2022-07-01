import {
  ADD_TO_FAVOURITES,
  DELETE_FROM_FAVOURITES,
} from "./favouriteProductsTypes";

export const addToFavourites = (product) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: product,
  };
};

export const deleteFromFavourites = (id) => {
  return {
    type: DELETE_FROM_FAVOURITES,
    payload: id,
  };
};
