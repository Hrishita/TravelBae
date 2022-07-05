import React from "react";
import SearchComp from "../../components/Search";

function SearchCont({ onEvent }) {
  return (
    <>
      <SearchComp onEvent={onEvent}/>
    </>
  );
}

export default SearchCont;
