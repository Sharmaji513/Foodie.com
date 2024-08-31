import React, { useRef } from "react";
import useFetchRestaurants from "../custom hooks/useFetchRestaurants";
import RestaurantCards from "./RestaurantCards";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TopRestaurant = () => {
 

  const { listOfTopRestaurants , topResHeading } = useFetchRestaurants();
  
  const containerRef = useRef(null);

  
  const scrollLeft = () => {
    containerRef.current.scrollBy({
      top: 0,
      left: -300, 
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      top: 0,
      left: 300, 
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-[95vw]  mx-5  ">
      {/* Top restaurants section */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold mx-20 mt-10">{topResHeading}</div>
        <div className="flex">
          <div
            onClick={scrollLeft}
            className="flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={scrollRight}
            className="flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

    {/* scroll button  */}
      <div
        ref={containerRef}
        className="flex overflow-x-scroll  px-16"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex ">
          {listOfTopRestaurants?.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCards resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRestaurant;
