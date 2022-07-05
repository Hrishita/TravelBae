import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@material-ui/core/Container";
import Grid from "@mui/material/Grid";
import Card from "@material-ui/core/Card";
import Footer from "../containers/Footer";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Pagination from "@material-ui/lab/Pagination";
import NavBar from "../containers/NavBar";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/6965513/pexels-photo-6965513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    height: "400px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },

  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function BlogList() {
  const classes = useStyles();
  const history = useHistory();
  const handleClick=(e)=>{
    history.push("view-blogs");
  }
  return (
    <Grid container spacing={3}>
    
    <Grid >
      <Grid className="bloglist">
      
      <Box className={classes.hero}>
        <Box>
          <Typography gutterBottom variant="h1" component="h2">
            Blogs
          </Typography>
        </Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid container spacing={3}>
          
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick={handleClick}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/6965273/pexels-photo-6965273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  title="Bali"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    My Bali Trip
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Going to Bali feels like going on a never-ending
                    adventure–there is an activity to suit every soul! Bali is a
                    popular destination for many people around the world and
                    it’s easy to see why.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions} >
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" gutterBottom component="p">
                      Guy Clemons
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
              </CardActions>
            </Card>
          </Grid>
               
         </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
      </Grid>
      </Grid>
      <Footer/>
    </Grid>
  
  );
}

export default BlogList;
