export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const MULTIPLY = 'MULTIPLY';
export const DIVIDE = 'DIVIDE';

export const add = (number1, number2) => {
  return {
    type: ADD,
    payload: number1 + number2,
  };
};

export const subtract = (number1, number2) => {
  return {
    type: SUBTRACT,
    payload: number1 - number2,
  };
};

export const multiply = (number1, number2) => {
  return {
    type: MULTIPLY,
    payload: number1 * number2,
  };
};

export const divide = (number1, number2) => {
  return {
    type: DIVIDE,
    payload: number1 / number2,
  };
};
