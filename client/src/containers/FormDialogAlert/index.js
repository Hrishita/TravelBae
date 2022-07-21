import React from "react";
import FormDialogComp from "../../components/FormDialogAlert";

const FormDialogAlert = (props) => {
  const handleSubmitPwd = (pwdInput) => {
    props.handleSubmitForm(pwdInput);
  };
  return (
    <>
      <FormDialogComp {...props} handleSubmitPwd={handleSubmitPwd} />
    </>
  );
};

export default FormDialogAlert;
