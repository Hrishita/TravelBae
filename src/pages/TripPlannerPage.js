import React from "react";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@mui/material/TextField";
import { Grid } from "@material-ui/core";
import NavBar from "../containers/NavBar";
import Footer from "../containers/Footer";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Fade from "@mui/material/Fade";
import { Button, Box } from "@mui/material";

const TripPlannerPage = () => {
  return (
    <Fade in={true}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              bgcolor: "secondary.light",
              color: "primary.contrastText",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: "6%",
              pb: "6%",
            }}
          >
            <Grid container alignItems="center" justifyContent="center">
              <Grid item xs={12} sm={8} md={8}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h4">Customized Trip Planner</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={8}>
                <Box pt={2}>
                  <TextField
                    color="secondary"
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
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Box pl={2} textAlign="center" pr={2} pt={3}>
                  <TextField
                    color="secondary"
                    sx={{ marginRight: "1rem" }}
                    id="date_from"
                    label="From"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    color="secondary"
                    id="date_to"
                    label="To"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Box
                  pr={2}
                  pt={3}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button variant="contained" href="/trip-planner/plan">
                    Start Your Planning
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Fade>
  );
};

export default TripPlannerPage;
