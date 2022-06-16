import React from "react";
import { Button, Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

//Code Reference: https://mui.com/core/
function HorizontralCardComp(props) {
  return (
    <Grid container alignItems='center' sx={{mt:2, border:1, borderRadius:1}}>
      <Grid item xs={12}>
        <Card>
          <Box sx={{ display: "flex" }}>
            <Box
              component="img"
              sx={{
                height: 200,
                width: '30%',
                mr:2,
                borderRight:1
              }}
              title={props.name}
              alt={props.name}
              src={props.image}
            />
            <Stack spacing={0.5}>
              <Grid container alignItems="center" sx={{pt:1,pr:1}}>
              <Typography sx={{flexGrow:1}} fontWeight={700}>{props.name}</Typography>
              <Button variant="contained">Add to Trip</Button>
              </Grid>
              <Grid container alignItems="center">
              <LocationOnIcon />
              <Typography fontWeight={200}>
                 {props.address}
              </Typography>
              </Grid>
              <Divider />
              <Typography variant="body2" color="text.secondary">
                {props.description}
              </Typography>
            </Stack>
          </Box>
          {/* <Divider />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: 2, py: 1, bgcolor: "background.default" }}
          >
            <Typography sx={{ flexGrow: 1 }}></Typography>
              <Button variant="contained">Add to Trip</Button>
          </Stack> */}
        </Card>
      </Grid>
    </Grid>
  );
}

export default HorizontralCardComp;
