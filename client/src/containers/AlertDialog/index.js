import * as React from "react";
import { Box } from "@mui/material";
import AlertDialogComp from "../../components/AlertDialog";

const AlertDialog = (props) => {
  return (
    <Box>
      <AlertDialogComp {...props} />
    </Box>
  );
};

export default AlertDialog;
