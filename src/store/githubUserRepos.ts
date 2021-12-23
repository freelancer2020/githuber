import { createSlice } from "@reduxjs/toolkit";

export interface ReposData {
  ready: boolean;
  name: string;
  description: string;
  visibility: string;
  html_url: string;
}

const initState: ReposData = {
  ready: false,
  name: "",
  description: "",
  visibility: "",
  html_url: "",
};

export const githubRepos = createSlice({
  name: "Github User Repos",
  initialState: initState,
  reducers: {
    getRepos(state, action) {
      state.ready = action.payload.ready;
      state.description = action.payload.description;
      state.name = action.payload.name;
      state.visibility = action.payload.visibility;
      state.html_url = action.payload.html_url;
    },
  },
});

export const githubReposAction = githubRepos.actions;
