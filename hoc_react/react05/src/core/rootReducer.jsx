// Quản lý state
import { useReducer } from "react";

const rootReducer = (state, action) => {
  switch (action.type) {
    case "counter/increment": {
      return { ...state, count: state.count + 1 };
    }

    case "counter/decrement": {
      return { ...state, count: state.count - 1 };
    }

    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.message],
      };

    default: {
      return state;
    }
  }
};

export default rootReducer;
