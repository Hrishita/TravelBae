import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import NavBar from "../../containers/NavBar";
import Footer from "../../containers/Footer";
import Slide from "@mui/material/Slide";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const Itinerary = () => {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <NavBar />
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
              mr: 0,
            }}
          >
            <Grid container alignItems="center" justifyContent="center">
              <Grid item xs={2} lg={2}>
                <Box
                  display="flex"
                  sx={{ pl: 2, display: { xs: "none", lg: "block" }, mr: 0 }}
                >
                  <IconButton aria-label="back" href="/trip-planner/travel">
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
                    mr: 0,
                  }}
                >
                  <Typography textAlign="center" variant="h4">
                    Recommended Itineraries
                  </Typography>
                  <Box display="inline-flex" sx={{ pt: 2, pb: 2, mr: 0 }}>
                    <Typography variant="h6">
                      Start Date: 14 June 2022 - End Date: 22 June 2022
                    </Typography>
                  </Box>
                  <Box display="inline-flex" sx={{ mr: 0 }}>
                    <Card sx={{ maxWidth: 200, mr: "2%" }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://img.rawpixel.com/private/static/images/website/2022-05/upwk62245593-wikimedia-image-kows7bw7.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=78c68b0b7585f889b5ce782744619eba"
                          alt="eiffel"
                        />
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
                              whiteSpace="pre"
                            >
                              France
                            </Typography>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 200, mr: "2%" }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://img.rawpixel.com/private/static/images/website/2022-05/upwk62245593-wikimedia-image-kows7bw7.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=78c68b0b7585f889b5ce782744619eba"
                          alt="eiffel"
                        />

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
                              France
                            </Typography>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 200, mr: "2%" }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://img.rawpixel.com/private/static/images/website/2022-05/upwk62245593-wikimedia-image-kows7bw7.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=78c68b0b7585f889b5ce782744619eba"
                          alt="eiffel"
                        />

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
                              France
                            </Typography>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 200, mr: "2%" }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://img.rawpixel.com/private/static/images/website/2022-05/upwk62245593-wikimedia-image-kows7bw7.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=78c68b0b7585f889b5ce782744619eba"
                          alt="eiffel"
                        />
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
                              France
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
                    mr: 0,
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "block", lg: "none" },
                      mr: 0,
                    }}
                  >
                    <IconButton aria-label="back" href="/trip-planner/travel">
                      <ArrowBackOutlinedIcon />
                    </IconButton>
                    <IconButton aria-label="next" href="#">
                      <ArrowForwardOutlinedIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  sx={{ pr: 2, display: { xs: "none", lg: "flex" }, mr: 0 }}
                >
                  <IconButton aria-label="next" href="#">
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

export default Itinerary;
