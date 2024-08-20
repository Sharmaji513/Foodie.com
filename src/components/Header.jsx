import React from 'react'
import './Header.css';
import Navbar from './Navbar';
const Header = () => {
  return (
    <div>
      <Navbar/>

        <div className="header-container">

           <div className="left-side">
           <img src="https://www.swiggy.com/about-us/wp-content/uploads/2024/04/DE-on-bike-2-2.png" alt="" />
           </div>
           
           <div className="tagline">
           <h1 className='main-heading'> Swad Jo Aapke Ghar Tak Aaye...</h1>
            <p className="sub-heading">Fresh Food, Fast Delivery</p>
            <button className='order-btn'>Order Now</button>
           </div>
            
           <div className="right-side">
           <img src="https://www.swiggy.com/about-us/wp-content/uploads/2024/04/03-Instamart_3_front_view_2_skycolour.png" alt="" />
           </div>
        </div>
    </div>
  )
}

export default Header