import { Divider, Grid } from "@material-ui/core";
import React from "react";
import CardCarousel from "../containers/CardCarousel";
import NavBar from "../containers/NavBar";
import { Box } from "@material-ui/core";
import Footer from "../containers/Footer";
import AccommodationListHorizontalCards from "../containers/AccommodationListHorizontalCards";
import Pagination from "../containers/Pagination";
// import AccommodationSideBarFilter from "../components/AccommodationSideBarFilter";
import AccommodationSearchBoxComp from "../components/AccommodationSearch";

function AccommodationListPage() {
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

      {/* <Grid item xs={2}>
        <AccommodationSideBarFilter />
      </Grid> */}

      <Grid item xs={12}> 
        <AccommodationListHorizontalCards />
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Pagination />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AccommodationListPage;
