import React from "react";
import "./../components/UserDashboard/Dashboard.css";
import NavBar from "../containers/NavBar";
import Footer from "../containers/Footer";
import SideBar from "../components/SideBar/Sidebar";
import { Grid } from "@material-ui/core";
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

function UserDashbordPlan() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/write-plan");
  };
  const theme = useTheme();

  const handleDelete = () => {
    // @Todo backend logic to delete plan
  };

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
              {plan.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Jenner Joe
            </Typography>
            <Typography>{plan.desc}</Typography>
          </Box>
          <Box>
            <DeleteIcon color="primary" onClick={handleDelete} />
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
                    My Plans
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Box pt={2} pr={4} display="flex" justifyContent="flex-end">
                  <Button variant="outlined" color="primary">
                    Create Plan
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Box pl={2} pt={2} pb={2} pr={2}>
              <Divider />
            </Box>
            <Box ml={2} pl={2} pt={3} pb={3} mr={3}>
              <Grid container flexDirection="column" spacing={2}>
                {planData.map((blog) => {
                  return displayCard(blog);
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
                {completedPlanData.map((blog) => {
                  return displayCard(blog);
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
