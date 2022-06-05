// Email Validation
export const isEmailValid = (value) => {
  let isValid = true;
  let pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );

  if (!pattern.test(value)) {
    isValid = false;
  }
  return isValid;
};

//mandatory field validation
export const isRequired = (value) => {
  let isValid = true;
  if (value.trim() === "") {
    isValid = false;
  }
  return isValid;
};

// Password Validation
export const passwordValidator = (value) => {
  const pwdValidation = {};
  let errorMsg = "";
  let isValid = true;
  const cond1 = "/^(?=.*[a-z]).{6,20}$/";
  const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
  const cond3 = "/^(?=.*[0-9]).{6,20}$/";
  const password = value;
  if (!password) {
    errorMsg = "password is required";
    isValid = false;
  } else if (password.length < 6) {
    errorMsg = "Password must be longer than 6 characters";
    isValid = false;
  } else if (password.length >= 20) {
    errorMsg = "Password must shorter than 20 characters";
    isValid = false;
  }
  // else if (!password.match(cond1)) {
  //   errorMsg = "Password must contain at least one lowercase";
  //   isValid = false;
  // } else if (!password.match(cond2)) {
  //   errorMsg = "Password must contain at least one capital letter";
  //   isValid = false;
  // } else if (!password.match(cond3)) {
  //   errorMsg = "Password must contain at least a number";
  //   isValid = false;
  // }
  else {
    errorMsg = "";
    isValid = false;
  }
  pwdValidation.errorMsg = errorMsg;
  pwdValidation.isValid = isValid;
  return pwdValidation;
};

// Confirm password validation

export const confirmPwdValidator = (value, pwd) => {
  const pwdValidation = {};
  let isValid = true;
  let errorMsg = "";

  //matchPassword validation
  if (!value) {
    errorMsg = "Password confirmation is required";
    isValid = false;
  } else if (value !== pwd) {
    errorMsg = "Password does not match confirmation password";
    isValid = false;
  } else {
    errorMsg = "";
  }
  pwdValidation.errorMsg = errorMsg;
  pwdValidation.isValid = isValid;

  return pwdValidation;
};
