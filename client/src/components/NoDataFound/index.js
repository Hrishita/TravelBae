import { Typography } from "@mui/material";
import * as React from "react";

function NoDataFound({ message, listEmpty }) {
    return (
      <Typography
        variant="body1"
        component="p"
        sx={{ margin: "20px auto", textAlign: "center" }}
      >
        {message}
      </Typography>
    );
  }

export default NoDataFound;
