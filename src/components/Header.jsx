import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import  { ShimmerHeader } from "./Shimmer";
import useFetchRestaurants from "../custom hooks/useFetchRestaurants";
import { Link } from "react-router-dom";
import { SiIfood } from "react-icons/si";
import { IoFastFoodSharp } from "react-icons/io5";


const Header = () => {
  const { isLoading } = useFetchRestaurants(); // Destructure isLoading from useFetchRestaurants

  return (
    <div>
      {isLoading ? (
        <ShimmerHeader /> 
      ) : (
        <>
          <Navbar />

          <div className="header-container">
            <div className="left-side">
              <img
                src="https://www.swiggy.com/about-us/wp-content/uploads/2024/04/DE-on-bike-2-2.png"
                alt="Delivery"
              />
            </div>

            <div className="tagline">
              <h1 className="main-heading">Swad Jo Aapke Ghar Tak Aaye...</h1>
              <p className="sub-heading">Fresh Food, Fast Delivery</p>
         
              <Link to="/search">
                <button className="order-btn"> <IoFastFoodSharp />Order Now</button>
              </Link>
           
            </div>

            <div className="right-side">
              <img
                src="https://www.swiggy.com/about-us/wp-content/uploads/2024/04/03-Instamart_3_front_view_2_skycolour.png"
                alt="Instamart"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
