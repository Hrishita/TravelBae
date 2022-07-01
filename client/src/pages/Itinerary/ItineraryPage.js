import { Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import NavBar from "../../containers/NavBar";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import CardCont from "../../containers/CardCont";
import { cards } from "../../containers/CardCont/mockData";
import { Link } from "react-router-dom";
import Footer from "../../containers/Footer";
import AlertDialog from "../../containers/AlertDialog";

const ItineraryPage = () => {
  const [open, setOpen] = useState(false); // for alert box

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            width: "auto",
            height: 150,
            backgroundColor: "white",
            marginLeft: "2rem",
            marginRight: "2rem",
            mt: 2,
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
              onChange={handleOpen}
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
          sx={{ borderBottomWidth: 3, background: "black", mb: 3 }}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center" spacing="2">
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
                <Link to={"/cityItinerary"} style={{ textDecoration: "none" }}>
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
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
      <Grid item xs={12}>
        <AlertDialog
          open={open}
          title="Confirm"
          message="API logic required to Search"
          handleClose={handleClose}
          buttons={["Cancel", "Ok"]}
        />
      </Grid>
    </Grid>
  );
};

export default ItineraryPage;
