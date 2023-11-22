// Redux: state management tool
import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import { authSlice } from "./slice/authSlice.js";
import { taskSlice } from "./slice/taskSlice.js";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    task: taskSlice.reducer,
  },
});

// Create the middleware instance and methods
const listenerMiddleware = createListenerMiddleware();

// listenerMiddleware.startListening({
//   matcher: isAnyOf(action1, action2, action3),
//   effect: (action, listenerApi) => {
//     const user = selectUserDetails(listenerApi.getState())

//     const { specialData } = action.meta

//     analyticsApi.trackUsage(action.type, user, specialData)
//   },
// })
export default store;
