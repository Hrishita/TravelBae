import {
  Divider,
  Grid,
  Link,
  Typography,
  makeStyles,
  Card,
  CardMedia,
} from "@material-ui/core";
import React from "react";
import CardCarousel from "../containers/CardCarousel";
import NavBar from "../containers/NavBar";
import { Box } from "@material-ui/core";
import SearchBoxComp from "../components/SearchBox";
import {
  destinationData,
  blogCards,
  accCards,
} from "../containers/CardCont/mockData";
import Footer from "../containers/Footer";
// Home page
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)", cursor: "pointer" },
    marginBottom: "10%",
  },
  font: {
    position: "absolute",
    top: "80%",
    left: "10%",
    color: "white",
    backgroundColor: "none",
    fontFamily: "Comic Sans MS",
    textAlign: "center",
  },
}));
const HomePage = () => {
  const classes = useStyles();
  const displayStrip = (title, cards) => {
    const data = cards;
    return (
      <>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={10}>
              <Box pl={2} pt={4}>
                <Typography fontFamily="Nothing You Could Do" variant="h5">
                  {title}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box pt={4} pr={2} display="flex" justifyContent="flex-end">
                <Link>View All</Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Box pb={4}>
            <Divider />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            {data.map((card) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  style={{ textAlign: "center" }}
                >
                  <Card className={classes.root}>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="300"
                      image={card.img}
                      title="Contemplative Reptile"
                    />
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h6"
                      className={classes.font}
                    >
                      {card.title}
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
            {/* <ImageList /> */}
          </Grid>
        </Grid>
      </>
    );
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <CardCarousel hasImgText="true" />
      </Grid>
      <Grid item xs={12}>
        <Box pt={4} pb={4}>
          <SearchBoxComp />
        </Box>
      </Grid>
      {displayStrip("Popular Placees", destinationData)}
      {displayStrip("Travel Blogs", blogCards)}
      {displayStrip("Accommodations", accCards)}

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default HomePage;
