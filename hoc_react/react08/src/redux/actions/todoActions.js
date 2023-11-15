export const increment = (step) => {
    return { type: "counter/increment", payload: step };
  };
  
  export const decrement = (step) => {
    return { type: "counter/decrement", payload: step };
  };
  
  // ==> Action Creator