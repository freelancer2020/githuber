import React from "react";
import { Box } from "@mui/material";
import Header from "./Components/Header/Header";
import RootLeaves from "./Components/Header/Leaves";
import Banner from "./Components/Banner/Banner";
import GridSystem from "./Components/Layouts/Grid";

import Finder from "./Components/Finder/Finder";

const App: React.FC = () => {
  return (
    <Box>
      <RootLeaves />
      <Header />
      <Banner />
      <GridSystem
        finder={<Finder />}
        result={<Finder />}
        moreInfo={<Finder />}
      />
    </Box>
  );
};

export default App;
