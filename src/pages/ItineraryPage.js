import { Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";
import Navbar from "../containers/Navbar";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import Card from "../containers/Card";
import cards from "../containers/Card/mockData";
import { Link } from "react-router-dom";

const ItineraryPage = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            width: "auto",
            height: 150,
            backgroundColor: "white",
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        >
          <Typography
            variant="h5"
            paddingTop={2}
            paddingLeft={3}
            paddingBottom={2}
            align="center"
          >
            Travel Itineraries
          </Typography>
          <Box pl={3} pr={3}>
            <TextField
              id="search-with-input"
              label="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              type="search"
              fullWidth
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} style={{ textAlign: "left" }}>
        <Grid container>
          <Grid item xs={11}>
            <Typography variant="h5" paddingLeft={4}>
              Recommended Itineraries for Popular Destinations
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider
          variant="middle"
          sx={{ borderBottomWidth: 3, background: "black" }}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          {cards.map((card) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={2}
                style={{ textAlign: "center" }}
              >
                <Link to={"/dayItinerary"} style={{ textDecoration: "none" }}>
                  <Card image={card.img} title={card.title} desc={card.desc} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
        {/* <Box pl={3} sx={{ display: "flex" }} pr={3}>
          {cards.map((card) => {
            return (
              <Link to={"/dayItinerary"} style={{ textDecoration: "none" }}>
                <Card image={card.img} title={card.title} desc={card.desc} />
              </Link>
            );
          })}
        </Box> */}
      </Grid>
    </Grid>
  );
};

export default ItineraryPage;
