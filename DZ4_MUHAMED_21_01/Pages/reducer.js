import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from '../Pages/actions'

const initialState = {
  result: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
    case SUBTRACT:
    case MULTIPLY:
    case DIVIDE:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
