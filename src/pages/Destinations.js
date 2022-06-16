import { Grid, Box } from "@mui/material";
import Filter from "../containers/Filter";
import { Typography } from "@mui/material";
import data from "../containers/Filter/mockData";
import destinationsData from "../containers/ContentCard/mockData";
import NavBar from "../containers/NavBar";
import ContentCardCont from "../containers/ContentCard";
import SearchCont from "../containers/Search";
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import NoDataFound from "../components/NoDataFound";
import Footer from "../containers/Footer";

const Destinations = () => {
  const [searchInput, setSearchInput] = useState("");
  let destinationIsEmpty = true;
  let showNoData = false;
  // const navigate = useNavigate();

  let handleEvent = (event) => {
    setSearchInput(event);
  };

  const handleListItemClick = (destinationId) => {
    // navigate("/destination", { state: destinationId });
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar></NavBar>
      </Grid>
      <Grid
        item
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        md={2.5}
        xs={0}
      >
        <Filter filterProperties={data}></Filter>
      </Grid>
      <Grid item xs={12} md={9.2}>
        <Typography
          gutterBottom
          variant="h4"
          component="h4"
          color="primary"
          paddingTop="0.5em"
          paddingLeft="17px"
        >
          Destinations
        </Typography>
        <SearchCont onEvent={handleEvent}></SearchCont>
        <Grid container>
          {destinationsData.map((destination) => {
            if (searchInput) {
              if (
                destination.title
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              ) {
                destinationIsEmpty = false;
                return (
                  <ContentCardCont details={destination} onClick={() => {
                    handleListItemClick(destination.id);
                  }}></ContentCardCont>
                );
              } else {
                showNoData = true;
                return false;
              }
            } else {
              destinationIsEmpty = false;
              return <ContentCardCont details={destination} onClick={() => {
                handleListItemClick(destination.id);
              }}></ContentCardCont>;
            }
          })}
          <NoDataFound
            display={showNoData}
            message="Destination not present. Please search for another one or select from the list."
            listEmpty={destinationIsEmpty}
          ></NoDataFound>
          <Box sx={{ textAlign: "center", width: "100%" }}>
            <Pagination
              count={2}
              color="primary"
              sx={{
                display: { xs: "inline-block", marginBottom: "2em" },
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer></Footer>
      </Grid>
    </Grid>
  );
};

export default Destinations;
