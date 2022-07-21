import { Grid } from "@material-ui/core";
import React from "react";
import NavBar from "../containers/NavBar";
import Footer from "../containers/Footer";
import ThingsToCarry from "../containers/ThingsToCarry";

const ThingsToCarryPage = () => {
  return (
    <Grid spacing={2} container mt={2}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12} sx={{ overflow: "hidden" }}>
        <ThingsToCarry />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default ThingsToCarryPage;
