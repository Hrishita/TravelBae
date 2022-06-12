import { Grid } from "@mui/material";
import Filter from "../containers/Filter";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import data from "../containers/Filter/mockData";

const Destinations = () => {
  return (
    <Grid container>
      <Grid
        item
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        md={2}
        xs={0}
      >
        <div style={{ padding: "20px" }}>
          <Typography gutterBottom variant="h5" component="div">
            Filter by
          </Typography>

          <Typography
            gutterBottom
            variant="overline"
            component="div"
            sx={{ marginTop: "20px" }}
          >
            Activities
          </Typography>
          <Divider />
          {data.map((filterProperty) => {
            console.log(filterProperty);
            return <Filter property={filterProperty.property}></Filter>;
          })}
        </div>
      </Grid>
      <Grid item xs={12} md={10}>
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
};

export default Destinations;
