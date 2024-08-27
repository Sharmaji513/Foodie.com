import React from "react";
import { CDN_URL } from "../utils/constents";
import { useDispatch } from "react-redux";
import { addItems } from "../store/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };


  return (
    <div>
      {items?.map((item) => (
        <>
          <div
            className="p-2 m-2 border-gray-200 text-left flex"
            key={item?.card?.info?.id}
          >
            <div className="w-9/12">
              <span className="text-[#02060C] font-bold">
                {item?.card?.info?.name}
              </span>
              <div>
                <span>
                  ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}{" "}
                  <span className="text-[12px] font-  text-[#02060C] font-bold tracking-wide leading-3 ">
                    🏷️40% OFF USE SWIGGYIT
                  </span>
                </span>
              </div>
              <p className="text-xs my-3 font-[#02060C]">
                {item?.card?.info?.description}
              </p>
            </div>

            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  onClick={() => handleAddItem(item)}
                  className="p-2 ml-8 mt-[110px] rounded-lg bg-white text-green-600 font-bold shadow-lg hover:bg-white  hover:text-black transition-all duration-[.3s]"
                >
                  Add +
                </button>
              </div>

              <img
                src={CDN_URL + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
                className="w-full rounded-md"
              />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ItemList;
