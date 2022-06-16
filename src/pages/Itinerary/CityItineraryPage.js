import { Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import Box from "@mui/material/Box";
import NavBar from "../../containers/NavBar";
import Footer from "../../containers/Footer";
import Filter from "../../containers/Filter";
import FilterMenu from "../../containers/FilterMenu";
import filterData from "../../pages/Itinerary/FilterMockData";
import CardCont from "../../containers/CardCont";
import { cityCards } from "../../containers/CardCont/mockData";
import weatherData from "./WeatherMockData";
import { Link } from "react-router-dom";

const DayItineraryPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item lg={3}>
        <Box display="flex" sx={{ display: { xs: "none", lg: "block" } }}>
          <Filter filterProperties={filterData}></Filter>
        </Box>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box
          sx={{
            width: "auto",
            height: "50%",
            backgroundColor: "white",
            marginTop: "1rem",
          }}
        >
          <Box display="inline-flex">
            <Typography
              variant="h5"
              paddingTop={1}
              paddingBottom={1}
              paddingLeft={1}
              align="left"
            >
              Recommended Itineraries for Paris
            </Typography>
            <Box
              sx={{
                display: { xs: "flex", lg: "none" },
              }}
            >
              <FilterMenu filterProperties={filterData}></FilterMenu>
            </Box>
          </Box>
          <Grid item xs={12}>
            <Box pb={2}>
              <Divider
                variant="middle"
                sx={{ borderBottomWidth: 3, background: "black" }}
              />
            </Box>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={3}
          >
            {cityCards.map((card) => {
              return (
                <Grid item style={{ textAlign: "center" }}>
                  <Link to={"/dayItinerary"} style={{ textDecoration: "none" }}>
                    <CardCont
                      image={card.img}
                      title={card.title}
                      desc={card.desc}
                    />
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Box
          sx={{
            width: "auto",
            height: "auto",
            backgroundColor: "white",
            marginTop: "2rem",
          }}
        >
          <Typography variant="h5" align="center">
            Weather Details
          </Typography>
          <Box
            sx={{
              backgroundImage: `url(https://cdn.stocksnap.io/img-thumbs/960w/pastel-clouds_H89THM4Y6L.jpg)`,
              backgroundSize: "cover",
              color: "white",
              height: "30rem",
              alignItems: "center",
              display: "flex",
            }}
          >
            {weatherData.map((item) => {
              return (
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <Typography variant="h6">
                    Today: {item.current.temp} °K
                  </Typography>
                  <Typography variant="h6">
                    Tomorrow: {item.daily.map((data) => data.temp.max)} °K
                  </Typography>
                  <Typography variant="h6">
                    6/18: {item.daily.map((data) => data.temp.max)} °K
                  </Typography>
                  <Typography variant="h6">
                    6/19: {item.daily.map((data) => data.temp.max)} °K
                  </Typography>
                  <Typography variant="h6">
                    6/20: {item.daily.map((data) => data.temp.max)} °K
                  </Typography>
                  <Typography variant="h6">
                    6/21: {item.daily.map((data) => data.temp.max)} °K
                  </Typography>
                  <Typography variant="h6">
                    6/22: {item.daily.map((data) => data.temp.max)} °K
                  </Typography>
                </Grid>
              );
            })}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default DayItineraryPage;
