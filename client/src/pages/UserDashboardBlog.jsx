import React, { useEffect, useContext, useState } from "react";
import "./../components/UserDashboard/Dashboard.css";
import NavBar from "../containers/NavBar";
import Footer from "../containers/Footer";
import SideBar from "../components/SideBar/Sidebar";
import { Grid, Snackbar } from "@material-ui/core";
import {Alert, Box, Button, CardActionArea, CssBaseline, Divider, Paper, Typography, useTheme } from "@mui/material";
import { useHistory } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { BACKEND_URL } from "../config";
import { AuthContext } from "../context/AuthContext";

function UserDashbordBlog() {
  const history = useHistory();
  const [blogs, setBlogs] = React.useState([]);
  const auth = useContext(AuthContext);
  const [showSnackbar, setShowSnackbar] = useState(false)


  if (!auth.userProfileData.length) {
    auth.loadUserProfile(); 
  }
  const userData = auth.userProfileData.length ? auth.userProfileData[0] : {};
 

  const handleClick = () => {
    history.push("/write-blog");
  }
  const fetchAllBlogs = async () => {
    let res = await axios({
      method: "post",
      url: `${BACKEND_URL}/bg/fetchAllBlogs`,
    })
    setBlogs(res.data);
    console.log(res.data);
  }
  useEffect(() => { 
    fetchAllBlogs();
  }, [])
  const theme = useTheme();
  
  const handleDelete = async (id) => {
    let res = await axios({
      method: 'post',
      url:  `${BACKEND_URL}/bg/deleteBlogByID`,
      data: {
        blog_id: id
      }
    })
    setShowSnackbar(true)
    console.log(res.data)

   
  }
  const goToBlog = id => {
    console.log("blog id is"+ id);

    history.push(`/view-blog/${id}`);
  }
  const displayCard = (blog) => {
    return (<Grid item xs={12} >
  <Box component={'div'} className="card shadow flex-wrap p-3 d-flex justify-content-start align-items-center flex-row my-3">
        <Snackbar
            open={showSnackbar}
            autoHideDuration={6000}
            onClose={() => {
              setShowSnackbar(false);
              fetchAllBlogs()
            }}
          >
            <Alert
              onClose={() => {
                setShowSnackbar(false);
              }}
              severity="success"
              sx={{ width: "100%" }}
            >
              Deleted Successfully
            </Alert>
          </Snackbar>
        </Box>
      <Paper sx={{ display: 'flex' }} >
        <Box sx={{ display: 'flex' }} onClick={() => goToBlog(blog.blog_id)}>
          <img src={blog.image} width="200rem" alt="Blog Image"  />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }} onClick={() => goToBlog(blog.blog_id)}>
          <Typography component="div" variant="h5">
            {blog.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {userData.fname} {userData.lname}
          </Typography>
          <Typography>
            {blog.content.substring(0, 10)}
          </Typography>
        </Box>
        <Box>
          <DeleteIcon color="primary" onClick={() => {handleDelete(blog.blog_id)}} />
        </Box>
      </Paper>
    </Grid>)
  }

  return (
    <Grid container>
      <CssBaseline />
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12} lg={3}>
        <SideBar />
      </Grid>
      <Grid item xs={12} lg={8}>
        <Box pl={3} mt = {4} pb={3} display="flex">
          <Paper >
            <Grid container>
              <Grid item lg={6}>
                <Box pt={2} pl={4}>
                  <Typography variant="h4" component="span">My Blogs</Typography>
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Box pt={2} pr={4} display="flex" justifyContent="flex-end">
                  <Button variant="outlined" color="primary" onClick={handleClick}>Create Blog</Button>
                </Box>
              </Grid>
            </Grid>
            <Box pl={2} pt={2} pb={2} pr={2}>
              <Divider />
            </Box>
            <Box ml={2} pl={2} pt={3} pb={3} mr={3}>
              <Grid container flexDirection="column" spacing={2}>
                {blogs.map(blog => {
                  return displayCard(blog)
                })}
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default UserDashbordBlog;