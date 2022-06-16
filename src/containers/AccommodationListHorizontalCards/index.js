import React from "react";
import HorizontralCardComp from "../../components/HorizontalCard";
import { hotelList } from "./hotelLists";
import { Box} from "@mui/material";

function AccommodationListHorizontalCards() {
  return (
    <Box sx={{ pl: 10,pr:10,pt:4}}>
      <Box
        component="span"
        sx={{ fontSize: 24, fontFamily: "Arial", fontWeight: "bold" }}
      >
        Our top picked hotels for you...
      </Box>
      <Box sx={{ mt: 3 }}>
        {hotelList.slice(0, 5).map((myVariable) => {
          return (
            <HorizontralCardComp
              name={myVariable.name}
              image={myVariable.image}
              address={myVariable.address}
              description={myVariable.description}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default AccommodationListHorizontalCards;
