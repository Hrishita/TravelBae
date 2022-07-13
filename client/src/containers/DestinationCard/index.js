import React from "react";
import DestinationCard from "../../components/DestinationCard";

function DestinationCardCont(props) {
  return (
    props.details.map((dest) => {
      return <DestinationCard details={dest} />
    })
    // <DestinationCard details={props} />
  );
}

export default DestinationCardCont;