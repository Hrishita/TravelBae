import React, { Fragment } from "react";
import CardComp from "../../components/Card";

function Card(props) {
  return (
    <Fragment>
      <CardComp image={props.image} title={props.title} desc={props.desc} />
    </Fragment>
  );
}

export default Card;
