import React, { Fragment } from "react";
import HorizontralCardComp from "../../components/HorizontalCard";

function AccommodationListHorizontalCards() {
  return (
    <Fragment>
      <HorizontralCardComp />
    </Fragment>
      // <Box sx={{ mt: 3, }}>
      //   {hotelList.slice(0, 5).map((myVariable) => {
      //     return (
      //       <HorizontralCardComp
      //         name={myVariable.name}
      //         image={myVariable.image}
      //         // address={myVariable.address}
      //         description={myVariable.description}
      //       />
      //     );
      //   })}
      // </Box>
  );
}

export default AccommodationListHorizontalCards;
