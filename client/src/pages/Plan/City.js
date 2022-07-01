import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import NavBar from "../../containers/NavBar";
import Footer from "../../containers/Footer";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const City = () => {
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              bgcolor: "#e0ffff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: "6%",
              pb: "6%",
            }}
          >
            <Grid container alignItems="center" justifyContent="center">
              <Grid item xs={2} lg={2}>
                <Box
                  display="flex"
                  sx={{ pl: 2, display: { xs: "none", lg: "block" } }}
                >
                  <IconButton aria-label="back" href="/trip-planner">
                    <ArrowBackOutlinedIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} lg={8}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    pt: 2,
                  }}
                >
                  <Typography textAlign="center" variant="h4">
                    Confirm your Selected City
                  </Typography>
                  <Box display="inline-flex" sx={{ pt: 2, pb: 2 }}>
                    <Typography variant="h6">
                      Start Date: 14 June 2022 - End Date: 22 June 2022
                    </Typography>
                  </Box>
                  <Typography variant="h5">Paris</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} lg={2}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "block", lg: "none" },
                    }}
                  >
                    <IconButton aria-label="back" href="/trip-planner">
                      <ArrowBackOutlinedIcon />
                    </IconButton>
                    <IconButton aria-label="next" href="/trip-planner/travel">
                      <ArrowForwardOutlinedIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  sx={{ pr: 2, display: { xs: "none", lg: "flex" } }}
                >
                  <IconButton aria-label="next" href="/trip-planner/travel">
                    <ArrowForwardOutlinedIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Slide>
  );
};

export default City;
