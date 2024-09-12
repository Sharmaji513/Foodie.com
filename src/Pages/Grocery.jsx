import React from 'react'
import Navbar from '../components/Navbar'
import grocery from "../assets/groceryImg.jpg"

const Grocery = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full h-full bg-[#DAF7FF] o'>
    <img className='w-[799px]  mx-auto' src={grocery} alt="" />
    </div>

    </>
  )
}

export default Grocery