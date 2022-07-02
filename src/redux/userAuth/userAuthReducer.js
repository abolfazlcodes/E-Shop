import { SAVE_USER_DATA, DELETE__USER_DATA } from "./userAuthTypes";

const initialState = {
  isAuthTrue: false,
};

const userAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_DATA: {
      return { ...state, isAuthTrue: !state.isAuthTrue, data: action.payload };
    }

    case DELETE__USER_DATA: {
      return { ...state, isAuthTrue: !state.isAuthTrue };
    }

    default:
      return state;
  }
};

export default userAuthReducer;
