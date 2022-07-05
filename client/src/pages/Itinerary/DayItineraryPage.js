import { Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import NavBar from "../../containers/NavBar";
import DescriptionList from "../../containers/DescriptionList";
// import descList from "../../containers/DescriptionList/mockData";
import Footer from "../../containers/Footer";
import weatherData from "./WeatherMockData";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useLocation } from "react-router-dom";

const DayItineraryPage = () => {
  const location = useLocation();
  const duration = location.state.duration;
  const [descList, setDescList] = useState([]);

  useEffect(() => {
    const fetchURL = `${BACKEND_URL}/dit/fetchDayItinerary`;
    axios
      .post(fetchURL)
      .then((res) => {
        setDescList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            width: "auto",
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
            {duration} Itinerary
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
      <Grid item xs={12} lg={9}>
        {descList.length && descList.map((dayItinerary) => {
          return (
            <DescriptionList
              image={dayItinerary.itinerary_image}
              title={dayItinerary.itinerary_place}
              desc={dayItinerary.itinerary_description}
            />
          );
        })}
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
