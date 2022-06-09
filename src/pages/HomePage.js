import { Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";
import Navbar from "../containers/Navbar";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Card from "../containers/Card";
import cards from "../containers/Card/mockData";

//homepage
const HomePage = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            width: "auto",
            height: 200,
            backgroundColor: "white",
            border: 1,
            marginTop: "2rem",
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        >
          <Typography
            variant="h5"
            paddingTop={2}
            paddingBottom={2}
            align="center"
          >
            Where to go?
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={8}>
              <Box pl={3} pr={3}>
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
            <Grid item xs={12} sm={4} md={4}>
              <Box pl={2} textAlign="center" pr={2}>
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
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} style={{ textAlign: "left" }}>
        <Grid container>
          <Grid item xs={10} sm={10} md={11}>
            <Typography variant="h5" paddingLeft={4}>
              Popular Destinations
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={1}>
            <Link href="#" variant="h5">
              View All
            </Link>
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
                <Card image={card.img} title={card.title} desc={card.desc} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ textAlign: "left" }}>
        <Grid container>
          <Grid item xs={10} sm={10} md={11}>
            <Typography variant="h5" paddingLeft={4}>
              Popular Activities To Do
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={1}>
            <Link href="#" variant="h5">
              View All
            </Link>
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
                <Card image={card.img} title={card.title} desc={card.desc} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
