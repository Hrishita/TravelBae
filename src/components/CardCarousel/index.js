import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import useStyles from "./style";
import data from "../../containers/CardCarousel/mockdata";
const CardCarouselComp = (props) => {
  const classes = useStyles();

  /**
   *
   * @param {*} item - display carousel with images only
   * @param {*} index
   * @returns
   */
  const carouselWithImageOnly = (item, index) => {
    return (
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={item.image}
          alt="green iguana"
        />
        {props.content && (
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.city}
            </Typography>
          </CardContent>
        )}
      </Card>
    );
  };

  /**
   *
   * @param {*} item
   * @param {*} index
   * @returns
   */
  const carouselWithImageTextOverlay = (item, index) => {
    return (
      <Card className={classes.card}>
        <div style={{ position: "relative" }}>
          <CardMedia
            style={{ height: "250px", paddingTop: "2%" }}
            component="img"
            image={item.image}
            title={item.city}
            alt="city"
          />
          <Box>
            <Typography className={classes.cardImgText}>{item.city}</Typography>
          </Box>
        </div>
      </Card>
    );
  };

  return (
    <Carousel classeName={classes.root} index={4}>
      {data.map((item, index) => {
        return props.hasImgText
          ? carouselWithImageTextOverlay(item, index)
          : carouselWithImageOnly(item, index);
      })}
    </Carousel>
  );
};
export default CardCarouselComp;
