import React, { useEffect, useState, useRef } from "react";

import WidgetsList from "./WidgetsList";
import "./Body.css";

import RestaurantCards from "./RestaurantCards";
import { Link } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfwidgets, setlistOfWidgets] = useState([]);

  const [widgetHeading, setWidgetHeading] = useState([]);
  const [resHeading , setResHeading] = useState([])
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const widgetRef = useRef(null);

 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true); // Start loading
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setWidgetHeading(json?.data?.cards[0]?.card?.card?.header?.title);
    setResHeading(json?.data?.cards[1]?.card?.card?.header?.title);

    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setlistOfWidgets(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    setIsLoading(false); // End loading
  };

  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
        {/* Nav bar and Header  */}
        <Header/>
        {/* Widgets List  */}
          <h2 className="widget-heading">{widgetHeading}</h2>
          <div className="horizontal-scroll-container">
            <button
              className="scroll-button left"
              onClick={() => scrollLeft(widgetRef)}
            >
               &#8249; {/* Left arrow */}
            </button>
            <div className="horizontal-scroll" ref={widgetRef}>
              {listOfwidgets?.map((widget) => (
                <WidgetsList
                  key={widget.frequencyCapping.id}
                  // reswidget={widget}
                  listOfwidgets={widget}
                />
              ))}
            </div>
            <button
              className="scroll-button right"
              onClick={() => scrollRight(widgetRef)}
            >
                &#8250; {/* right arrow */}
            </button>
          </div>

        {/* {top restaurants section } */}
          <h2 className="res-heading">{resHeading}</h2>
          <div className="res-container">
            {listOfRestaurants?.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                <RestaurantCards resData={restaurant} />
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
