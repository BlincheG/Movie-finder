import { CircularProgress, Container, Grid } from "@mui/material";
import React from "react";

function Loader() {
  return (
    <Container>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <CircularProgress />
      </Grid>
    </Container>
  );
}

export default Loader;
