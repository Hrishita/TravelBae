import React from "react";
import FormDialogComp from "../../components/FormDialogAlert";

const FormDialogAlert = (props) => {
  console.log("container..............");
  const handleSubmitPwd = (pwdInput) => {
    console.log("Inside submit............");
    props.handleSubmitForm(pwdInput);
  };
  return (
    <>
      <FormDialogComp {...props} handleSubmitPwd={handleSubmitPwd} />
    </>
  );
};

export default FormDialogAlert;
