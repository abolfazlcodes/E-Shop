import { SAVE_USER_DATA, DELETE__USER_DATA } from "./userAuthTypes";

export const saveUserData = (userData) => {
  return {
    type: SAVE_USER_DATA,
    payload: userData,
  };
};

export const deleteUserData = () => {
  return {
    type: DELETE__USER_DATA,
  };
};
