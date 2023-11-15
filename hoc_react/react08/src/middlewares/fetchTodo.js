// Thunk middleware --> function trả về 1 function khác
// Thunk middleware for Redux.
// It allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.
export const fetchTodo = () => {
  return async (dispatch) => {
    const response = await fetch(`https://jsonsplaceholder.typicode.com/todos`);
    const data = await response.json();
    dispatch({
      type: "todo/fetch",
      payload: data,
    });
  };
};
