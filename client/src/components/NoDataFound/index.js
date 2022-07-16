/**
 * Author: Smily Ms
 * Feature: Destination Information System
 * Task: Filter Destination, Search destination .
 */
import { Typography } from "@mui/material";
import * as React from "react";

/**
 *
 * @param {*} message
 * @returns a no data message based on search or filter criteria.
 */
function NoDataFound({ message }) {
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
