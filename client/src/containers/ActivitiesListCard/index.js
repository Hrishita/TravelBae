import React from "react";
import ActivitiesCardComp from "../../components/ActivitiesCard";
import { Fragment } from "react";

function ActivitiesListCard(props) {
  return (
    <Fragment>
      <ActivitiesCardComp
        image={props.image}
        title={props.title}
        desc={props.desc}
      />
    </Fragment>
  );
}

export default ActivitiesListCard;
