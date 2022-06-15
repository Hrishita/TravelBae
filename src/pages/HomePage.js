import { Divider, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import CardCarousel from "../containers/CardCarousel";
import NavBar from "../containers/NavBar";
import { Box } from "@material-ui/core";
import SearchBoxComp from "../components/SearchBox";
import Card from "../containers/Card";
import data from "../containers/Card/mockData";
import Footer from "../containers/Footer";

const HomePage = () => {
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
        <Grid container>
          <Grid item xs={10}>
            <Box pl={2} pt={4}>
              <Typography variant="h5"> Popular Places</Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box pt={4} pr={2} display="flex" justifyContent="flex-end">
              <Link>View All</Link>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Box pb={4}>
          <Divider />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          {data.map((card) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={2}
                style={{ textAlign: "center" }}
              >
                <Card image={card.img} title={card.title} desc={card.desc} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Footer/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
