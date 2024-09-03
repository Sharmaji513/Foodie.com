import React, { useState } from "react";
import useFetchRestaurants from "../custom hooks/useFetchRestaurants";
import RestaurantCards from "./RestaurantCards";
import { Link } from "react-router-dom";


const Restaurants = () => {
  const { listOfRestaurants, resHeading } = useFetchRestaurants();


  return (
    <div className="max-w-[95vw]  mx-5">
      <div className="flex justify-between w-full items-center text-center gap-7">
        <div className="text-2xl font-bold mx-16 mt-10 mb-10">{resHeading}</div>
      
        
      </div>

      <div className=" mx-12 grid grid-cols-4 gap-5">
        {listOfRestaurants?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCards resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
