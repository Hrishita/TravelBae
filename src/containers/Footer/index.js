import { Box, Grid } from "@mui/material";
import React from "react";
import FooterComp from "../../components/Footer";
import { footerData } from "./FooterDummyData";

function Footer() {
  return (
      <Box borderTop={0.1} sx={{ mt: 5, pt:2, flexGrow: 1 }}>
        <Grid container spacing={1} borderBottom={0.1} sx={{ pb:2 }}>
          <Grid item xs={4}>
            <Box
              textAlign="center"
              fontFamily="Arial"
              fontWeight="bold"
              sx={{ pb: 1 }}
            >
              Top Destinations
            </Box>
            {footerData.map((myVariable) => {
              return <FooterComp name={myVariable.name} />;
            })}
          </Grid>
          <Grid item xs={4}>
            <Box
              textAlign="center"
              fontFamily="Arial"
              fontWeight="bold"
              sx={{ pb: 1 }}
            >
              Support & FAQs
            </Box>
            <FooterComp name="Your Bookings" />
            <FooterComp name="FAQs" />
            <FooterComp name="Contact us" />
          </Grid>
          <Grid item xs={4}>
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
        </Grid>
        <Grid container direction="column" sx={{pt:0.5}}>
          <Grid item xs={12} textAlign="center" sx={{ pt: 0.5,pb: 0.5 }}>
            © 2022 TravelBay.com is privately owned company. All rights
            reserved.
          </Grid>
          <Grid item xs={12} textAlign="center" sx={{pb: 0.5 }}>
            All other trademarks are the property of their respective owners.
          </Grid>
        </Grid>
      </Box>
  );
}

export default Footer;