import React from 'react'
import './Header.css';
const Header = () => {
  return (
    <div>

        <div className="header-container">
            <div className="left-side">
           
            <h1 className='main-heading'> Discover the best food & drinks in <span>Delhi NCR</span></h1>
            <p className="sub-heading">Meals at your doorstep..</p>
            <button>Order</button>
            </div>
           <div className="right-side">
           <img src="https://i.pinimg.com/originals/e4/1f/86/e41f86f032c1435de39f213ba7a26197.gif" alt="" />
           </div>
          
        </div>
    </div>
  )
}

export default Header