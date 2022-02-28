import { ActionTypes } from "../constants/action-types";
const initialState = {
  todos: [],
};
export const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            todo: action.payload.todo,
            id: action.payload.id,
            userId: action.payload.userId,
            completed: false,
          },
        ],
      };
    case ActionTypes.REMOVE_TODO:
      let newList = state.todos.filter((item) => item.id !== action.payload);

      return {
        ...state,
        todos: newList,
      };
    case ActionTypes.TOGGLE_TODO:
      let list = state.todos.map((item) =>
        item.id == action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
      return {
        ...state,
        todos: list,
      };

    default:
      return state;
  }
};
