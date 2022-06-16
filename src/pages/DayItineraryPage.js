import { Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import Box from "@mui/material/Box";
import NavBar from "../containers/NavBar";
import DescriptionList from "../containers/DescriptionList";
import descList from "../containers/DescriptionList/mockData";
import Footer from "../containers/Footer";

const DayItineraryPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            width: "auto",
            height: 100,
            backgroundColor: "white",
            marginTop: "1rem",
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        >
          <Typography
            variant="h5"
            paddingTop={1}
            paddingBottom={1}
            paddingLeft={1}
            align="center"
            fontWeight="bold"
          >
            5 - Day Itinerary
          </Typography>
          <Typography
            variant="h5"
            paddingTop={1}
            paddingBottom={1}
            paddingLeft={1}
            align="left"
          >
            Day 1
          </Typography>
          <Grid item xs={12}>
            <Divider
              variant="middle"
              sx={{ borderBottomWidth: 3, background: "black" }}
            />
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12}>
        {descList.map((dayItinerary) => {
          return (
            <DescriptionList
              image={dayItinerary.img}
              title={dayItinerary.title}
              desc={dayItinerary.desc}
            />
          );
        })}
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            width: "auto",
            height: 50,
            backgroundColor: "white",
            marginTop: "1rem",
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        >
          <Typography
            variant="h5"
            paddingTop={1}
            paddingBottom={1}
            paddingLeft={1}
            align="left"
          >
            Day 2
          </Typography>
          <Grid item xs={12}>
            <Divider
              variant="middle"
              sx={{ borderBottomWidth: 3, background: "black" }}
            />
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12}>
        {descList.map((dayItinerary) => {
          return (
            <DescriptionList
              image={dayItinerary.img}
              title={dayItinerary.title}
              desc={dayItinerary.desc}
            />
          );
        })}
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default DayItineraryPage;
