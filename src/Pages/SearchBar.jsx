import React from "react";
import Search from "../partials/Search";
import useFetchRestaurants from "../custom hooks/useFetchRestaurants";
import Navbar from "../components/Navbar";

const SearchBar = () => {
  const { listOfRestaurants } = useFetchRestaurants();
  return (
    <div>
      <Navbar />
      <Search restaurants={listOfRestaurants} />
    </div>
  );
};

export default SearchBar;
