import Header from "../Components/Header";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Search() {
  const location = useLocation();

  return (
    <>
      <Header />
      {/* <Search_bar search_content={location.state} /> */}
    </>
  );
}
export default Search;
