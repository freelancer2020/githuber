import { configureStore } from "@reduxjs/toolkit";
import { githubUser } from "./giUserProfile";

const store = configureStore({
  reducer: {
    githubProfile: githubUser.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
