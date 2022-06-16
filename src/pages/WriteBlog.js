import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import EditorComp from "../components/Editor";
import ModalComp from "../components/Modal";

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
    if (!title || title == "") {
      setAlert({
        show: true,
        message: "Title cannot be empty",
      });
    } else if (editorData.trim() == "") {
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
            style={{ height: "20rem", width: "50%" }}
            className="justify-content-center align-items-center d-flex card shadow"
          >
            <div className="input-group d-flex justify-content-center align-items-center">
              <div className="custom-file">
                <input
                  type="file"
                  className="form-control"
                  id="main_image"
                  onChange={onImageChange}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="d-flex flex-column align-items-center">
            <div>
              <img
                src={`${image}`}
                className="mx-2"
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
          style={{ zIndex: "0", width: "50%" }}
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
  );
};
