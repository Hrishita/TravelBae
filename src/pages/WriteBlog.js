import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import EditorComp from "../components/Editor";
import ModalComp from "../components/Modal";
import NavBar from "../containers/NavBar";
import Grid from "@mui/material/Grid";
import Footer from "../containers/Footer";
export const Blog = () => {
  return (
    <div className="Blog">
      <EditorComp />
    </div>
  );
};

export const Write = () => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const defaultAlertState = { show: false, message: "" };
  const [alert, setAlert] = useState(defaultAlertState);
  const [editorData, setEditorData] = useState("");

  const handleSubmit = () => {
    console.log(editorData);
    if (!title || title === "") {
      setAlert({
        show: true,
        message: "Title cannot be empty",
      });
    } else if (editorData.trim() === "") {
      setAlert({
        show: true,
        message: "Content cannot be empty",
      });
    } else {
      setAlert({
        show: true,
        message: "Published successfully",
      });
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <React.Fragment>
     <Grid item xs={12}>
        <NavBar />
      </Grid>
    <div className="container" style={{ marginTop: "5rem" }}>
      
      <ModalComp
        show={alert.show}
        handleClose={() => {
          setAlert(defaultAlertState);
        }}
        text={alert.message}
      />
      <div className="image-upload my-3 d-flex flex-column justify-content-center align-items-center">
        {!image ? (
          <div
            style={{ width: "100%" }}
            className="justify-content-center align-items-center d-flex flex-column"
          >
            <div className="input-group d-flex justify-content-center align-items-center flex-column">
              <div className="custom-file">
                <img
                  alt="image1"
                  src="https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8dHJhdmVsfHx8fHx8MTY1NTM1NzA1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1024"
                  className="mx-2 img-fluid"
                />
              </div>
              <input
                type="file"
                className="form-control my-3"
                id="main_image"
                style={{ width: "100%" }}
                onChange={onImageChange}
              />
            </div>
          </div>
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={`${image}`}
                className="mx-2"
                alt="image2"
                style={{ width: "50%", maxHeight: "20rem", objectFit: "cover" }}
              />
            </div>
            <Button
              style={{ width: "30%" }}
              onClick={() => {
                setImage();
              }}
              variant="contained"
              className="my-2"
            >
              <Delete className="mx-2" />
            </Button>
          </div>
        )}
      </div>
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ width: "100%" }}
      >
        <input
          className="form-control mt-2"
          type="text"
          placeholder="Enter your title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          style={{ zIndex: "0", width: "100%" }}
        />
        <EditorComp
          handleSubmit={handleSubmit}
          onChangeText={(e) => setEditorData(e)}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-primary my-3"
          onClick={handleSubmit}
          style={{ zIndex: 200 }}
        >
          Publish
        </button>
      </div>
    </div>
    <Footer/>
    </React.Fragment>
  );
};

export default Write;
