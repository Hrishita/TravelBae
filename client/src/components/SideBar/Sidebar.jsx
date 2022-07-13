import React from "react";
import ProfileImage from "./../../assets/profile.jpg";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import "./Sidebar.css";
import { Box, Divider, Paper, Typography, useTheme } from "@mui/material";
import { menu } from "./SideBarMenu";
import { useStyles } from "./style";
const Sidebar = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Paper elevation={3} >
      <Box mt = {theme.spacing(.25)} display="flex" flexDirection="column" justifyContent="center">
        <Box pb={4} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <img
            className="sidebar-userphoto"
            alt="ProfileImage"
            src={ProfileImage}
          />
          <Typography variant="h5"> Jenner Joe</Typography>
        </Box>
        <Box ml={3} mr={3}>
          <Divider />
        </Box>
        <Box pl={4} mb={10} pr={4}>
          {menu.map(item =>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className = {classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#1ec6b6" }}>
                    {item.icon}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.name}/>
              </ListItem>
            </List>
          )}
        </Box>
      </Box>
    </Paper>

  );
}

export default Sidebar;
