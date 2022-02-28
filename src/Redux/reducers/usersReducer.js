import { ActionTypes } from "../constants/action-types";

const initialState = {
  users: [
    // {
    //   email: "a@b.c",
    //   password: "12345",
    //   repassword: "12345",
    //   userId: "1",
    // },
  ],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER: {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    }

    default:
      return state;
  }
};
