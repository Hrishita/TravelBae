import { Grid, Typography, Box, CardActions } from "@material-ui/core";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import NavBar from "../containers/NavBar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Divider } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SideBar from "../components/SideBar/Sidebar";

//MockData
import canada from "../assets/flags/canada.jpg";
import india from "../assets/flags/india.jpg";
import usa from "../assets/flags/usa.jpg";
import france from "../assets/flags/france.jpg";

import AlertDialog from "../containers/AlertDialog";
import Footer from "../containers/Footer";

const data = [
  {
    category: "Collected Falgs",
    itemList: [
      {
        name: "Canada",
        image: canada,
      },
      {
        name: "USA",
        image: usa,
      },
    ],
  },
  {
    category: "Upcoming Flags To Be Collected",
    itemList: [
      {
        name: "France",
        image: france,
      },
      {
        name: "India",
        image: india,
      },
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: "contain",
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    paddingBottom: "1rem",
    cursor: "pointer",
  },
  media: {
    objectFit: "scale-down",
    height: "50%",
    alignItems: "center",
    width: "50%",
  },
  actionArea: {
    display: "flex",
  },
  cardFooter: {
    justifyContent: "center",
  },
}));

const UserDashbordFlag = (props) => {
  const classes = useStyles();
  const [checkedItems, setCheckedItems] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (name) => {
    console.log("name...", name);
    const updatedChecklist = [...checkedItems];
    const position = updatedChecklist.findIndex((item) => item === name);
    if (position !== -1) {
      updatedChecklist.splice(position, 1);
    } else {
      updatedChecklist.push(name);
    }
    setCheckedItems(updatedChecklist);
  };

  const displayCards = (name, image) => {
    return (
      <Card
        className={classes.root}
        key={name}
        onClick={() => handleClick(name)}
      >
        <Box component="div" sx={{ height: "1rem" }}>
          {checkedItems.indexOf(name) !== -1 && (
            <CheckCircleIcon color="success" />
          )}
        </Box>
        {image && (
          <CardActionArea className={classes.actionArea}>
            <CardMedia
              className={classes.media}
              component="img"
              image={image}
              alt={name}
            />
          </CardActionArea>
        )}
        <CardActions className={classes.cardFooter}>
          <Typography gutterBottom component="div">
            {name}
          </Typography>
        </CardActions>
      </Card>
    );
  };
  return (
    <Grid spacing={2} container mt={2}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12} sx={{ overflow: "hidden" }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={3}>
            <SideBar />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <Box display="inline-flex">
                  <Typography variant="h5">Flags Collected</Typography>
                  <Box
                    sx={{
                      display: { xs: "flex", lg: "none" },
                    }}
                  ></Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box pb={2}>
                  <Divider
                    variant="middle"
                    sx={{ borderBottomWidth: 3, background: "black" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    width: "auto",
                    height: "auto",
                    backgroundColor: "white",
                    marginLeft: "2rem",
                    marginRight: "2rem",
                  }}
                ></Box>
              </Grid>
              {data.map((dataObj) => {
                return (
                  <>
                    <Grid item xs={12}>
                      <Typography variant="h5" textAlign="center">
                        {dataObj.category}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    {dataObj.itemList.map((item) => (
                      <Grid
                        item
                        xs={6}
                        sm={4}
                        md={2}
                        lg={2}
                        style={{ marginBottom: 20 }}
                      >
                        {displayCards(item.name, item.image)}
                      </Grid>
                    ))}
                  </>
                );
              })}

              <Grid item xs={12}>
                <Box justifyContent="flex-end" display="flex">
                  <Box
                    display="inline-flex"
                    justifyContent="flex-end"
                    paddingRight={4}
                  ></Box>
                  <Box
                    display="inline-flex"
                    justifyContent="flex-end"
                    paddingLeft={2}
                    paddingRight={2}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={handleOpen}
                    >
                      Share Flag
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
};

export default UserDashbordFlag;
