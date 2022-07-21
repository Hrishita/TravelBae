import { Box, ButtonBase, Pagination, Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
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
import React, { useEffect, useState, useContext } from "react";
import NavBar from "../containers/NavBar";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { deepOrange, grey } from "@mui/material/colors";
import { Sort } from "@material-ui/icons";
import axios from "axios";
import usePagination from "../containers/UsePagination";
import ModalComp from "../components/Modal";
import { BACKEND_URL } from "../config";
import { AuthContext } from "../context/AuthContext";
import AddToPlanComp from "../components/AddToPlan";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function SearchFlights() {
  const [startDate, setStartDate] = useState();
  const [source, setSource] = useState("");
  const [dest, setDest] = useState("");
  const [endDate, setEndDate] = useState();
  const [tripType, setTripType] = useState(0);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [selectTrip, setSelectTrip] = React.useState("");
  const [trips, setTrips] = React.useState([{}]);

  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [price, setPrice] = useState();
  const [show, setShow] = useState(false);
  const auth = useContext(AuthContext);
  const userId = auth.userId ? auth.userId : "";

  useEffect(() => {
    axios
      .post(`${BACKEND_URL}/pt/findPlanTripByUserID/${userId}`)
      .then((res) => {
        setTrips(res.data);
      });
  }, []);

  const fetchRecommendedFlights = async () => {
    let res = await axios({
      method: "POST",

      url: `${BACKEND_URL}/tp/fetchAllTransporation`,
    });
    setFlights(res.data.data);
    setFilteredFlights(res.data.data);
  };
  const handleChange = (event) => {
    setSelectTrip(event.target.value);
  };
  useEffect(() => {
    fetchRecommendedFlights();
  }, []);

  const checkForEmptySearch = (source, dest) => {
    if (source == "" && dest == "") {
      fetchRecommendedFlights();
    }
  };

  const onShowSnackbar = () => {
    setShowSnackbar(true);
  };

  const handleSearch = async () => {
    if (source == "" || dest == "") {
      setShow(true);
    } else {
      if (tripType == 0) {
        //one way
        let d = new Date(startDate);
        d.setHours(0);
        d.setSeconds(0);
        d.setMinutes(0);
        let res = await axios({
          method: "POST",
          url: `${BACKEND_URL}/tp/fetchTransporationByDestination`,
          data: {
            source: source ? source : null,
            dest_name: dest ? dest : null,
            start_date: startDate ? d.getTime() : null,
          },
        });
        setFlights(res.data.data);
        setFilteredFlights(res.data.data);
      } else {
        //round trip
        let d1 = new Date(startDate);
        d1.setHours(0);
        d1.setSeconds(0);
        d1.setMinutes(0);
        let d2 = new Date(endDate);
        d2.setHours(0);
        d2.setSeconds(0);
        d2.setMinutes(0);
        let res = await axios({
          method: "POST",
          url: `${BACKEND_URL}/tp/fetchTransporationByDestination`,
          data: {
            source: source ? source : null,
            dest_name: dest ? dest : null,
            start_date: startDate ? d1.getTime() : null,
            return_date: endDate ? d2.getTime() : null,
          },
        });
        setFlights(res.data.data);
        setFilteredFlights(res.data.data);
      }
    }
  };

  const handleSort = () => {
    let sorted = [...flights];
    sorted.sort((a, b) => {
      return a.price - b.price;
    });
    setFilteredFlights(sorted);
  };

  const handlePriceChange = (price) => {
    setPrice(price);
    let newFlightsList = [...flights];
    newFlightsList = newFlightsList.filter((f) => {
      return f.price <= price;
    });
    setFilteredFlights(newFlightsList);
  };

  const [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(filteredFlights.length / PER_PAGE);

  const handleChange1 = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const planTripHandler = async (data) => {
    let res = await axios({
      method: "POST",
      url: `${BACKEND_URL}/pt/updatePlan`,
      transportation: {
        ...data,
        plan_id: Math.random() * 1000000,
        city: data.dest_name,
        emailid: userId,
        country: "temp",
      },
    });
  };

  const _DATA = usePagination(filteredFlights, PER_PAGE);

  return (
    <Grid container>
      {show ? (
        <ModalComp
          show={show}
          handleClose={() => {
            setShow(false);
          }}
          text={"Please enter both source and destination place"}
        />
      ) : null}
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <Box
              component={"div"}
              className="card shadow flex-wrap p-3 d-flex justify-content-start align-items-center flex-row my-3"
            >
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
                  onChange={(e) => {
                    setSource(e.target.value);
                    checkForEmptySearch(e.target.value, dest);
                  }}
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
                  onChange={(e) => {
                    setDest(e.target.value);
                    checkForEmptySearch(source, e.target.value);
                  }}
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

              <Box component={"div"} style={{ flex: 1, flexBasis: "100%" }}>
                <Typography id="non-linear-slider" gutterBottom>
                  Price
                </Typography>
                <Slider
                  defaultValue={3000}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  value={price}
                  onChange={(e) => {
                    handlePriceChange(e.target.value);
                  }}
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

            <Box component={"div"} className="card shadow my-3">
              <Box className="d-flex flex-row justify-content-start align-items-center">
                <Typography
                  className="mx-4 my-3"
                  variant="h4"
                  fontWeight={"600"}
                >
                  All flights
                </Typography>
                <ButtonBase>
                  <Sort onClick={handleSort} />
                </ButtonBase>
              </Box>
              {_DATA.length == 0 ? (
                <Box className="d-flex flex-row justify-content-center align-items-center">
                  <Typography className="mx-4 my-3" variant="h4">
                    No flights found
                  </Typography>
                </Box>
              ) : null}
              {_DATA.currentData().map((d, index) => {
                return (
                  <Box
                    className="mx-2 my-2 d-flex flex-row justify-content-between align-items-center flex-wrap"
                    style={{ cursor: "pointer" }}
                  >
                    <Box
                      onClick={onShowSnackbar}
                      component={"div"}
                      className="d-flex flex-row justify-content-between align-items-center py-2"
                    >
                      <Avatar sx={{ bgcolor: deepOrange[500], mx: 1.4 }}>
                        {d.flight_company_logo}
                      </Avatar>
                      <Box
                        component={"div"}
                        className="d-flex flex-column justify-content-center align-items-center mx-2"
                      >
                        <Typography variant={"h5"}> {d.source}</Typography>
                        <Typography variant={"body1"}>
                          {" "}
                          {new Date(d.start_date).toLocaleString()}
                        </Typography>
                      </Box>
                      <Box component={"div"} className="mx-3">
                        <Box component={"div"}>{d.trip_duration}</Box>
                        <Box>&lt;---------------------------&gt;</Box>
                      </Box>
                      <Box
                        component={"div"}
                        className="d-flex flex-column justify-content-center align-items-center mx-2"
                      >
                        <Typography variant={"h5"}> {d.dest_name}</Typography>
                        <Typography variant={"body1"}>
                          {" "}
                          {new Date(d.return_date).toLocaleString()}
                        </Typography>
                      </Box>
                    </Box>

                    <Box component={"div"} className="mx-4 py-2">
                      <Typography variant="body1" color={grey[700]}>
                        {d.flight_company}
                      </Typography>
                      <Typography variant="h5" color={grey[700]}>
                        {d.price} CAD
                      </Typography>
                      <Typography variant="body1" color={grey[700]}>
                        {d.trip_type}
                      </Typography>
                    </Box>

                    <Box component={"div"} className="mx-4 py-2">
                      {/* <Modal
                        open={open1}
                        onClose={handleClose1}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Typography
                            id="modal-modal-title"
                            variant="h5"
                            component="h2"
                            sx={{ mb: 2 }}
                          >
                            Add to Plan:
                          </Typography>
                          <Divider />
                          <Grid container sx={{ pt: 2 }}>
                            <Box sx={{ flexGrow: 1 }}>
                              {" "}
                              <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                              >
                                Select a plan:
                              </Typography>
                            </Box>
                            <Box>
                              <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">
                                    Select a plan
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectTrip}
                                    label="Select a Trip"
                                    onChange={handleChange}
                                  >
                                    {trips?.map((myVariable, index) => {
                                      return (
                                        <MenuItem
                                          key={index}
                                          value={myVariable.plan_id}
                                        >
                                          {myVariable.plan_name} -{" "}
                                          {myVariable.city}
                                        </MenuItem>
                                      );
                                    })}
                                  </Select>
                                </FormControl>
                              </Box>
                            </Box>
                          </Grid>
                          <Grid container sx={{ pt: 2 }}>
                            <Box sx={{ flexGrow: 1 }}></Box>
                            <Button
                              sx={{ minWidth: 120 }}
                              variant="contained"
                              onClick={() => {
                                planTripHandler(d);
                              }}
                            >
                              Add
                            </Button>
                          </Grid>
                        </Box>
                      </Modal> */}
                      {
                        <AddToPlanComp
                          open={open1}
                          handleClose={handleClose1}
                          data={{
                            transportation: {
                              source: d.source,
                              dest_name: d.dest_name,
                              flight_company: d.flight_company,
                              start_date: new Date(d.start_date),
                              return_date: new Date(d.return_date),
                              trip_type: d.trip_type,
                              price: d.price,
                              trip_duration: d.trip_duration,
                            },
                          }}
                        />
                      }
                      <Button
                        onClick={handleOpen1}
                        style={{ zIndex: 99 }}
                        variant={"contained"}
                      >
                        Add to Plan
                      </Button>
                    </Box>
                  </Box>
                );
              })}
            </Box>

            <Grid item xs={12}>
              <Grid container alignItems="center" justifyContent="center">
                <Grid container justifyContent="center" sx={{ mt: 3, mb: 2 }}>
                  <Stack spacing={2}>
                    <Pagination
                      count={count}
                      color="primary"
                      page={page}
                      variant="outlined"
                      shape="rounded"
                      onChange={handleChange1}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
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
