import { Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import NavBar from "../../containers/NavBar";
import DescriptionList from "../../containers/DescriptionList";
// import descList from "../../containers/DescriptionList/mockData";
import Footer from "../../containers/Footer";
// import weatherData from "./WeatherMockData";
import axios from "axios";
import moment from "moment";
import { BACKEND_URL } from "../../config";
import { Weather_API } from "../../config";
import { useLocation } from "react-router-dom";

const DayItineraryPage = () => {
  const location = useLocation();
  const duration = location.state.duration;
  const cityLat = location.state.cityLat;
  const cityLong = location.state.cityLong;
  const [descList, setDescList] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const days = [];
  for (let i = 1; i <= duration; i++) {
    days.push(i);
  }

  useEffect(() => {
    const fetchURL = `${BACKEND_URL}/dit/fetchDayItinerary`;
    axios
      .post(fetchURL)
      .then((res) => {
        setDescList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLong}&appid=${Weather_API}`;
    axios
      .get(weatherURL)
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((err) => console.log(err));
  }, [cityLat, cityLong]);

  const dates =
    weatherData &&
    weatherData.list &&
    weatherData.list.map((item) => {
      return {
        epochDate: item.dt,
        // https://stackoverflow.com/questions/40752287/use-moment-js-to-convert-unix-epoch-time-to-human-readable-time
        formattedDate: moment.unix(item.dt).format("MMM DD YYYY"),
      };
    });

  //https://yagisanatode.com/2021/07/03/get-a-unique-list-of-objects-in-an-array-of-object-in-javascript/
  let uniqueDates = [
    ...new Map(
      dates && dates.map((item) => [item["formattedDate"], item])
    ).values(),
  ];

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
            {duration} - Day Itinerary
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} lg={9}>
        {descList.length &&
          days.map((day) => {
            return (
              <>
                <Typography
                  variant="h5"
                  paddingTop={1}
                  paddingBottom={1}
                  paddingLeft={1}
                  align="left"
                >
                  Day {day}
                </Typography>
                <Grid item xs={12}>
                  <Divider
                    variant="middle"
                    sx={{ borderBottomWidth: 3, background: "black" }}
                  />
                </Grid>
                {descList.map((dayItinerary) => {
                  if (dayItinerary.day === day) {
                    return (
                      <DescriptionList
                        image={dayItinerary.itinerary_image}
                        title={dayItinerary.itinerary_place}
                        desc={dayItinerary.itinerary_description}
                      />
                    );
                  } else {
                    return <></>;
                  }
                })}
              </>
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
              height: "20rem",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Grid item xs={12} style={{ textAlign: "center" }}>
              {uniqueDates.map((d) => {
                return (
                  weatherData &&
                  weatherData.list &&
                  weatherData.list.map((item) => {
                    if (d.epochDate === item.dt) {
                      return (
                        <Typography variant="h6">
                          {d.formattedDate}:{" "}
                          {Math.round(item.main.feels_like - 273.15)}°C
                        </Typography>
                      );
                    } else {
                      return <></>;
                    }
                  })
                );
              })}
            </Grid>
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
