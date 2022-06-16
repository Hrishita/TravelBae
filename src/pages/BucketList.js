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
import data from "../containers/CardCont/mockData";
import Footer from "../containers/Footer";
import { Button, CardActionArea, CardActions } from "@mui/material";

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
const BucketList = () => {
  const classes = useStyles();
  const displayStrip = (title) => {
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
                    <CardActionArea>
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
                    </CardActionArea>
                    <CardActions sx={{ display: "inline-block" }}>
                      <Button
                        size="small"
                        color="primary"
                        className="text-align-center"
                      >
                        Remove from bucket list
                      </Button>
                    </CardActions>
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
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ padding: "1em 3em" }}>
            {displayStrip("Destinations")}
            {displayStrip("Activties to do")}
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default BucketList;
