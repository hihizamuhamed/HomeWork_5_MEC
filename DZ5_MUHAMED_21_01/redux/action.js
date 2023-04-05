import {type} from "./actionTypes";

export const addNumber = (number) => ({
  type:type. ADD_NUMBER,
  payload: number,
});

export const clearList = () => ({
  type:type. CLEAR_LIST,
});
