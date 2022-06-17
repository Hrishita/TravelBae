import React, { useState } from "react";
import "./../components/UserDashboard/Dashboard.css";
import NavBar from "../containers/NavBar";
import AlertDialog from "../containers/AlertDialog";
import Footer from "../containers/Footer";
import SideBar from "../components/SideBar/Sidebar";
import { Grid } from "@material-ui/core";
import { TbPlaneDeparture } from "react-icons/tb";
import { Box, Button } from "@mui/material";

function UserDashbordPlan() {
  const [open, setOpen] = useState(false); // for alert box

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <div className="main-container">
          <SideBar />
          <div className="dashbord-container">
            <div className="dashbord-subcontainer">
              <h2 className="dashbord-titletext">Plans</h2>
              <div className="dashbord-sectionone">
                <div className="dashbord-columnone">
                  <div className="dashbord-content">
                    <div className="dashbord-info">
                      <TbPlaneDeparture
                        style={{
                          height: "4rem",
                          width: "4rem",
                          borderRadius: "4rem",
                        }}
                        alt=""
                      />
                      <div style={{ marginLeft: "1rem" }}>
                        <h3 className="title">Kathmandu, Nepal</h3>
                        <h5 style={{ fontWeight: "300" }}>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Donec quam felis,
                        </h5>
                      </div>
                    </div>
                    <Box display="inline-flex" mr={2}><Button variant="contained" onClick={handleOpen}>Delete Plan</Button></Box>
                    <Box display="inline-flex"><Button variant="contained" onClick={handleOpen}>Complete Trip</Button></Box>

                    {/* <li style={{ listStyle: "none" }}>
                      <h5 className="all">
                        <a href="/userdashboard-plans">ReadMore</a>
                      </h5>
                    </li> */}
                  </div>
                </div>
              </div>
              {/* Stuu */}
              <div className="dashbord-sectionone">
                <div className="dashbord-columnone">
                  <div className="dashbord-content">
                    <div className="dashbord-info">
                      <TbPlaneDeparture
                        style={{
                          height: "4rem",
                          width: "4rem",
                          borderRadius: "4rem",
                        }}
                        alt=""
                      />
                      <div style={{ marginLeft: "1rem" }}>
                        <h3 className="title">Paris, France</h3>
                        <h5 style={{ fontWeight: "300" }}>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Donec quam felis,
                        </h5>
                      </div>
                    </div>
                    <Box display="inline-flex" mr={2}><Button variant="contained" onClick={handleOpen}>Delete Plan</Button></Box>
                    <Box display="inline-flex"><Button variant="contained" onClick={handleOpen}>Complete Trip</Button></Box>
                    {/* <li style={{ listStyle: "none" }}>
                      <h5 className="all">
                        <a href="/userdashboard-plans">ReadMore</a>
                      </h5>
                    </li> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
      <Grid item xs={12}>
        <AlertDialog
          open={open}
          title="Confirm"
          message="API logic required"
          handleClose={handleClose}
          buttons={["Cancel", "Ok"]}
        />
      </Grid>
    </Grid>
  );
}

export default UserDashbordPlan;
