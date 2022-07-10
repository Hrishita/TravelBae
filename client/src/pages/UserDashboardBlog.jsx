import React from "react";
import "./../components/UserDashboard/Dashboard.css";
import NavBar from "../containers/NavBar";
import Footer from "../containers/Footer";
import SideBar from "../components/SideBar/Sidebar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from "@material-ui/core";
import { Box, Button, CardActionArea, CssBaseline, Divider, Paper, Typography, useTheme } from "@mui/material";
import { useHistory } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { blogCards } from "../containers/CardCont/mockData";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function UserDashbordBlog() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/write-blog");
  }
  const theme = useTheme();
  
  const handleDelete = () => {
    // @Todo backend logic to delete blog
  }

  const displayCard = (blog) => {
    return (<Grid item xs={12}>
      <Paper sx={{ display: 'flex' }} >
        <Box sx={{ display: 'flex' }} onClick={handleClick}>
          <img src={blog.img} width="200rem" alt="Blog Image" onClick={handleClick} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }} onClick={handleClick}>
          <Typography component="div" variant="h5">
            {blog.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Jenner Joe
          </Typography>
          <Typography>
            {blog.desc}
          </Typography>
        </Box>
        <Box>
          <DeleteIcon color="primary" onClick={handleDelete} />
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
                  <Button variant="outlined" color="primary">Create Blog</Button>
                </Box>
              </Grid>
            </Grid>
            <Box pl={2} pt={2} pb={2} pr={2}>
              <Divider />
            </Box>
            <Box ml={2} pl={2} pt={3} pb={3} mr={3}>
              <Grid container flexDirection="column" spacing={2}>
                {blogCards.map(blog => {
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
