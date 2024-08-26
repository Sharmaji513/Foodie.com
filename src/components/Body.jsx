import React from "react";
import { Link } from "react-router-dom";

import WidgetsList from "./WidgetsList";
import RestaurantCards from "./RestaurantCards";
import Header from "./Header";

import "./Body.css";
import useFetchRestaurants from "../custom hooks/useFetchRestaurants";
import useWidgetScroll from "../custom hooks/useWidgetScroll";

const Body = () => {
  // Using the custom hook for widget scroll and fetching widgets
  const { widgetHeading, listOfWidgets, widgetRef, scrollLeft, scrollRight } = useWidgetScroll();
  
  // Using the custom hook to fetch restaurants
  const { listOfRestaurants, resHeading, isLoading } = useFetchRestaurants();

  return (
    <>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          {/* Header */}
          <Header />

          {/* Widgets List */}
          <h2 className="widget-heading">{widgetHeading}</h2>
          <div className="horizontal-scroll-container">
            <button className="scroll-button left" onClick={scrollLeft}>
              &#8249; {/* Left arrow */}
            </button>
            <div className="horizontal-scroll" ref={widgetRef}>
              {listOfWidgets?.map((widget) => (
                <WidgetsList
                  key={widget?.frequencyCapping?.id}
                  listOfwidgets={widget}
                />
              ))}
            </div>
            <button className="scroll-button right" onClick={scrollRight}>
              &#8250; {/* Right arrow */}
            </button>
          </div>

          {/* Top restaurants section */}
          <h2 className="res-heading">{resHeading}</h2>
          <div className="res-container">
            {listOfRestaurants?.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                <RestaurantCards resData={restaurant} />
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Body;
