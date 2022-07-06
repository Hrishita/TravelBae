import React, { useEffect } from "react";
import LoginComp from "../../components/Login";
import axios from "axios";

function LoginUser(props) {
  const handleLogin = (userInfo) => {
    const url = `${BACKEND_URL}/it/fetchRecommendedItineraries`;
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
