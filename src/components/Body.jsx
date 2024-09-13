import React from "react";
import Header from "./Header";
import WidgetsList from "./WidgetsList";
import TopRestaurant from "./TopRestaurant";
import Restaurants from "./Restaurants";

const Body = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Widgets List */}
      <WidgetsList />

      <div className="w-[95vw] h-full">
        {/* Top Restaurant Section */}
        <TopRestaurant />

        {/* Restaurants Section */}
        <Restaurants />
      </div>
    </div>
  );
};

export default Body;
