import { Box, Grid } from "@mui/material";
import React from "react";
import FooterComp from "../../components/Footer";
import { footerData } from "./FooterDummyData";
import { Divider } from "@mui/material";
import vacation from "../../assets/vac.png";
import { Typography } from "@material-ui/core";
import { Label } from "@material-ui/icons";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Footer() {
  return (
    <Box
      borderTop={0.1}
      sx={{
        mt: 5,
        pt: 2,
        flexGrow: 1,
        backgroundColor: "#040e27",
        color: "white",
      }}
    >
      <Grid container borderBottom={0.1} sx={{ pb: 2 }}>
        <Grid item xs={3}>
          <Box
            textAlign="center"
            fontFamily="Arial"
            fontWeight="bold"
            sx={{ pb: 1 }}
          >
            <img src={vacation} width="30%" height="30%" />
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
          {/* {footerData.map((myVariable) => {
            return <FooterComp name={myVariable.name} />;
          })} */}
        </Grid>
        <Grid item xs={3}>
          <Box
            textAlign="center"
            fontFamily="Arial"
            fontWeight="bold"
            sx={{ pb: 1 }}
          >
            Quick Links
          </Box>
          <FooterComp name="Accommodation" />
          <FooterComp name="Destinations" />
          <FooterComp name="Things to Carry" />
          <FooterComp name="Trip Planner" />
          <FooterComp name="Travel Blogs" />
        </Grid>
        <Grid item xs={3}>
          <Box
            textAlign="center"
            fontFamily="Arial"
            fontWeight="bold"
            sx={{ pb: 1 }}
          >
            Terms and Policies
          </Box>
          <FooterComp name="Terms & Conditions" />
          <FooterComp name="Privacy" />
          <FooterComp name="Cookies" />
        </Grid>
        <Grid item xs={3}>
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
            <Typography textAlign="center">1035 South Park Street</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography textAlign="center">Halifax, Canada, B3H 2W1</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <MailOutlineIcon sx={{ pr: 2 }} />
            <Typography textAlign="center">grp15@travelbae.com</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <PhoneAndroidIcon sx={{ pr: 2 }} />
            <Typography textAlign="center">+19024122435</Typography>
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
