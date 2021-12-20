import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";

type Como = ReturnType<React.FC>;

type GridProps = {
  finder: Como;
  result?: Como;
  moreInfo?: Como;
};

const GridContainer = styled(Grid)(({ theme }) => ({
  boxSizing: "border-box",
  paddingLeft: "20px",
  paddingRight: "20px",
  marginTop: "200px",
  zIndex: 10,
  overflowX: "hidden",
}));

const GridSystem: React.FC<GridProps> = (props) => {
  return (
    <GridContainer container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
        {props.finder}
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
        {props.result}
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
        {props.moreInfo}
      </Grid>
    </GridContainer>
  );
};

export default GridSystem;
