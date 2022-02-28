import { ActionTypes } from "../constants/action-types";

export const setToken = (token) => {
  return {
    type: ActionTypes.SET_TOKEN,
    payload: token,
  };
};
