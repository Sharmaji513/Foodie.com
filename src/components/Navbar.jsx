import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import { IoHomeOutline, IoRestaurantSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import { CiMedicalCase } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
const Navbar = ({ SetShowLogin }) => {



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
          <Link to="/restaurents">
          <span> <IoRestaurantSharp />Restaurants</span> 
          </Link>
        </li>
        <li>
          <Link to="/offers">
          <span> <BiSolidOffer />Offers</span> 
          </Link>
        </li>
        <li>
          <a href="/cart">
          <span> <GiShoppingCart />Cart </span> 
          </a>
        </li>
        <li>
          <a href="/profile">
          <span><CiMedicalCase /> About us</span>
          </a>
        </li>
      </ul>
      <div className="navbar-login">
        <button onClick={() => SetShowLogin(true)} className="signup-btn">
        <span> <FaRegUser /> Login </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
