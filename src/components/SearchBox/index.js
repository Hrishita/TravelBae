import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Box, Grid } from "@material-ui/core";

// Search box
const SearchBoxComp = () => {
  return (
    <Box marginLeft={4} marginRight={4}>
      <Grid container spacing={4} alignItems="center">
        <Grid item lg={3} md={3} xs={12}>
          <Typography variant="h5" textAlign="center">
            Where do you want to go?
          </Typography>
        </Grid>
        <Grid item lg={4} md={3} xs={12}>
          <Box justify="center" display="flex" justifyContent="center">
            <TextField
              placeholder="Destination"
              size="medium"
              type="search"
              color="secondary"
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item lg={3} md={3} xs={12}>
          <TextField
            type="date"
            color="secondary"
            fullWidth
            placeholder="Date"
          />
        </Grid>
        <Grid
          item
          lg={2}
          md={3}
          xs={12}
          alignContent="center"
          alignItems="center"
        >
          <Button variant="contained" fullWidth>
            <Typography p={1}>Search</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBoxComp;
