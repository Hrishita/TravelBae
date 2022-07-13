import { Box, ButtonBase } from "@mui/material";

import { Grid } from "@mui/material";
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
import React, { useEffect, useState } from "react";
import NavBar from "../containers/NavBar";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { deepOrange, grey } from "@mui/material/colors";
import AlertDialog from "../containers/AlertDialog";
import { Sort } from "@material-ui/icons";
import axios from "axios";

function SearchFlights() {
  const [startDate, setStartDate] = useState();
  const [source, setSource] = useState();
  const [dest, setDest] = useState();
  const [endDate, setEndDate] = useState();
  const [tripType, setTripType] = useState(0);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [flights, setFlights] = useState([])
  const [price, setPrice] = useState()

  const fetchRecommendedFlights = async () => {
    let res = await axios({
      method: "POST",
      url: 'http://localhost:8000/tp/fetchAllTransporation',
    })
    console.log("RESULT", res.data)
    setFlights(res.data.data)
  }
  const fetchFlightsByPrice = async () => {
    let res = await axios({
      method: "POST",
      url: 'http://localhost:8000/tp/fetchTransporationByPrice',
      data: {
        price: price
      }
    })
    console.log("RESULT", res.data)
    setFlights(res.data.data)

  }
    
  useEffect(() => {
    fetchFlightsByPrice()
  }, [])
  useEffect(() => {
    fetchRecommendedFlights()
  }, [])

  const onShowSnackbar = () => {
    setShowSnackbar(true);
  };

  const handleSearch = async () => {
    let res = await axios({
      method: 'POST',
      url: 'http://localhost:8000/tp/fetchTransporationByDestination',
      data: {
        source: source ? source : null,
        dest_name: dest ? dest : null,
        start_date: startDate ? startDate : null,
        return_date: endDate ? endDate : null,
      }
    })
    console.log("RESULTS", res.data.data)
    setFlights(res.data.data)
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <Box component={'div'} className="card shadow flex-wrap p-3 d-flex justify-content-start align-items-center flex-row my-3">
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
              <Box
                sx={{ display: "flex", alignItems: "flex-end", mx: 1, my: 1 }}
              >
                <LocationCity sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  value={source}
                  onChange={(e) => {setSource(e.target.value)} }
                  label="Where From?"
                  variant="standard"
                />
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "flex-end", mx: 1, my: 1 }}
              >
                <LocationCity sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="Where To?"
                  value={dest}
                  onChange={(e) => {setDest(e.target.value)} }
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
              {tripType === 1 ? (
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

              <Box component={'div'} style={{ flex: 1, flexBasis: "100%" }}>
                <Typography id="non-linear-slider" gutterBottom>
                  Price
                </Typography>
                <Slider
                  defaultValue={3000}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  value={price} 
                  onChange={(price)=>{setPrice(price)}} 
                  min={1000}
                  max={10000}
                  
                />
              </Box>
              <Button
                className="mx-2 my-2"
                variant="contained"
                onClick={handleSearch}
              >
                Search
              </Button>
            </Box>

            <Box component={'div'} className="card shadow my-3">
              <Box className='d-flex flex-row justify-content-start align-items-center'>
                <Typography className="mx-4 my-3" variant="h4" fontWeight={"600"}>
                  All flights
                </Typography>
                <ButtonBase>
                  <Sort />
                </ButtonBase>
              </Box>
              {flights.map((d, index) => {
                return (
                  <ButtonBase
                    onClick={onShowSnackbar}
                    className="mx-2 my-2 d-flex flex-row justify-content-between align-items-center flex-wrap"
                    style={{ cursor: "pointer" }}
                  >
                    <Box component={'div'} className="d-flex flex-row justify-content-between align-items-center py-2">
                      <Avatar sx={{ bgcolor: deepOrange[500], mx: 1.4 }}>
                      {d.flight_company_logo}
                      </Avatar>
                      <Box component={'div'} className="d-flex flex-column justify-content-center align-items-center mx-2">
                        <Typography variant={"h5"}>
                          {" "}
                          {d.source}
                          {/* {d.startTime} - {d.endTime}{" "} */}
                        </Typography>
                        <Typography variant={"body1"}>
                          {" "}
                          {new Date(d.start_date).toLocaleString()}
                        </Typography>
                        {/* <Typography color={grey[700]}>
                          {d.flightCompany}
                        </Typography> */}
                      </Box>
                      <Box component={'div'} className='mx-3'>
                        <Box component={'div'}>
                          {d.trip_duration}
                        </Box>
                        <Box>
                          &lt;---------------------------&gt;
                        </Box>
                      </Box>
                      <Box component={'div'} className="d-flex flex-column justify-content-center align-items-center mx-2">
                        <Typography variant={"h5"} >
                          {" "}
                          {d.dest_name}
                          {/* {d.startTime} - {d.endTime}{" "} */}
                        </Typography>
                        <Typography variant={"body1"}>
                          {" "}
                          {new Date(d.return_date).toLocaleString()}
                        </Typography>
                        {/* <Typography color={grey[700]}>
                          {d.flightCompany}
                        </Typography> */}
                      </Box>
                    </Box>
                    {/* <div className="mx-4 py-2">
                      <Typography variant="subtitle1">{d.totalTime}</Typography>
                    </div> */}
                    <Box component={'div'} className="mx-4 py-2">
                      <Typography variant="body1" color={grey[700]}>
                        {d.flight_company}
                      </Typography>
                      <Typography variant="h5" color={grey[700]}>
                        {d.price}
                      </Typography>
                      <Typography variant="body1" color={grey[700]}>
                        {d.trip_type}
                      </Typography>
                    </Box>
                    {/* </div> */}
                  </ButtonBase>
                );
              })}
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SearchFlights;
