const defaultState = {
    score:0,
  };
  
  export function reducer(state = defaultState, action) {
    switch (action.type) {
      case 'ADD':
        return { ...state, score: state.score + action.payload };
      case 'REMOVE':
        const newScore = state.score - action.payload;
        return { ...state, score: newScore >= 0 ? newScore : state.score };
      default:
        return state;
    }
  }
  