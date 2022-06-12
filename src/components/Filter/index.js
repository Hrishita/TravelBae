import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const FilterComp = (props) => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label={props.property} />
    </FormGroup>
  );
};

export default FilterComp;
