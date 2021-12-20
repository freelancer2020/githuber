import { createSlice } from "@reduxjs/toolkit";

type Obj = {
  login: string;
  name?: string;
  avatar_url: string;
  html_url: string;
  location: string;
  repos_url: string;
};

export type GitHubUserData = {
  data: Obj;
};

const githubUserData: GitHubUserData = {
  data: {
    login: "",
    name: "",
    avatar_url: "",
    html_url: "",
    location: "",
    repos_url: "",
  },
};

export const githubUser = createSlice({
  name: "github profile",
  initialState: githubUserData,
  reducers: {
    storeUserProfile(state, action) {
      state.data = action.payload;
    },
  },
});

export const githubAction = githubUser.actions;
