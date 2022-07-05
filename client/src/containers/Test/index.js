import React, { useEffect, useState } from "react";
import TestComp from "../../components/Test";
import axios from "axios";
import { BACKEND_URL } from "../../config";

function Test() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchURL = `${BACKEND_URL}/ui/userProfile`;
    axios.post(fetchURL).then((res)=> {
      setData(res.data);
    }).catch((err) => console.log(err));

  }, []);

  return (
    <>
      <TestComp data={data}/>
    </>
  );
}

export default Test;
