import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// Search box
const AccommodationSearchBoxComp = (props) => {
  let today = new Date().toISOString().slice(0, 10);

  const history = useHistory();

  const [searchKeyword, setSearchKeyword] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  
  const handleClick = (e) => {
    const sendData={
      keyword:searchKeyword,
      cinDate:checkInDate,
      coutDate:checkOutDate
    }
    props.keyword(sendData);
    // history.push("/accommodationlist");
  };

  return (
    <Box paddingLeft={4} paddingRight={4}>
      <Grid container spacing={4} alignItems="center">
        <Grid item lg={2} md={2} xs={12}>
          <Typography variant="h5" textAlign="center">
            Where do you want to go?
          </Typography>
        </Grid>
        <Grid item lg={3} md={2} xs={12}>
          <Box justify="center" display="flex" justifyContent="center">
            <TextField
              id="searchKeyword"
              name="searchKeyword"
              placeholder="Destination"
              size="medium"
              type="search"
              color="secondary"
              onChange={(v) => setSearchKeyword(v.target.value) }
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item lg={2} md={2} xs={12}>
          <TextField
            id="date"
            label="Check-in"
            type="date"
            color="secondary"
            defaultValue={today}
            sx={{ display: "flex" }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(v) => setCheckInDate(v.target.value) }
          />
        </Grid>
        <Grid item lg={2} md={2} xs={12}>
          <TextField
            id="date"
            label="Check-out"
            type="date"
            color="secondary"
            defaultValue={today}
            sx={{ display: "flex" }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(v) => setCheckOutDate(v.target.value) }
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
          <Button onClick={handleClick} variant="contained" fullWidth>
            <Typography p={1}>Search</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccommodationSearchBoxComp;
