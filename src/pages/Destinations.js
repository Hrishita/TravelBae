import { Grid } from "@mui/material";
import Filter from "../containers/Filter";
import { Typography } from "@mui/material";
import data from "../containers/Filter/mockData";

const Destinations = () => {
  return (
    <Grid container>
      <Grid
        item
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        md={2.5}
        xs={0}
      >
          
        <Filter filterProperties={data}></Filter>
              
      </Grid>
      <Grid item xs={12} md={9.2}>
        <Typography
          gutterBottom
          variant="h4"
          component="h4"
          className="page-heading"
        >
          Destinations
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Destinations;
