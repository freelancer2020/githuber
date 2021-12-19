import React from "react";
import { Box } from "@mui/material";
import Header from "./Components/Header/Header";
import RootLeaves from "./Components/Header/Leaves";
import Banner from "./Components/Banner/Banner";

const App: React.FC = () => {
  return (
    <Box>
      <RootLeaves />
      <Header />
      <Banner />
    </Box>
  );
};

export default App;
