import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";

const GridSystem: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}></Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}></Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}></Grid>
    </Grid>
  );
};

export default GridSystem;
