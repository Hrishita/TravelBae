import * as React from "react";
import Paper from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useHistory } from "react-router-dom";
import AlertDialog from "../../containers/AlertDialog";
import { useState } from "react";

const DestinationCardComp = ({ details }) => {
  const history = useHistory();
  const handleListItemClick = () => {
    history.push("/destination");
  };
  const [open, setOpen] = useState(false); // for alert box

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Paper
      elevation={6}
      sx={{ height: "150px", width: "90%", margin: "20px", cursor: "pointer" }}
    >
      <Grid container spacing={5}>
        <Grid
          item
          xs={3}
          onClick={() => {
            handleListItemClick();
          }}
        >
          <Box
            sx={{
              height: "110px",
              width: "100%",
              margin: "20px",
            }}
          >
            <img className="destination-image" src={details.details.img}></img>
          </Box>
        </Grid>
        <Grid
          item
          xs={7}
          onClick={() => {
            handleListItemClick();
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{ padding: "20px 10px 2px" }}
          >
            {details.details.dest_name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ margin: "0px 10px 20px" }}
            className="card-overflow-ellipsis"
          >
            {details.details.dest_desc}
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{ paddingLeft: "20px" }}>
          <FavoriteIcon
            size="large"
            aria-label="add to bucket list"
            aria-controls="bucketlist-icon"
            aria-haspopup="false"
            color="primary"
            sx={{ margin: "0px", height: "100%" }}
            onClick={handleOpen}
          />
        </Grid>
        <Grid item xs={12}>
        <AlertDialog
          open={open}
          title="Confirm"
          message="Are you sure you want to add it to the bucket list ?"
          handleClose={handleClose}
          buttons={["Cancel", "Ok"]}
        />
      </Grid>
      </Grid>
    </Paper>
  );
};
export default DestinationCardComp;
