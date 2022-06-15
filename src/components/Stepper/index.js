import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@material-ui/core";
import Navbar from "../../containers/Navbar";
import Footer from "../../containers/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Avatar } from "@mui/material";
import Slide from "@mui/material/Slide";

//https://mui.com/material-ui/material-icons/ ref for icons
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";

const getSteps = () => {
  return [
    <Typography color="primary">Confirm your Selected City</Typography>,
    <Typography color="primary">Who are you travelling with?</Typography>,
    <Typography color="primary">Recommended Itineraries</Typography>,
  ];
};

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return (
        <Box
          component="form"
          sx={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Paris</Typography>
          <Box display="inline-flex">
            <Typography variant="h6">Start Date: 14 June 2022</Typography>
          </Box>
          <Box display="inline-flex">
            <Typography variant="h6">End Date: 22 June 2022</Typography>
          </Box>
        </Box>
      );
    case 1:
      return (
        <Box
          component="form"
          sx={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box display="inline-flex">
            <Typography variant="h6">Start Date: 14 June 2022</Typography>
          </Box>
          <Box display="inline-flex">
            <Typography variant="h6">End Date: 22 June 2022</Typography>
          </Box>
          <Box display="inline-flex">
            <Card sx={{ maxWidth: 200 }}>
              <CardActionArea>
                <Avatar sx={{ m: 1 }}>
                  <PersonIcon />
                </Avatar>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Solo
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 200 }}>
              <CardActionArea>
                <Avatar sx={{ m: 1 }}>
                  <FavoriteIcon />
                </Avatar>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Couple
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 200 }}>
              <CardActionArea>
                <Avatar sx={{ m: 1 }}>
                  <FamilyRestroomIcon />
                </Avatar>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Family
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 200 }}>
              <CardActionArea>
                <Avatar sx={{ m: 1 }}>
                  <GroupIcon />
                </Avatar>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Friends
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      );
    case 2:
      return (
        <Box
          component="form"
          sx={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                // https://img.rawpixel.com/private/static/images/website/2022-05/upwk62245593-wikimedia-image-kows7bw7.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=78c68b0b7585f889b5ce782744619eba ref for img
                image="https://img.rawpixel.com/private/static/images/website/2022-05/upwk62245593-wikimedia-image-kows7bw7.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=78c68b0b7585f889b5ce782744619eba"
                alt="paris"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Paris
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      );
    default:
      return "Unknown step";
  }
};

const StepperComp = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">Plan Your Trip</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => {
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                      <Typography>{getStepContent(index)}</Typography>
                      <Box display="inline-flex" pr={2} pt={2}>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          variant="contained"
                        >
                          Back
                        </Button>
                      </Box>
                      <Box display="inline-flex" pt={2}>
                        <Button
                          onClick={handleNext}
                          variant="contained"
                          color="primary"
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                      </Box>
                    </StepContent>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0}>
                <Typography variant="h6">Form is submitted</Typography>
                <Button
                  onClick={handleReset}
                  variant="contained"
                  color="primary"
                >
                  Reset
                </Button>
              </Paper>
            )}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="center">
            <Footer />
          </Grid>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default StepperComp;
