import React from "react";
import Grid from "@mui/material/Grid";

const TestComp = (props) => {
  const data = props;
  console.log("data.........",data.data[0])
  return (
    <Grid container>
        <Grid item>
            { data.data && data.data.map(item => item.email)}
        </Grid>
    </Grid>
  );
};

export default TestComp;
