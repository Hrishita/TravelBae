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
import AlertDialog from "../../containers/AlertDialog";

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
      </CardActions>
      <Grid item xs={12}>
        <AlertDialog
          open={open1}
          title="Confirm"
          message="API logic required to Save"
          handleClose={handleClose1}
          buttons={["Cancel", "Ok"]}
        />
      </Grid>
    </Card>
  );
}

export default HorizontralCardComp;
