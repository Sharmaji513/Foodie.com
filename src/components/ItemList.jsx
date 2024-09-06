import React, { useState } from "react";
import { CDN_URL } from "../utils/constents";
import { useDispatch } from "react-redux";
import { addItems, removeItems } from "../store/cartSlice";

//Veg and non-veg image
let veg ="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png";
let nonVeg ="https://www.kindpng.com/picc/m/151-1515155_veg-icon-png-non-veg-symbol-png-transparent.png";


const ItemList = ({ items, isCartView = false }) => {
  const dispatch = useDispatch();
  const [notification, setNotification] = useState(""); // Notification state

  const handleAddItem = (item) => {
    dispatch(addItems(item));
    showNotification("Item added to cart");
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItems(item));
    showNotification("Item removed from cart");
  };


  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(""); // Clear notification after 2 seconds
    }, 2000);
  };


  return (
    <div>
    {/* Notification pop-up */}
    {notification && (
      <div className=" flex justify-center fixed  items-center  top-[0.5rem] left-[40.5rem]  bg-green-500 text-white p-3 rounded-md shadow-lg text-center mx-auto">
        {notification} 
      </div>
    )}

    {items?.map((item) => (
      <div className="p-2 m-2 border-gray-200 text-left flex" key={item?.card?.info?.id}>
        <div className="w-9/12">
          <img
            className="w-5 rounded-sm"
            src={item?.card?.info?.itemAttribute.vegClassifier === "VEG" ? veg : nonVeg}
            alt="veg or non-veg symbol"
          />
          <span className="text-[#02060C] font-bold">{item?.card?.info?.name}</span>
          <div>
            <span>
              ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}{" "}
              <span className="text-[12px] font-bold tracking-wide leading-3">
                🏷️40% OFF USE SWIGGYIT
              </span>
            </span>
          </div>
          <p className="text-xs my-3 font-[#02060C]">{item?.card?.info?.description}</p>
        </div>
        <div className="w-3/12 p-4">
          <div className="absolute">
            {isCartView ? (
              <button
                onClick={() => handleRemoveItem(item)}
                className="p-2 ml-8 mt-[110px] rounded-lg bg-white text-red-600 font-bold shadow-lg hover:bg-white hover:text-black transition-all duration-[.3s]"
              >
                Remove -
              </button>
            ) : (
              <button
                onClick={() => handleAddItem(item)}
                className="p-2 ml-8 mt-[110px] rounded-lg bg-white text-green-600 font-bold shadow-lg hover:bg-white hover:text-black transition-all duration-[.3s]"
              >
                Add +
              </button>
            )}
          </div>
          <img
            src={CDN_URL + item?.card?.info?.imageId}
            alt={item?.card?.info?.name}
            className="w-full rounded-md"
          />
        </div>
      </div>
    ))}
  </div>
);
};

export default ItemList;