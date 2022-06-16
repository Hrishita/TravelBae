import * as React from "react";
import Paper from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ContentCardComp = ({ details }) => {
  return (
    <Paper elevation={6} sx={{ width: "90%", margin: "20px" }}>
      <Grid container spacing={5}>
        <Grid
          item
          xs={12}
          md={5}
          sx={{ height: "300px", paddingBottom: "20px" }}
        >
          <Box
            sx={{
              width: "100%",
              margin: "20px",
              height: "93%",
            }}
          >
            <img
              className="destination-image"
              alt="destination"
              src="https://live.staticflickr.com/4109/4991929737_4d661d0ff4_b.jpg"
              height={"100%"}
              width={"100%"}
            ></img>
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px 10px 0px" }}
          >
            {details.details.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ margin: "0px 10px 20px" }}
            className="card-content-overflow-ellipsis"
          >
            {details.details.description}
          </Typography>
        </Grid>
        <Grid item sm={12} md={1} sx={{ paddingLeft: "20px" }}>
          <FavoriteIcon
            size="large"
            aria-label="add to bucket list"
            aria-controls="bucketlist-icon"
            aria-haspopup="false"
            color="primary"
            sx={{ margin: "0px 15px 0px 10px", height: "100%", float: "right" }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ContentCardComp;
