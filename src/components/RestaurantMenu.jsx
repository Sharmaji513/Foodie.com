import React, { useEffect, useState, useRef } from "react";
import "./RestaurantMenu.css";
import { CDN_URL, MENU_API } from "../utils/constents";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import RestaurantCategory from "./RestaurantCategory";
import  { MenuShimmer } from "./Shimmer";



const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state
  const scrollRef = useRef(null);

  const { resId } = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, [resId]);

  const info = resInfo?.cards?.[2]?.card?.card?.info || {};
  console.log(info);

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    sla,
    nearestOutletNudge,
    expectationNotifiers,
    
  } = info;

  const deals = resInfo?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle;
  const MenuCategory = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  async function getRestaurantInfo() {
    setLoading(true); // Set loading to true before starting fetch
    try {
      const response = await fetch(MENU_API + resId);
      const result = await response.json();
      setResInfo(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false after fetch completes
    }
  }

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 300;
    } else {
      scrollRef.current.scrollLeft += 300;
    }
  };

 

  return (
    <>
   
    {loading ? (<MenuShimmer/>) :  <>
      <Navbar />

      <div className="resInfo-container">
        
        {/* Restaurant Information section */}
        <h1 className="resName">{name}</h1>
        <div className="resInfo-outer">
          <div className="res-info">
            ⭐ {avgRating} ({totalRatingsString}) - {costForTwoMessage}
            <p className="cuisines">{cuisines?.join(", ")}</p>
            <div className="flex gap-2 mt-2">
              <div className="w-[9px] flex flex-col justify-center items-center">
                <div className="w-[7px] h-[7px] bg-gray-500 rounded-full"></div>
                <div className="w-[1px] h-[25px] bg-gray-500 "></div>
                <div className="w-[7px] h-[7px] bg-gray-500 rounded-full"></div>
              </div>

              <div className="areaName">
                {nearestOutletNudge?.nearestOutletInfo?.siblingOutlet?.areaName}
              </div>
              <p>
                Outlet
                <span className="text-gray-500 font-normal">
                  {resInfo.locality}
                </span>
                <br />
                <span>{sla?.slaString}</span>
              </p>

              <hr />
            </div>
            <div className="delivery-info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#999999"
              >
                <path d="M623.34-741q-37.34 0-62.84-25.52-25.5-25.51-25.5-62.64 0-37.54 25.52-63.19Q586.03-918 623.16-918q37.54 0 63.19 25.66 25.65 25.67 25.65 63 0 37.34-25.66 62.84-25.67 25.5-63 25.5ZM441-542l88 90v259h-98v-207L241-569l177-178q12.17-13.17 26.54-19.58Q458.91-773 480-773q20 0 36.92 4.92Q533.83-763.17 549-747l77 76q29 29 65.5 43.5T773-613v98q-66 0-120-23.5T555-603l-28-26-86 87Zm-246.5 66q83.5 0 142.5 59t59 143q0 84-59 143T194.5-72Q111-72 52-131T-7-274q0-84 59-143t142.5-59Zm0 315q47.98 0 80.24-33T307-274q0-47-32.41-79.5Q242.19-386 194-386q-47 0-79.5 32.5T82-274q0 47 32.26 80t80.24 33Zm571-315q83.5 0 142.5 59t59 143q0 84-59 143T765.5-72Q682-72 623-131t-59-143q0-84 59-143t142.5-59Zm0 315q47.98 0 80.24-33T878-274q0-47-32.5-79.5t-80-32.5q-47.5 0-80 32.5T653-274q0 47 32.26 80t80.24 33Z" />
              </svg>

             
            </div>
          </div>
        </div>

        {/* Deals for You section */}
        {deals && (
          <div className="deals-section">
            <button
              className="scroll-button left"
              onClick={() => scroll("left")}
            >
              &lt;
            </button>
            <div className="deals-container" ref={scrollRef}>
              {deals?.offers?.map((offer, index) => (
                <div className="deals-for-you" key={index}>
                  <img
                    src={CDN_URL + offer.info.offerLogo}
                    width="50px"
                    alt=""
                  />
                  <div>
                    <h3>{offer?.info?.header}</h3>
                    <p className="coupon">
                      {offer?.info?.couponCode || offer?.info?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="scroll-button right"
              onClick={() => scroll("right")}
            >
              &gt;
            </button>
          </div>
        )}

        {/* Accordion section */}
        <h1 className="text-center mt-10 font-semibold text-zinc-500">
          ______๑♡⁠๑______ MENU ______๑♡⁠๑______
        </h1>
        {MenuCategory?.map((category) => (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category.card?.card}
          />
        ))}
      </div>
    </>}
    </>

    
  );
};

export default RestaurantMenu;
