import * as React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

const FilterComp = (props) => {
  const [clearAll, setClearAll] = React.useState(true);
  const [checkedItems, setCheckedItems] = React.useState([]);
  console.log("checkeditems...", checkedItems);
  console.log(
    "checkeditems find...",
    checkedItems.find((item) => item === 0)
  );

  const handleChange = (index) => {
    const newItems = [...checkedItems];

    const position = newItems.findIndex((item) => item === index);
    if (position !== -1) {
      newItems.splice(position, 1);
    } else {
      newItems.push(index);
      setClearAll(false);
    }
    setCheckedItems(newItems);
  };
  const handleClearAll = () => {
    setClearAll(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography gutterBottom variant="h5" component="div">
        Filter by
      </Typography>

      {props.filterProperty.filterProperties.length > 0
        ? props.filterProperty.filterProperties.map((section) => {
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
                        control={
                          <Checkbox
                            color="secondary"
                            checked={
                              !clearAll &&
                              checkedItems.findIndex(
                                (item) => item === property.property
                              ) !== -1
                                ? true
                                : false
                            }
                            onChange={() => handleChange(property.property)}
                          />
                        }
                        label={property.property}
                      />
                    </FormGroup>
                  );
                })}
              </div>
            );
          })
        : props.filterProperty.filterProperties.filterProperty.filterProperties.map(
            (section) => {
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
                          control={
                            <Checkbox
                              color="secondary"
                              checked={
                                !clearAll &&
                                checkedItems.findIndex(
                                  (item) => item === property.property
                                ) !== -1
                                  ? true
                                  : false
                              }
                              onChange={() => handleChange(property.property)}
                            />
                          }
                          label={property.property}
                        />
                      </FormGroup>
                    );
                  })}
                </div>
              );
            }
          )}
      <Button variant="contained" onClick={handleClearAll}>
        Clear All
      </Button>
    </div>
  );
};

export default FilterComp;
