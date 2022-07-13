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
                  alt="gif"
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
                      <h4 style={{ fontWeight: "bold", color: "#045b52" }}>
                        Flags not collected from{" "}
                      </h4>
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      gutterBottom
                      component="div"
                      sx={{ paddingTop: "2%" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio. Praesent libero. Sed cursus ante dapibus
                      diam. Sed nisi. Nulla quis sem at nibh elementum
                      imperdiet. Duis sagittis ipsum. Praesent mauris. 
                    </Typography>
                  </div>
                </div>

                <div style={{ width: "50%", marginLeft: "20%" }}>
                  <img
                  alt="gif"
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
                      <h4 style={{ fontWeight: "bold", color: "#045b52" }}>
                        Flags collected from
                      </h4>
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      gutterBottom
                      component="div"
                      sx={{ paddingTop: "2%" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio. Praesent libero. Sed cursus ante dapibus
                      diam. Sed nisi. Nulla quis sem at nibh elementum
                      imperdiet. Duis sagittis ipsum. Praesent mauris. 
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
                {/* <li style={{ listStyle: "none" }}>
                  <h5>
                    <a href="/userdashboard-flags">Flag bank of Travel Bae</a>
                  </h5>
                </li> */}
                {/* Flag bank of Travel Bae */}
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
