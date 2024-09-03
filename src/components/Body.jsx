import React from "react";
import Header from "./Header";
import WidgetsList from "./WidgetsList";
import TopRestaurant from "./TopRestaurant";
import Restaurants from "./Restaurants";


const Body = () => {
  

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
