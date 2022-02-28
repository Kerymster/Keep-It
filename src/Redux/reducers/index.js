import { combineReducers } from "redux";
import { authenticationReducer } from "./authenticationReducer";
import { usersReducer } from "./usersReducer";
import { todoReducers } from "./todoReducers";

export const reducers = combineReducers({
  authentication: authenticationReducer,
  usersReducer: usersReducer,
  todoReducers: todoReducers,
});
