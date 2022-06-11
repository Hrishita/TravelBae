import React from 'react'
import { Box } from '@mui/system'
import { Grid, Link } from '@mui/material'

function FooterComp(props) {
  return (
    <Grid textAlign="center" sx={{pt:1}}>
    <Link
      href="/"
      style={{ color: "black", textDecoration: "none" }}
    >
      {props.name}
    </Link>
  </Grid>
  )
}

export default FooterComp