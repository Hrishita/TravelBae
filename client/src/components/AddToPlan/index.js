import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import { Box, Divider, Typography, Button, Grid } from "@mui/material";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useHistory } from "react-router-dom";

const AddToPlanComp = (props) => {
  const { data, open, handleClose } = props;
  const [plan, setPlan] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [newPlan, setNewPlan] = useState("");
  const auth = useContext(AuthContext);
  const history = useHistory();
  const userId = auth.userId;
  // const data = {
  //   transportation: {
  //     source: "dELHI",
  //     dest_name: "tornoto",
  //     flight_company: "Air Canada",
  //     start_date: 12837129831,
  //     return_date: 18237213910,
  //     trip_type: "Round Trip",
  //     price: 1700,
  //     trip_duration: "17 hours",
  //     flight_company_logo: "AC",
  //   },
  // };
  const keys = data && Object.keys(data);
  const col_name = keys ? keys[0] : [];

  if (Object.keys(plan).length === 0) {
    axios({
      method: "POST",
      url: `${BACKEND_URL}/pt/findPlanTripByUserID/` + userId,
    }).then((res) => {
      setPlan(res.data);
    });
  }

  const handleAdd = () => {
    if (newPlan) {
      axios
        .post(`${BACKEND_URL}/pt/createPlanTrip`, {
          plan_name: newPlan,
          userID: userId,
          [col_name]: data[col_name],
        })
        .then((res) => {
          history.push("/userdashboard-plans");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(`${BACKEND_URL}/pt/updatePlan`, {
          plan_id: selectedPlan,
          [col_name]: data[col_name],
        })
        .then((res) => {
          history.push("/userdashboard-plans");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  const handleNewPlan = (e) => {
    setNewPlan(e.target.value);
  };

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              marginTop: "5%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "background.paper",
              width: "50%",
              marginLeft: "25%",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ADD TO PLAN
            </Typography>
            <Divider />
            <Box pt={2} pb={2}>
              <Box sx={{ minWidth: 140 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Plan
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedPlan}
                    label="Select a Plan"
                    onChange={handleChange}
                  >
                    {plan.length !== 0 &&
                      plan.map((item) => {
                        return (
                          <MenuItem key={item.plan_id} value={item.plan_id}>
                            {item.plan_name} - {item.city}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              OR
            </Typography>
            <Box pb={2} pt={2}>
              <TextField
                fullWidth
                id="plan name"
                label="Enter Plan Name"
                name="plan name"
                color="secondary"
                disabled={selectedPlan !== 0}
                value={newPlan}
                onChange={handleNewPlan}
                autoComplete="plan name"
              />
            </Box>
            <Box pb={2} display={"inline-flex"}>
              <Box pr={5}>
                <Button
                  sx={{ minWidth: 120 }}
                  onClick={handleClose}
                  variant="contained"
                >
                  Close
                </Button>
              </Box>
              <Box>
                <Button
                  sx={{ minWidth: 120 }}
                  onClick={handleAdd}
                  variant="contained"
                >
                  Add
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Grid>
    </Grid>
  );
};

export default AddToPlanComp;
