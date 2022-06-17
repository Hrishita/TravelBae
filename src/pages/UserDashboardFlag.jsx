import React from "react";
import "./../components/UserDashboard/Dashboard.css";
import gif1 from "./../assets/blue-flag.gif";
import gif2 from "./../assets/white-flag.gif";
import SideBar from "../components/SideBar/Sidebar";
import Footer from "../containers/Footer";
import NavBar from "../containers/NavBar";
import { Grid } from "@material-ui/core";
import Typography from "@mui/material/Typography";

function UserDashbordFlag() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <div className="main-container">
          <SideBar />
          <div
            className="dashbord-container"
            style={{ justifyContent: "center" }}
          >
            <h3 className="dashbord-titletext">FLAGS</h3>
            <div style={{ width: "85%", height: "70%" }}>
              <div style={{ height: "70%", display: "flex" }}>
                <div style={{ width: "50%", marginLeft: "20%" }}>
                  <img
                    src={gif2}
                    style={{
                      height: "14rem",
                      borderRadius: "2rem",
                    }}
                  />
                  <div>
                    <Typography
                      variant="h5"
                      gutterBottom
                      component="div"
                      sx={{ paddingTop: "2%" }}
                    >
                      <h4>Flags not collected from </h4>
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      gutterBottom
                      component="div"
                      sx={{ paddingTop: "2%" }}
                    >
                      Seoul Trip
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      gutterBottom
                      component="div"
                      sx={{ paddingTop: "2%" }}
                    >
                      Kathamandu Trip
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      gutterBottom
                      component="div"
                      sx={{ paddingTop: "2%" }}
                    >
                      Sanfransico Trip
                    </Typography>
                  </div>
                </div>

                <div style={{ width: "50%", marginLeft: "20%" }}>
                  <img
                    src={gif1}
                    style={{
                      height: "14rem",
                      borderRadius: "2rem",
                    }}
                  />
                  <div>
                    <Typography
                      variant="h5"
                      gutterBottom
                      component="div"
                      sx={{ paddingTop: "2%" }}
                    >
                      <h4>Flags collected from</h4>
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      gutterBottom
                      component="div"
                      sx={{ paddingTop: "2%" }}
                    >
                      Lahore Trip
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      gutterBottom
                      component="div"
                      sx={{ paddingTop: "2%" }}
                    >
                      Halifax Trip
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      gutterBottom
                      component="div"
                      sx={{ paddingTop: "2%" }}
                    >
                      Toronto Trip
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <Typography
                variant="h3"
                gutterBottom
                component="div"
                sx={{ paddingTop: "2%" }}
              >
                Flag bank of Travel Bae
              </Typography>
            </div>

            {}
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default UserDashbordFlag;
