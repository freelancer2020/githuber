import React from "react";
import { Box, FormControl, InputLabel, Input, Button } from "@mui/material";
import { styled } from "@mui/system";

const FinderContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
}));

const FinderFormContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "space-between",
  boxSizing: "border-box",
  paddingTop: "5px",
  paddingBottom: "5px",
}));

const FinderNetworkState = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  boxSizing: "border-box",
  paddingTop: "5px",
  paddingBottom: "5px",
}));

const FinderAlert = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  boxSizing: "border-box",
  paddingTop: "5px",
  paddingBottom: "5px",
}));

const Finder: React.FC = () => {
  return (
    <FinderContainer>
      <FinderFormContainer>
        <FormControl sx={{ width: "80%" }}>
          <InputLabel htmlFor="my-input">GitHub User Name</InputLabel>
          <Input id="my-input" required />
        </FormControl>
        <Button variant="contained" children="Find" />
      </FinderFormContainer>
      <FinderNetworkState></FinderNetworkState>
      <FinderAlert></FinderAlert>
    </FinderContainer>
  );
};

export default Finder;
