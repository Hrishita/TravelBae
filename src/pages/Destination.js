import { Divider, Link, makeStyles, Card, CardMedia } from "@material-ui/core";
import React from "react";
import NavBar from "../containers/NavBar";
import { Grid, Box, Typography } from "@mui/material";
import {
  destinationData,
  blogCards,
  accCards,
} from "../containers/CardCont/mockData";
import Footer from "../containers/Footer";
import { useHistory } from "react-router-dom";

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
const Destination = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleListItemClick = (navigationLink) => {
    history.push(navigationLink);
  };
  const displayStrip = (title, cards, navigationLink) => {
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
                <Link color="secondary">View All</Link>
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
            {cards.map((card) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  style={{ textAlign: "center" }}
                >
                  <Card className={classes.root} onClick={() => {
        handleListItemClick(navigationLink);
      }}>
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
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ padding: "1em 3em" }}>
            <Grid container>
              <Grid item sm={12} md={4}>
                <Box sx={{ height: "20em", marginBottom: "1em" }}>
                  <img
                    src="https://live.staticflickr.com/7105/27035703252_15ee559f5a_b.jpg"
                    height={"100%"}
                    alt="image4"
                    width={"100%"}
                  ></img>
                </Box>
              </Grid>
              <Grid item sm={12} md={5}>
                <Box sx={{ margin: "0px 10px 20px" }}>
                  <Typography variant="h4" color="primary">
                    Canada
                  </Typography>
                  <Typography variant="body2" color="default">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione aliquam voluptatem esse delectus architecto facere
                    totam aperiam sapiente aut, eius nisi possimus. Ipsum eius
                    sapiente molestiae impedit maxime quisquam soluta. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Ratione
                    aliquam voluptatem esse delectus architecto facere totam
                    aperiam sapiente aut, eius nisi possimus. Ipsum eius
                    sapiente molestiae impedit maxime quisquam soluta. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Ratione
                    aliquam voluptatem esse delectus architecto facere totam
                    aperiam sapiente aut, eius nisi possimus. Ipsum eius
                    sapiente molestiae impedit maxime quisquam soluta.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ padding: "1em 3em" }}>
            {displayStrip("Travel Blogs", blogCards, "/view-blogs")}
            {displayStrip("Accommodations", accCards, "/accommodationList")}
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};
export default Destination;
