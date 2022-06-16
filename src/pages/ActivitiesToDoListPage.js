import { Divider, Grid } from "@material-ui/core";
import React from "react";
import CardCarousel from "../containers/CardCarousel";
import NavBar from "../containers/NavBar";
import { Box } from "@material-ui/core";
import SearchBoxComp from "../components/SearchBox";
import Footer from "../containers/Footer";
import ActivitiesListCard from "../containers/ActivitiesListCard";
import Pagination from "../containers/Pagination";
import { activitiesList } from "../containers/ActivitiesListCard/activitiesData";

function ActivitiesToDoListPage() {
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
          <SearchBoxComp />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box sx={{ mb: 10 }}>
          <Divider />
        </Box>
      </Grid>
      
      <Grid item xs={12} style={{ paddingRight: 100, paddingLeft: 100 }}>
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          {activitiesList.map((card) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={2}
                style={{ textAlign: "center", m: 5 }}
              >
                <ActivitiesListCard image={card.image} title={card.name} />
              </Grid>
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

export default ActivitiesToDoListPage;
