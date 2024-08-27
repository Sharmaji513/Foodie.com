import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import { IoHomeOutline, IoRestaurantSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import { CiMedicalCase } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from "react-redux";
const Navbar = ({ SetShowLogin }) => {

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
      {/* <div className="navbar-login">
        <button onClick={() => SetShowLogin(true)} className="signup-btn">
        <span> <FaRegUser /> Login </span>
        </button>
      </div> */}
    </nav>
  );
};

export default Navbar;
