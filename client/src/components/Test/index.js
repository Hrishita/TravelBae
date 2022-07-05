import React from "react";
import Grid from "@mui/material/Grid";

const TestComp = (props) => {
  const {data} = props;
  console.log("data comp", data);
  return (
    <Grid container>
      <Grid item>{data.length && data[0].itinerary_city}</Grid>
    </Grid>
  );
};

export default TestComp;
