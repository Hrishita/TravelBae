import React from "react";
import "./../components/UserDashboard/Dashboard.css";
import img1 from "./../assets/lahore.jpg";
import img2 from "./../assets/boston.jpg";
import NavBar from "../containers/NavBar";
import Footer from "../containers/Footer";
import SideBar from "../components/SideBar/Sidebar";
import { Grid } from "@material-ui/core";

function UserDashbordTrip() {
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
              <h3 className="dashbord-titletext">Upcoming Trips</h3>
              <div className="dashbord-sectionone">
                <div className="dashbord-columnone">
                  {/* CLOSED TRIP INFORMATION */}
                  <div className="dashbord-content">
                    <div className="dashbord-info">
                      <img
                        src={img1}
                        style={{
                          height: "4rem",
                          width: "4rem",
                          borderRadius: "4rem",
                        }}
                        alt=""
                      />
                      <div style={{ marginLeft: "1rem" }}>
                        <h3 className="title">Lahore, Pakistan</h3>
                        <h5 style={{ fontWeight: "300" }}>
                          13 JUNE 2023 TO 14 JUNE 2023
                        </h5>
                      </div>
                    </div>

                    <li style={{ listStyle: "none" }}>
                      <h5 className="all">
                        <a href="/Trips">All Upcoming Trips</a>
                      </h5>
                    </li>
                  </div>
                </div>
              </div>
              <h3 className="dashbord-titletext">Completed Trips</h3>
              <div className="dashbord-sectionone">
                <div className="dashbord-columnone">
                  {/* UPCOMING TRIP INFORMATION */}
                  <div className="dashbord-content">
                    <div className="dashbord-info">
                      <img
                        src={img2}
                        style={{
                          height: "4rem",
                          width: "4rem",
                          borderRadius: "4rem",
                        }}
                        alt=""
                      />
                      <div style={{ marginLeft: "1rem" }}>
                        <h3 className="title">Boston, USA</h3>
                        <h5 style={{ fontWeight: "300" }}>
                          13 JUNE 2022 TO 14 JUNE 2022
                        </h5>
                      </div>
                    </div>
                    <li style={{ listStyle: "none" }}>
                      <h5 className="all">
                        <a href="/Trips">All Completed Trips</a>
                      </h5>
                    </li>
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
    </Grid>
  );
}

export default UserDashbordTrip;
