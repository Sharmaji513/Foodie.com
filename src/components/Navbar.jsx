import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import { IoHomeOutline, IoRestaurantSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import { CiMedicalCase } from "react-icons/ci";
import { useSelector } from "react-redux";
const Navbar = () => {

  const cartItems = useSelector((store) => store.cart.items)


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <i className="fas fa-utensils"></i> FoodDe
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">
          <span> <IoHomeOutline/> Home</span>
          </Link>
        </li>
        <li>
          <Link to="/search">
          <span> <IoRestaurantSharp />Search</span> 
          </Link>
        </li>
        <li>
          <Link to="/offers">
          <span> <BiSolidOffer />Offers</span> 
          </Link>
        </li>
        <li>
          <Link to="/profile">
          <span><CiMedicalCase /> About us</span>
          </Link>
        </li>
        <li>
          <Link to="/cart">
          <span> <GiShoppingCart />Cart <span className="">({cartItems.length})</span> </span> 
          </Link>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
