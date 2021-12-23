import { configureStore } from "@reduxjs/toolkit";
import { githubUser } from "./giUserProfile";
import { githubRepos } from "./githubUserRepos";
import { reposState } from "./ReposState";

const store = configureStore({
  reducer: {
    githubProfile: githubUser.reducer,
    githubUserRepo: githubRepos.reducer,
    repoState: reposState.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
