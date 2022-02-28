import { ActionTypes } from "../constants/action-types";

export const todoActions = (todo) => {
  return {
    type: ActionTypes.ADD_TODO,
    payload: todo,
  };
};
export const removeTodo = (id) => {
  return {
    type: ActionTypes.REMOVE_TODO,
    payload: id,
  };
};
export const toggleTodo = (id) => {
  return {
    type: ActionTypes.TOGGLE_TODO,
    payload: id,
  };
};
