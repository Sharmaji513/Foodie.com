import React, { useState, useEffect } from "react";
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

      {/* Top Restaurant Section */}
      <TopRestaurant />

      {/* Restaurants Section */}
      <Restaurants />
    </div>
  );
};

export default Body;
