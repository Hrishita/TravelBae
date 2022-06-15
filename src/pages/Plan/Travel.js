import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import Navbar from "../../containers/Navbar";
import Footer from "../../containers/Footer";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, Avatar } from "@mui/material";
//https://mui.com/material-ui/material-icons/ ref for icons
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";

const Travel = () => {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <Box
            sx={{
              bgcolor: "secondary.light",
              color: "primary.contrastText",
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
                  <IconButton aria-label="back" href="/trip-planner/plan">
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
                    Who are you travelling with?
                  </Typography>
                  <Box display="inline-flex" sx={{ pt: 2, pb: 2 }}>
                    <Typography variant="h6">
                      Start Date: 14 June 2022 - End Date: 22 June 2022
                    </Typography>
                  </Box>
                  <Box display="inline-flex">
                    <Card sx={{ width: 150, mr: "2%" }}>
                      <CardActionArea>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Avatar sx={{ m: 1 }}>
                            <PersonIcon />
                          </Avatar>
                        </Box>
                        <CardContent>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              Solo
                            </Typography>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    <Card sx={{ width: 150, mr: "2%" }}>
                      <CardActionArea>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Avatar sx={{ m: 1 }}>
                            <FavoriteIcon />
                          </Avatar>
                        </Box>
                        <CardContent>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              Couple
                            </Typography>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    <Card sx={{ width: 150, mr: "2%" }}>
                      <CardActionArea>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Avatar sx={{ m: 1 }}>
                            <FamilyRestroomIcon />
                          </Avatar>
                        </Box>
                        <CardContent>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              Family
                            </Typography>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    <Card sx={{ width: 150, mr: "2%" }}>
                      <CardActionArea>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Avatar sx={{ m: 1 }}>
                            <GroupIcon />
                          </Avatar>
                        </Box>
                        <CardContent>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              Friends
                            </Typography>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
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
                    <IconButton aria-label="back" href="/trip-planner/plan">
                      <ArrowBackOutlinedIcon />
                    </IconButton>
                    <IconButton
                      aria-label="next"
                      href="/trip-planner/itinerary"
                    >
                      <ArrowForwardOutlinedIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  sx={{ pr: 2, display: { xs: "none", lg: "flex" } }}
                >
                  <IconButton aria-label="next" href="/trip-planner/itinerary">
                    <ArrowForwardOutlinedIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Slide>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Travel;
