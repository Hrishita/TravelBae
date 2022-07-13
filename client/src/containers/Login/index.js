import React, { useContext } from 'react';
import LoginComp from "../../components/Login";
import axios from "axios";
import {BACKEND_URL} from "../../config";
import { AuthContext } from "../../context/AuthContext";

function LoginUser(props) {
  const auth = useContext(AuthContext);
  console.log("userId....",auth.userId);
  const handleLogin = (userInfo) => {
    const url = `${BACKEND_URL}/user/login`;
    axios.post(url,userInfo).then(res => {
      auth.login(userInfo.email, res.data.token);
    }).catch(e => {
        console.error(e)
  });
  }
  return (
    <>
      <LoginComp handleLogin={handleLogin} />
    </>
  );
}

export default LoginUser;
