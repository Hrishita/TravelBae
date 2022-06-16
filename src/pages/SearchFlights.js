import { Box, ButtonBase } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Footer from "../containers/Footer";
import { LocationCity } from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select, 
  Slider,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";
import NavBar from "../containers/NavBar";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { deepOrange, grey } from "@mui/material/colors";
import { margin } from "@mui/system";

const fakeData = [
  {
    id: 1,
    startTime: "9:30 P.M.",
    endTime: "11:30 P.M.",
    totalTime: "37 Hours 25 min",
    flightCompany: "Air Canada",
    price: "$1000",
  },
  {
    id: 2,
    startTime: "9:30 P.M.",
    endTime: "11:30 P.M.",
    totalTime: "37 Hours 25 min",
    flightCompany: "Air Canada",
    price: "$1000",
  },
  {
    id: 3,
    startTime: "9:30 P.M.",
    endTime: "11:30 P.M.",
    totalTime: "37 Hours 25 min",
    flightCompany: "Air Canada",
    price: "$1000",
  },
  {
    id: 4,
    startTime: "9:30 P.M.",
    endTime: "11:30 P.M.",
    totalTime: "37 Hours 25 min",
    flightCompany: "Air Canada",
    price: "$1000",
  },
  {
    id: 5,
    startTime: "9:30 P.M.",
    endTime: "11:30 P.M.",
    totalTime: "37 Hours 25 min",
    flightCompany: "Air Canada",
    price: "$1000",
  },
  {
    id: 6,
    startTime: "9:30 P.M.",
    endTime: "11:30 P.M.",
    totalTime: "37 Hours 25 min",
    flightCompany: "Air Canada",
    price: "$1000",
  },
];

function SearchFlights() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [from, setFrom] = useState("");
  const [end, setEnd] = useState("");
  const [tripType, setTripType] = useState(0);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const onShowSnackbar = () => {
    setShowSnackbar(true);
  };
  return (
    <Grid container sx={{margin:'30px'}}>
   
      <div className="container">
        <div className="card shadow flex-wrap p-3 d-flex justify-content-start align-items-center flex-row my-3">
          <Snackbar
            open={showSnackbar}
            autoHideDuration={6000}
            onClose={() => {
              setShowSnackbar(false);
            }}
          >
            <Alert
              onClose={() => {
                setShowSnackbar(false);
              }}
              severity="success"
              sx={{ width: "100%" }}
            >
              You will be redirected to company site
            </Alert>
          </Snackbar>
          <FormControl fullWidth className="my-2">
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={tripType}
              label="Age"
              onChange={(e) => {
                setTripType(e.target.value);
              }}
            >
              <MenuItem value={0}>One Way</MenuItem>

              <MenuItem value={1}>Round Trip</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ display: "flex", alignItems: "flex-end", mx: 1, my: 1 }}>
            <LocationCity sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Where From?"
              variant="standard"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", mx: 1, my: 1 }}>
            <LocationCity sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Where To?"
              variant="standard"
            />
          </Box>
          <Box sx={{ mx: 1, my: 1 }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Start date"
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
          {tripType == 1 ? (
            <Box sx={{ mx: 1, my: 1 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="End date"
                  value={endDate}
                  onChange={(newValue) => {
                    setEndDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
          ) : null}

          <div style={{ flex: 1, flexBasis: "100%" }}>
            <Typography id="non-linear-slider" gutterBottom>
              Price
            </Typography>
            <Slider
              defaultValue={200}
              aria-label="Default"
              valueLabelDisplay="auto"
              min={1000}
              max={10000}
            />
          </div>
          <Button className="mx-2 my-2" variant="contained"
          color="primary"
          onClick={onShowSnackbar}
          >
            Search
          </Button>
        </div>
        <div className="card shadow my-3">
          <Typography className="mx-4 my-3" variant="h5" fontWeight={"600"}>
            All flights
          </Typography>
          {fakeData.map((d, index) => {
            return (
              <ButtonBase
                onClick={onShowSnackbar}
                className="mx-2 my-2 d-flex flex-row justify-content-between align-items-center flex-wrap"
                style={{ cursor: "pointer" }}
              >
                {/* <div onClick={onShowSnackbar} className='mx-2 my-2 d-flex flex-row justify-content-between align-items-center flex-wrap' style={{cursor: 'pointer'}}> */}
                <div className="d-flex flex-row justify-content-between align-items-center py-2">
                  <Avatar sx={{ bgcolor: deepOrange[500], mx: 1.4 }}>A</Avatar>
                  <div className="d-flex flex-column justify-content-center align-items-start">
                    <Typography variant={"body1"}>
                      {" "}
                      {d.startTime} - {d.endTime}{" "}
                    </Typography>
                    <Typography color={grey[700]}>{d.flightCompany}</Typography>
                  </div>
                </div>
                <div className="mx-4 py-2">
                  <Typography variant="subtitle1">{d.totalTime}</Typography>
                </div>
                <div className="mx-4 py-2">
                  <Typography variant="h5" color={grey[700]}>
                    {d.price}
                  </Typography>
                </div>
                {/* </div> */}
              </ButtonBase>
            );
          })}
        </div>
      </div>
      <Footer/>
    </Grid>
  );
}

export default SearchFlights;
