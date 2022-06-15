import React from "react";
import CardComp from "../../components/Card";

function CardCont(props) {
  return (
    <>
      <CardComp image={props.image} title={props.title} desc={props.desc} />
    </>
  );
}

export default CardCont;
