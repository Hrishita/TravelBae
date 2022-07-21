import React, { useEffect, useState } from "react";
import ThingsToCarryComp from "../../components/ThingsToCarry";
import { imgData, filterProperties } from "./mockData";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { saveAs } from "file-saver";

const ThingsToCarry = () => {
  const [data, setData] = useState([]);

  const handleChange = (checkedItems) => {
    const fetchURL = `${BACKEND_URL}/tc/filterThingsToCarry`;
    const filtering = {
      tags: checkedItems,
    };
    axios
      .post(fetchURL, filtering)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleClearAll = () => {
    const fetchURL = `${BACKEND_URL}/tc/fetchAllThingsToCarry`;
    axios
      .post(fetchURL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleSearch = (event) => {
    const searchThings = {
      name: event.target.value,
    };
    if (event.key === "Enter") {
      const fetchURL = `${BACKEND_URL}/tc/searchThingsToCarry`;
      axios
        .post(fetchURL, searchThings)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleShare = (updatedChecklist) => {
    const fetchURL = `${BACKEND_URL}/tc/shareChecklist`;
    const download = {
      checkList: updatedChecklist,
    };
    axios
      .post(fetchURL, download)
      .then(() =>
        axios.get(`${BACKEND_URL}/tc/downloadPDF`, { responseType: "blob" })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "checklist.pdf");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const fetchURL = `${BACKEND_URL}/tc/fetchAllThingsToCarry`;
    axios
      .post(fetchURL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ThingsToCarryComp
      data={data}
      imgData={imgData}
      filterProperties={filterProperties}
      handleClearAll={handleClearAll}
      handleChange={handleChange}
      handleSearch={handleSearch}
      handleShare={handleShare}
    />
  );
};

export default ThingsToCarry;
