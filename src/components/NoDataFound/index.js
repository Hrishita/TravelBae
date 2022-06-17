import { Typography } from "@mui/material";
import * as React from "react";

function NoDataFound({ message, display: show, listEmpty }) {
  if (show && listEmpty) {
    return (
      <Typography
        variant="body1"
        component="p"
        sx={{ margin: "20px auto", textAlign: "center" }}
      >
        {message}
      </Typography>
    );
  } else {
    return false;
  }
}

export default NoDataFound;
