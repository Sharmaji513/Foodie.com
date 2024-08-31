import React from "react";
import Header from "./Header";
import WidgetsList from "./WidgetsList";
import TopRestaurant from "./TopRestaurant";
import Restaurants from "./Restaurants";


const Body = () => {
  // Using the custom hook for widget scroll and fetching widgets

  return (
    <div className="w-full">
      {/* Header */}
      <Header />

      {/* Widgets List */}
      <WidgetsList />

      {/* Other components */}
      <TopRestaurant />
      <Restaurants />
    </div>
  );
};

export default Body;
