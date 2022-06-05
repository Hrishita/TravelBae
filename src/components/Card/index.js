import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@material-ui/core";

const CardComp = (props) => {
  return (
    <Grid container justifyContent="center">
      <Card sx={{ maxWidth: 250, paddingRight: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="145"
            image={props.image}
            alt={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CardComp;
