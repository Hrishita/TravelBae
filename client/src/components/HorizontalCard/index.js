import React from "react";
import { Button, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LocationOn from "@mui/icons-material/LocationOn";
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

//Code Reference: https://mui.com/core/
function HorizontralCardComp(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [selectTrip, setSelectTrip] = React.useState("");

  const handleChange = (event) => {
    setSelectTrip(event.target.value);
  };

  const [trips, setTrips] = React.useState([{}]);

  useEffect(() => {
    axios
      .post(`${BACKEND_URL}/pt/findPlanTripByUserID/test@gmail.com`)
      .then((res) => {
        setTrips(res.data);
      });
  },[]);

  console.log("trips",trips)

  return (
    <Card sx={{ width: 345, maxWidth: 345, ml: 2, mt: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <LocationOn /> {props.address}, {props.city}
        </Typography>
      </CardContent>
      <CardActions sx={{ ml: 2 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ${props.price}
        </Typography>
        <Button onClick={handleOpen} variant="contained" size="small">
          Learn More
        </Button>
        <Button onClick={handleOpen1} variant="contained" size="small">
          Add to Trip
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              sx={{ mb: 2 }}
            >
              {props.name}:
            </Typography>
            <Divider />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {props.desc}
            </Typography>
          </Box>
        </Modal>

        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              sx={{ mb: 2 }}
            >
              Add to trip:
            </Typography>
            <Divider />
            <Grid container sx={{ pt: 2 }}>
              <Box sx={{ flexGrow: 1 }}>
                {" "}
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Select a plan:
                </Typography>
              </Box>
              <Box>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectTrip}
                      label="Select a Trip"
                      onChange={handleChange}
                    >
                      {trips?.map((myVariable, index) => {
                        return (
                          // <HorizontralCardComp
                          //   key={index}
                          //   name={myVariable.hotel_name}
                          //   address={myVariable.address}
                          //   image={myVariable.hotel_image}
                          //   price={myVariable.price}
                          //   desc={myVariable.hotel_desc}
                          //   city={myVariable.city}
                          // />
                          <MenuItem key={index} value={myVariable.plan_id}>{myVariable.plan_name} - {myVariable.city}</MenuItem>
                        );
                      })}
                      {/* <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Grid>
            <Grid container sx={{ pt: 2 }}>
              <Box sx={{ flexGrow: 1 }}></Box>
              <Button sx={{ minWidth: 120 }} variant="contained">
                Add
              </Button>
            </Grid>
          </Box>
        </Modal>
      </CardActions>
    </Card>
  );
}

export default HorizontralCardComp;
