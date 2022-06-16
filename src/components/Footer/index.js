import React from "react";
import { Grid, Link } from "@mui/material";

function FooterComp(props) {
  return (
    <Grid textAlign="center" sx={{ pt: 1 }}>
      <Link href="/" style={{ color: "white", textDecoration: "none" }}>
        {props.name}
      </Link>
    </Grid>
  );
}

export default FooterComp;