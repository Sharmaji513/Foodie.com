import React, { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards";
import "./Body.css";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetechData();
  }, []);

  const fetechData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.73826769999999&lng=77.0822151&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    // console.log(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setListOfRestaurants(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="">
      <h2 className="res-heading">
        Restaurants with online food delivery in Delhi
      </h2>
      <div className="res-container flex flex-wrap justify-center">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCards resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
