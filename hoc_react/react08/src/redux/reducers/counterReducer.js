const initialState = {
    count: 0,
  };
  
  export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "counter/increment": {
        return { ...state, count: state.count + action.payload };
      }
      case "counter/decrement": {
        return { ...state, count: state.count - action.payload };
      }
      default: {
        return state;
      }
    }
  };