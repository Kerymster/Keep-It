import { ActionTypes } from "../constants/action-types";

const initialState = {
  token: "",
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};
