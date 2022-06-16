import { Comment } from "@material-ui/icons";
import { CommentBank, Send } from "@mui/icons-material";
import { Avatar, Box, TextField, Typography } from "@mui/material";
import { deepOrange, grey } from "@mui/material/colors";
import React, { useState } from "react";
import NavBar from "../containers/NavBar";

function SingleComment({ index, comment, name = "John Doe" }) {
  return (
    <div
      key={index}
      className="d-flex flex-row justify-content-start align-items-start my-3 align-items-start"
    >
      <div>
        <Avatar sx={{ bgcolor: deepOrange[500], mx: 1.4 }}>N</Avatar>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex flex-column">
          <Typography variant={"p"} fontSize={"1rem"} color={"#292929"}>
            {name}
          </Typography>
          <Typography variant={"p"} fontSize={"0.8rem"} color={grey[500]}>
            12 January 2020, 16:30 IST
          </Typography>
        </div>
        <Typography className="my-2">{comment}</Typography>
      </div>
    </div>
  );
}

function ViewBlog() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    let newComments = [...comments, comment];
    setComments(newComments);
    setComment("");
  };
  return (

      <div className="container p-4">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div>
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1512100254544-47340ba56b5d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8dHJhdmVsfHx8fHx8MTY1NTMxNjQ0MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1024"
            />
          </div>
          <div>
            <Typography variant="body1" fontWeight={"600"} color={grey[700]}>
              Author: Hrishita Mavani
            </Typography>
          </div>

          <div className="align-self-start">
            <Typography variant="h4">My Bali Trip</Typography>
          </div>

          <div className="my-3">
            <Typography
              variant="p"
              color={"#292929"}
              style={{ color: "#292929", fontSize: "1.1rem" }}
            >
              Going to Bali feels like going on a never-ending adventure–there
              is an activity to suit every soul! Bali is a popular destination
              for many people around the world and it’s easy to see why. From
              its unending idyllic beaches, captivating spiritual energy,
              terraced rice fields, and exotic sunsets, there is so much to see
              and experience on this magnificent island paradise! Experience
              surfing, yoga, meditation, trekking, delicious food or amazing
              nightlife. Certain areas of Bali have been influenced by tourism,
              with hubs of insta-worthy cafes, hip bars, and vegan restaurants.
              But other areas are still quite remote, maintaining their uniquely
              Balinese beauty and charm.{" "}
            </Typography>
          </div>

          <div className="my-3">
            <Typography
              variant="p"
              color={"#292929"}
              style={{ color: "#292929", fontSize: "1.1rem" }}
            >
              Going to Bali feels like going on a never-ending adventure–there
              is an activity to suit every soul! Bali is a popular destination
              for many people around the world and it’s easy to see why. From
              its unending idyllic beaches, captivating spiritual energy,
              terraced rice fields, and exotic sunsets, there is so much to see
              and experience on this magnificent island paradise! Experience
              surfing, yoga, meditation, trekking, delicious food or amazing
              nightlife. Certain areas of Bali have been influenced by tourism,
              with hubs of insta-worthy cafes, hip bars, and vegan restaurants.
              But other areas are still quite remote, maintaining their uniquely
              Balinese beauty and charm.
            </Typography>
          </div>
          <div className="my-3">
            <Typography
              variant="p"
              color={"#292929"}
              style={{ color: "#292929", fontSize: "1.1rem" }}
            >
            Going to Bali feels like going on a never-ending adventure–there
              is an activity to suit every soul! Bali is a popular destination
              for many people around the world and it’s easy to see why. From
              its unending idyllic beaches, captivating spiritual energy,
              terraced rice fields, and exotic sunsets, there is so much to see
              and experience on this magnificent island paradise! Experience
              surfing, yoga, meditation, trekking, delicious food or amazing
              nightlife. Certain areas of Bali have been influenced by tourism,
              with hubs of insta-worthy cafes, hip bars, and vegan restaurants.
              But other areas are still quite remote, maintaining their uniquely
              Balinese beauty and charm.{" "}
            </Typography>
          </div>
          <div style={{ width: "100%" }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <CommentBank sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                id="input-with-sx"
                label="Add Your Comment"
                variant="standard"
                fullWidth
              />
              <Send
                onClick={handleSubmit}
                sx={{
                  color: "action.active",
                  ml: 1,
                  my: 0.5,
                  cursor: "pointer",
                }}
              />
            </Box>
          </div>
          <div className="align-self-start my-3">
            {comments.map((comment, index) => {
              return <SingleComment comment={comment} index={index} />;
            })}
          </div>
        </div>
      </div>
   
  );
}

export default ViewBlog;
