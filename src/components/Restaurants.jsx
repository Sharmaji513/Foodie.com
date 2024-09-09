import React from "react";
import useFetchRestaurants from "../custom hooks/useFetchRestaurants";
import RestaurantCards from "./RestaurantCards";
import  FilterOptions from "./FilterOptions";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Restaurants = () => {
  const { listOfRestaurants, resHeading } = useFetchRestaurants();

  const activeFilter = useSelector((state) => state.filter.activeFilter);  // Access the active filter from Redux


  // filter logic 
  const filteredRestaurants = listOfRestaurants?.filter((restaurant) => {
    switch (activeFilter) {
      case "Rating 4.5+": return restaurant.info.avgRating > 4.5;
      case "Rs. 300-Rs. 600": return restaurant?.info?.costForTwo.slice(1,4)  >= 300 && restaurant?.info?.costForTwo.slice(1,4)  <= 600;
      case "Less than Rs. 300":return restaurant?.info?.costForTwo.slice(1,4)  < 300;
      case "Pure Veg":return restaurant?.info?.veg;
      case "Offers": return restaurant?.info?.aggregatedDiscountInfoV3;
  
      default: return true; 
    }
  });
  
  // console.log(filteredRestaurants);
  
  return (
    <div className="max-w-[98vw]  mx-5">
      <div className="text-2xl font-bold mx-20 mt-10 my-5">{resHeading}</div>

      {/*Filter the list of restaurants based on the active filter */}
      <div className="font-bold mx-16 ">
        <FilterOptions resData={filteredRestaurants || listOfRestaurants} />
      </div>

      <div className="flex justify-between w-full items-center text-center gap-7"></div>
      <div className=" mx-12 grid grid-cols-4 gap-5">
        {/* Render the filtered restaurants */}
        {filteredRestaurants?.map((restaurant) => (
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
