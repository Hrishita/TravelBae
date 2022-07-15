import React, { useEffect, useContext } from "react";
import "./../components/UserDashboard/Dashboard.css";
import NavBar from "../containers/NavBar";
import Footer from "../containers/Footer";
import SideBar from "../components/SideBar/Sidebar";
import { Grid } from "@material-ui/core";
import axios from "axios";
import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { planData } from "../containers/CardCont/mockData";
import { completedPlanData } from "../containers/CardCont/mockData";
import { AuthContext } from "../context/AuthContext";
import Checkbox from "@mui/material/Checkbox";

function UserDashbordPlan() {
  const auth = useContext(AuthContext);

  // console.log(auth);
  let id = null;

  if (auth && auth.isLoggedIn == true && auth.userId != null) {
    id = auth.userId;
  } else {
    id = "test@gmail.com";
  }

  const history = useHistory();
  const [UpcomingPlanTrip, setUpcomingPlanTrip] = React.useState([]);
  const [CompletedPlanTrip, setCompletedPlanTrip] = React.useState([]);

  const handleDelete = (id) => {
    axios({
      method: "post",
      url: "http://localhost:8000/pt/deletePlanTripByID",
      data: {
        plan_id: id,
      },
    })
      .then((res) => {
        fetchAllPlanTrips();
      })
      .catch((error) => console.log(error));
  };

  const handleClick = () => {
    history.push("/");
  };

  const handleComplete = (id) => {
    axios({
      method: "post",
      url: "http://localhost:8000/pt/updatePlanTripByID",
      data: {
        plan_id: id,
      },
    })
      .then((res) => {
        fetchAllPlanTrips();
      })
      .catch((error) => console.log(error));
  };

  const fetchAllPlanTrips = async () => {
    // console.log("fetching the data");
    let res = await axios({
      method: "POST",
      url: `${BACKEND_URL}/pt/findPlanTripByUserID/` + id,
    });

    let locData = await axios({
      method: "GET",
      url: `${BACKEND_URL}/destination/fetchAllDestinations`,
    });

    let finalUpcomingData = Array();
    let finalCompletedData = Array();

    res.data.map((cities) => {
      // console.log(cities);
      for (let i = 0; i < locData.data.destinations.length; i++) {
        if (locData.data.destinations[i].dest_name === cities.city) {
          if (cities.is_completed === false) {
            locData.data.destinations[i].res = cities;
            finalUpcomingData.push(locData.data.destinations[i]);
            return true;
          } else {
            locData.data.destinations[i].res = cities;
            finalCompletedData.push(locData.data.destinations[i]);
            return true;
          }
        }
      }
    });

    setUpcomingPlanTrip(finalUpcomingData);
    setCompletedPlanTrip(finalCompletedData);

    // console.log(res.data);
  };

  useEffect(() => {
    fetchAllPlanTrips();
  }, []);

  const theme = useTheme();

  const displayCard = (plan) => {
    return (
      <Grid item xs={12}>
        <Paper sx={{ display: "flex" }}>
          <Box sx={{ display: "flex" }} onClick={handleClick}>
            <img
              src={plan.img}
              width="200rem"
              alt="Plan Image"
              onClick={handleClick}
            />
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", padding: 2 }}
            onClick={handleClick}
          >
            <Typography component="div" variant="h5">
              {plan.dest_name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {plan.res.start_date + " - " + plan.res.end_date}
            </Typography>
            <Typography>{plan.dest_desc}</Typography>
          </Box>

          <Box>
            <DeleteIcon
              color="primary"
              cursor="pointer"
              onClick={() => {
                handleDelete(plan.res.plan_id);
              }}
            />
            {/* {if(plan.res.is_completed===true)} */}
            {/* <Checkbox
              onClick={() => {
                handleComplete(plan.res.plan_id);
              }}
            /> */}
            {/* <Grid item lg={9}>
              <Box pt={2} pr={4} display="flex" justifyContent="flex-end">
                <Button variant="outlined" color="primary">
                  Completed
                </Button>
              </Box>
            </Grid> */}
          </Box>
        </Paper>
      </Grid>
    );
  };

  return (
    <Grid container>
      <CssBaseline />
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12} lg={3}>
        <SideBar />
      </Grid>
      <Grid item xs={12} lg={8}>
        <Box pl={3} mt={4} pb={3} display="flex">
          <Paper>
            <Grid container>
              <Grid item lg={6}>
                <Box pt={2} pl={4}>
                  <Typography variant="h4" component="span">
                    Upcoming Plans
                  </Typography>
                </Box>
              </Grid>
              {/* <Grid item lg={6}>
                <Box pt={2} pr={4} display="flex" justifyContent="flex-end">
                  <Button variant="outlined" color="primary">
                    Create Plan
                  </Button>
                </Box>
              </Grid> */}
            </Grid>
            <Box pl={2} pt={2} pb={2} pr={2}>
              <Divider />
            </Box>
            <Box ml={2} pl={2} pt={3} pb={3} mr={3}>
              <Grid container flexDirection="column" spacing={2}>
                {UpcomingPlanTrip.map((plan) => {
                  return displayCard(plan);
                })}
              </Grid>
            </Box>
            <Grid item lg={6}>
              <Box pt={2} pl={4}>
                <Typography variant="h4" component="span">
                  Plans Completed
                </Typography>
              </Box>
            </Grid>
            <Box pl={2} pt={2} pb={2} pr={2}>
              <Divider />
            </Box>
            <Box ml={2} pl={2} pt={3} pb={3} mr={3}>
              <Grid container flexDirection="column" spacing={2}>
                {CompletedPlanTrip.map((plan) => {
                  return displayCard(plan);
                })}
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default UserDashbordPlan;
