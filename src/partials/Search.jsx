import React, { useState, useEffect } from "react";
import RestaurantCards from "../components/RestaurantCards"; // Component to display restaurant cards
import { Link } from "react-router-dom";

const Search = ({ restaurants }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // Filter restaurants based on search query
    const filtered = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  }, [searchQuery, restaurants]);

  return (
    <div className=" w-full">
      {/* Search Input */}
      <input
        className="flex justify-center w-[50vw] mx-auto  p-2 m-5 mt-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search for restaurant and foods..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Displaying the Filtered Restaurants */}
      <div className="grid grid-cols-4 w-">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCards resData={restaurant} />
            </Link>
          ))
        ) : (
          <p className="text-xl text-gray-500 col-span-full text-center">
            Search your favorites restaurant and foods...{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default Search;
