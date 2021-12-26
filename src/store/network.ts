import { createSlice } from "@reduxjs/toolkit";

type Network = {
  loaded: boolean;
  repos: boolean;
};

const initState: Network = {
  loaded: false,
  repos: false,
};

export const network = createSlice({
  name: "network state",
  initialState: initState,
  reducers: {
    fetchComplete(state) {
      state.loaded = true;
    },
    fetchStart(state) {
      state.loaded = false;
    },

    noRepos(state) {
      state.repos = true;
    },

    yesRepos(state) {
      state.repos = false;
    },
  },
});

export const networkAction = network.actions;
