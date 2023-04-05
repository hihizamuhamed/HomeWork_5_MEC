
import { type } from "./actionTypes";

const initialState = {
  list: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_NUMBER:
      const sum =
        state.list.length > 0
          ? state.list[state.list.length - 1] + action.payload
          : action.payload;
      return {
        ...state,
        list: [...state.list, sum],
      };
    case type.CLEAR_LIST:
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default reducers;
