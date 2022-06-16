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
import NavBar from "../containers/NavBar";
import { Box } from "@material-ui/core";
import {
  destinationData,
  blogCards,
  accCards,
} from "../containers/CardCont/mockData";
import Footer from "../containers/Footer";

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
              <Grid item xs={12} sm={3}>
                <Box sx={{ height: "20em", marginBottom: "1em" }}>
                  <img
                    src="https://live.staticflickr.com/4109/4991929737_4d661d0ff4_b.jpg"
                    height={"100%"}
                    width={"100%"}
                  ></img>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ margin: "0px 10px 20px" }}>
                  <Typography variant="h4" color="primary">
                    Canada
                  </Typography>
                  <Typography variant="body2" color="default">
                    Dolore aute amet dolore voluptate. Excepteur ut aute officia
                    fugiat aliqua est dolor ipsum elit dolore sint commodo
                    velit. Culpa sit dolor amet irure nostrud dolore ipsum
                    eiusmod eu tempor mollit ad ad.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ padding: "1em 3em" }}>
            {displayStrip("Travel Blogs", blogCards)}
            {displayStrip("Accommodations", accCards)}
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
