/**
 * Author: Smily Ms
 * Feature: Destination Information System
 * Task: Filter Destination, Search destination .
 */
import { Box, Typography } from "@mui/material";
import * as React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
/**
 *
 * @param {*} message
 * @returns a no data message based on search or filter criteria.
 */
function NoDataFound({ message }) {
  return (
    <Box pt={2} pb={3} sx={{ color: "#757575" }}>
      <SentimentVeryDissatisfiedIcon sx={{ fontSize: 50 }} />
      <Typography
        variant="body1"
        component="p"
        sx={{ margin: "20px auto", textAlign: "center" }}
      >
        {message}
      </Typography>
    </Box>
  );
}

export default NoDataFound;
