import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { Obj, GitHubUserData } from "./store/giUserProfile";
import { Box } from "@mui/material";
import Header from "./Components/Header/Header";
import RootLeaves from "./Components/Header/Leaves";
import Banner from "./Components/Banner/Banner";
import GridSystem from "./Components/Layouts/Grid";

import Finder from "./Components/Finder/Finder";
import Resulter from "./Components/Resulter/Resulter";

const App: React.FC = () => {
  const githubUserData = useSelector<RootState, GitHubUserData>(
    (state) => state.githubProfile
  );

  const userDataAvilable = useSelector<RootState, boolean>(
    (state) => state.githubProfile.avilable
  );

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <RootLeaves />
      <Header />
      <Banner />
      <GridSystem finder={<Finder />}>
        {githubUserData.avilable && (
          <Resulter
            bio={githubUserData.bio ? githubUserData.bio : ""}
            login={githubUserData.login ? githubUserData.login : ""}
            location={githubUserData.location ? githubUserData.location : ""}
            email={githubUserData.email ? githubUserData.email : ""}
            avatar={githubUserData.avatar_url}
          />
        )}
      </GridSystem>
    </Box>
  );
};

export default App;
