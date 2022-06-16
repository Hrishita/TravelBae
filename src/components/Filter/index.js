import * as React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const FilterComp = (props) => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography gutterBottom variant="h5" component="div">
        Filter by
      </Typography>

      {(props.filterProperty.filterProperties.length > 0 ) ? (props.filterProperty.filterProperties.map((section) => {
        return (
          <div>
            <Typography
              gutterBottom
              variant="overline"
              component="div"
              sx={{ marginTop: "20px" }}
              key={section.key}
            >
              {section.filterTitle}
            </Typography>
            <Divider />
            {section.filterProperties.map((property) => {
              return (
                <FormGroup key={property.key}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={property.property}
                  />
                </FormGroup>
              );
            })}
          </div>
        );
      })) : (props.filterProperty.filterProperties.filterProperty.filterProperties.map((section) => {
        return (
          <div>
            <Typography
              gutterBottom
              variant="overline"
              component="div"
              sx={{ marginTop: "20px" }}
              key={section.key}
            >
              {section.filterTitle}
            </Typography>
            <Divider />
            {section.filterProperties.map((property) => {
              return (
                <FormGroup key={property.key}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={property.property}
                  />
                </FormGroup>
              );
            })}
          </div>
        );
      }))}
    </div>
  );
};

export default FilterComp;
