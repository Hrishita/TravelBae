import { Divider, Grid } from "@mui/material";
import React from "react";
import CardCarousel from "../containers/CardCarousel";
import NavBar from "../containers/NavBar";
import { Box } from "@material-ui/core";
import AccommodationSearchBoxComp from "../components/AccommodationSearch";
import Footer from "../containers/Footer";
import AccommodationMainPageCard from "../containers/AccommodationMainPageCard";

const AccommodationPage = () => {
  return (
    <Grid container spacing={0.5}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <CardCarousel />
      </Grid>
      <Grid item xs={12}>
        <Box pt={4} pb={4}>
          <AccommodationSearchBoxComp />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box>
          <Divider />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <AccommodationMainPageCard />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AccommodationPage;
