import { useContext, createContext, useReducer } from "react";
import rootReducer from "./rootReducer";

const ProviderContext = createContext();
const Provider = ({ children }) => {
  console.log(children);
  const initialState = {
    messages: [],
  };
  // const initialState = ({ children }) => {
  //   count: 0;
  // };
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const data = {
    msg: "Hello F8",
  };

  const addMessage = (message) => {
    dispatch({ type: "ADD_MESSAGE", message });
  };

  return (
    <ProviderContext.Provider value={{ data, state, dispatch, addMessage }}>
      {children}
    </ProviderContext.Provider>
  );
};

export { Provider, ProviderContext };
