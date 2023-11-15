//Kho chứa state
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { counterReducer } from "./reducers/counterReducer";
import { todoReducer } from "./reducers/todoReducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// console.log(store);
// store.dispatch({
//   type: "counter/increment",
// });
// console.log(store.getState());

/*
rootReducer ==> combineReducers
  - counterReducer
  - todoReducer
  - productReducer
  
*/
