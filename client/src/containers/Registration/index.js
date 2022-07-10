import React, { useContext } from "react";
import RegisterComp from "../../components/Registration";
import { BACKEND_URL } from "../../config";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function RegisterUser() {
  const history = useHistory();
  const userId  = useContext(AuthContext);
  console.log("userId....",userId);
  const handleSignUp = (userProfileData) => {
    const url = `${BACKEND_URL}/user/signUp`;
    axios.post(url, userProfileData).then(res => {
      history.push("/login")
    }).catch(e => {
      console.error(e)
    });
  }
  return (
    <>
      <RegisterComp handleSignUp={handleSignUp} />
    </>
  );
}

export default RegisterUser;