import React from "react";
import { Grid, Divider } from "@mui/material";
import CardCarousel from "../containers/CardCarousel";
import NavBar from "../containers/NavBar";
import { Box } from "@material-ui/core";
import Footer from "../containers/Footer";
import Pagination from "../containers/Pagination";
import AccommodationSearchBoxComp from "../components/AccommodationSearch";
import HorizontralCardComp from "../components/HorizontalCard";
import { hotelList } from "../components/HorizontalCard/hotelLists";
import Filter from "../containers/Filter";
import data from "../containers/Filter/mockData";
import FilterMenu from "../containers/FilterMenu";

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
          <Grid
            item
            sx={{ display: { xs: "block", md: "none" } }}
            md={0}
            xs={12}
            className="text-align-center"
          >
            <FilterMenu filterProperties={data}></FilterMenu>
          </Grid>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box>
          <Divider />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center">
          <Box
            component="span"
            sx={{
              fontSize: 24,
              fontFamily: "Arial",
              fontWeight: "bold",
              pt: 2,
            }}
          >
            Our top picked hotels for you...
          </Box>
        </Grid>
      </Grid>

      <Grid item>
        <Box sx={{ display: { xs: "none", md: "block" } }} md={2} xs={0}>
          <Filter filterProperties={data}></Filter>
        </Box>
      </Grid>

      <Grid item xs={10}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {hotelList.map((myVariable) => {
            return (
              <HorizontralCardComp
                name={myVariable.name}
                address={myVariable.address}
                image={myVariable.image}
                price={myVariable.price}
                desc={myVariable.desc}
              />
            );
          })}
        </Grid>
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
