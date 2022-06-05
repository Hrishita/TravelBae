import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "@material-ui/core";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import {
  confirmPwdValidator,
  isEmailValid,
  passwordValidator,
} from "../../utils/validations";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const RegisterComp = (props) => {
  //form values

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [inputValues, setInputValue] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Validation Initialization

  const [validation, setValidation] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //handle user input updates

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
    setValidation({ ...validation, [name]: "" });
  };

  //validate registration form

  const checkValidation = () => {
    let errors = Object.assign({}, validation);

    //first Name validation
    if (!inputValues.fName.trim()) {
      errors.fName = "First name is required";
    } else {
      errors.fName = "";
    }
    //last Name validation
    if (!inputValues.lName.trim()) {
      errors.lName = "Last name is required";
    } else {
      errors.lName = "";
    }

    // email validation

    if (!isEmailValid(inputValues.email)) {
      errors.email = "Enter valid email address";
    } else {
      errors.email = "";
    }

    //password validation

    const pwdValidate = passwordValidator(inputValues.password, "password");
    if (!pwdValidate.isValid) {
      errors.password = pwdValidate.errorMsg;
    } else {
      errors.password = "";
    }

    // confirm password
    const confirmValidate = confirmPwdValidator(
      inputValues.confirmPassword,
      inputValues.password
    );

    if (!confirmValidate.isValid) {
      errors.confirmPassword = confirmValidate.errorMsg;
    } else {
      errors.confirmPassword = "";
    }
    setValidation(errors);
    if (Object.values(errors).every((value) => value === "")) {
      setOpen(true);
    }
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    checkValidation();
  };

  const displayErrorMsg = (name) => {
    console.log(inputValues[name]);

    if (validation[name] !== "") {
      return validation[name];
    }
    return "";
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Grid container spacing={2} pt={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="fName"
              value={inputValues.fName}
              onChange={(e) => handleChange(e)}
              autoComplete="firstName"
              color="secondary"
              error={validation.fName != ""}
              helperText={displayErrorMsg("fName")}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lName"
              value={inputValues.lName}
              color="secondary"
              onChange={(e) => handleChange(e)}
              autoComplete="lastName"
              error={validation.lName != ""}
              helperText={validation.lName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              color="secondary"
              value={inputValues.email}
              onChange={(e) => handleChange(e)}
              // error={(e) => validator(e, "email")}
              autoComplete="email"
              error={validation.email != ""}
              helperText={validation.email}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              color="secondary"
              value={inputValues.password}
              onChange={(e) => handleChange(e)}
              error={validation.password != ""}
              autoComplete="password"
              helperText={validation.password}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              color="secondary"
              id="confirmPassword"
              value={inputValues.confirmPassword}
              onChange={(e) => handleChange(e)}
              error={validation.confirmPassword != ""}
              autoComplete="confirmPassword"
              helperText={validation.confirmPassword}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => handleSubmit(e)}
            >
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link>
              <Typography textAlign="center">
                Already have an account ? Sign In
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Registered successfully ! Email sent for verification.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default RegisterComp;
