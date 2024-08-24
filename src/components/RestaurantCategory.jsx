import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
//   console.log(data);

//   const [showItems , setShowItem] = useState(true)

//   const handleClick = () => {
//     // console.log("clicked");
//     setShowItem(!showItems)
//   };
  return (
    <>
    
      <div className=" w-6/12 bg-gray-50 mx-auto shadow-lg my-4  p-4  ">
        <div className="flex justify-between cursor-pointer">
          {/*Accordion Header */}
          <span   className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🠿</span>
        </div>
        <div> <ItemList items={data.itemCards}/></div>
      </div>
    </>
  );
};

export default RestaurantCategory;
