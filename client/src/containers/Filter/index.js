import React from "react";
import FilterComp from "../../components/Filter";

const Filter = (props) => {
  return (
    <FilterComp
      filterProperty={props}
      handleChange={props.handleChange}
      handleClearAll={props.handleClearAll}
    />
  );
};

export default Filter;
