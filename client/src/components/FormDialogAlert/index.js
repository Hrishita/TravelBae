import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import { Box, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import { passwordValidator } from '../../utils/validations';

export default function FormDialogComp(props) {
  const { open, handleClose, handleSubmit, isUserPopUp } = props;
  const [inputPwdValues, setInputPwdValue] = useState({
    cPassword: "",
    nPassword: "",
  });
  const [isSuccess , setIsSuccess] = useState(false);
  const [validation, setValidation] = useState({
    errorMsg: "",
  });

  const handleCloseForm = (formName) => {
    setValidation({errorMsg:""});
    handleClose();
  }

  const handleSubmitForm = (formName) => {
    if (checkValidation() && formName === "pwdForm")
      props.handleSubmit(inputPwdValues)
    return;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputPwdValue({ ...inputPwdValues, [name]: value });
    setValidation({ errorMsg: "" });
  };

  const checkValidation = () => {
    let errors = Object.assign({}, validation);

    //password validation

    const pwdCurrentValidate = passwordValidator(inputPwdValues.nPassword, "password");
    const pwdNewValidate = passwordValidator(inputPwdValues.nPassword, "password");

    if (!pwdCurrentValidate.isValid) {
      errors.errorMsg = pwdCurrentValidate.errorMsg;
      return false;
    } else {
      errors.errorMsg = "";
    }
    if (pwdNewValidate.isValid) {
      errors.errorMsg = pwdNewValidate.errorMsg;
      return false;
    } else {
      errors.errorMsg = "";
    }


    //password validation




    setValidation(errors);
    if (Object.values(errors).every((value) => value === "")) {
      return true;
    } else {
      return false;
    }
  };

  const displayDialog = () => {
    if (isUserPopUp) {
      return <>
        <Box pl={2} pr={2}>
          <Typography variant='body2'>Current Password</Typography>
          <TextField
            autoFocus
            id="cPassword"
            name='cPassword'
            type="password"
            fullWidth
            variant="standard"
            values={inputPwdValues.cPassword}
            onChange={(e) => handleChange(e)}
          />
        </Box>
        <Box pt={3} pl={2} pr={2}>
          <Typography variant='body2'>New Password</Typography>
          <TextField
            id="nPassword"
            name="nPassword"
            type="password"
            fullWidth
            variant="standard"
            values={inputPwdValues.nPassword}
            onChange={(e) => handleChange(e)}
          />
        </Box>
      </>
    }
  }
  return (
    <Box >
      <Dialog fullWidth="70%" open={open} onClose={handleClose}>
        <DialogTitle>Update Password</DialogTitle>
        <DialogContent>
          <Box pb={2}>
            <Divider />
          </Box>
          {validation.errorMsg && <Box pb={4}>
            <Alert severity="error">{validation.errorMsg}</Alert></Box>}
          {displayDialog()}
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm} variant="contained">Cancel</Button>
          <Button onClick={(e) => handleSubmitForm("pwdForm")} variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
