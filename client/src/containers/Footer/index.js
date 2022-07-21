import { Box, Grid } from "@mui/material";
import React from "react";
import FooterComp from "../../components/Footer";
// import vacation from "../../assets/vac.png";
import { Typography } from "@material-ui/core";
// import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";

const pages = [
  {
    name: "Accommodation",
    link: "/accommodation",
  },
  {
    name: "Destinations",
    link: "/destinations",
  },
  {
    name: "Things to Carry",
    link: "/thingstocarry",
  },
  {
    name: "Transport",
    link: "/flights",
  },
  // {
  //   name: "Travel Blogs",
  //   link: "/view-blogs",
  // },
  // {
  //   name: "Bucket List",
  //   link: "/bucket-list",
  // },
];
function Footer() {
  return (
    <Box
      borderTop={0.1}
      sx={{
        pt: 2,
        flexGrow: 1,
        backgroundColor: "#040e27",
        color: "white",
      }}
    >
      <Grid container borderBottom={0.1} sx={{ pb: 2 }}>
        {/* <Grid item xs={3}>
          <Box
            textAlign="center"
            fontFamily="Arial"
            fontWeight="bold"
            sx={{ pb: 1 }}
          >
            <img src={vacation} alt="vacation" width="30%" height="30%" />
          </Box>
          <Box
            // fontFamily="Arial"
            // fontWeight="bold"
            sx={{ pb: 2 }}
            justifyContent="center"
          >
            <Typography fontFamily="cursive">
              Best travel experience with TravelBae...
            </Typography>
          </Box>
        </Grid> */}
        <Grid item xs={4}>
          <Box
            textAlign="center"
            fontFamily="Arial"
            fontWeight="bold"
            sx={{ pb: 1 }}
          >
            Quick Links
          </Box>
          {pages.map((page) => (
            <FooterComp name={page.name} link={page.link} />
          ))}
        </Grid>
        <Grid item xs={4}>
          <Box
            textAlign="center"
            fontFamily="Arial"
            fontWeight="bold"
            sx={{ pb: 1 }}
          >
            About Us
          </Box>
          <Box textAlign="center" fontFamily="Arial" sx={{ pb: 1 }}>
            <Typography>
              TravelBae is an online travel website allowing users to make the
              best of their travel experience by using the application’s
              knowledge base. TravelBae offers a rich set of features which
              makes trip planning easy and organized.
            </Typography>
          </Box>
          {/* <FooterComp name="Terms & Conditions" />
          <FooterComp name="Privacy" />
          <FooterComp name="Cookies" /> */}
        </Grid>
        <Grid item xs={4}>
          <Box
            textAlign="center"
            fontFamily="Arial"
            fontWeight="bold"
            sx={{ pb: 1 }}
          >
            Contact Us
          </Box>
          {/* <FooterComp name="Terms & Conditions" />
          <FooterComp name="Privacy" />
          <FooterComp name="Cookies" /> */}

          <Box display="flex" justifyContent="center">
            <Typography textAlign="center">
              1035 South Park Street, Halifax, Canada, B3H 2W1
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container direction="column" sx={{ pt: 0.5 }}>
        <Grid item xs={12} textAlign="center" sx={{ pt: 0.5, pb: 0.5 }}>
          © 2022 TravelBae.com. All rights reserved.
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
