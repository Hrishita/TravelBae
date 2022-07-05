import { Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import NavBar from "../../containers/NavBar";
import Footer from "../../containers/Footer";
import Filter from "../../containers/Filter";
import FilterMenu from "../../containers/FilterMenu";
import filterData from "../../pages/Itinerary/FilterMockData";
import CardCont from "../../containers/CardCont";
// import { cityCards } from "../../containers/CardCont/mockData";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../config";

const CityItineraryPage = () => {
  // const { state } = props.location;
  // console.log("props......", props);
  const location = useLocation();
  const cityName = location.state;
  const [cityCards, setCityCards] = useState([]);

  useEffect(() => {
    const fetchURL = `${BACKEND_URL}/sit/fetchSpecificItineraries`;
    axios
      .post(fetchURL)
      .then((res) => {
        setCityCards(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
      <Grid item xs={12} lg={9}>
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
              Recommended Itineraries for {cityName}
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
            {cityCards.length && cityCards.map((card) => {
              return (
                <Grid item style={{ textAlign: "center" }}>
                  <Link to={{pathname: "/dayItinerary", state: card}} style={{ textDecoration: "none" }}>
                    <CardCont
                      image={card.itinerary_image}
                      title={card.duration}
                      desc={card.itinerary_summary}
                    />
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default CityItineraryPage;
