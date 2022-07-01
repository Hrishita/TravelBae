import React from "react";
import DescriptionListComp from "../../components/DescriptionList";

function DescriptionList(props) {
  return (
    <>
      <DescriptionListComp
        image={props.image}
        title={props.title}
        desc={props.desc}
      />
    </>
  );
}

export default DescriptionList;
