import React from "react";
import { useDispatch, useSelector } from "react-redux"; // Import necessary hooks
import { LuUtensilsCrossed } from "react-icons/lu";
import { setFilter } from "../store/filterSlice";

const filterButton = [
  { filterName: "Rating 4.5+" },
  { filterName: "Rs. 300-Rs. 600" },
  { filterName: "Less than Rs. 300" },
  { filterName: "Pure Veg" },
  { filterName: "Offers" },
];

const FilterOptions = () => {
  const dispatch = useDispatch();  

  const activeFilter = useSelector((state) => state.filter.activeFilter);  

  const handleFilterClick = (filterName) => {
    dispatch(setFilter(filterName));  
  };

  return (
    <div className="flex gap-5">
      {filterButton.map((filter, index) => (
        <button
          key={index}
          className={`filterBtn flex items-center gap-2 p-2 rounded ${
            activeFilter === filter.filterName
              ? "bg-orange-500 text-white font-bold"  
              : "bg-gray-200"
          }`}
          onClick={() => handleFilterClick(filter.filterName)}
        >
          {filter.filterName}
          {activeFilter === filter.filterName && <LuUtensilsCrossed />} 
        </button>
      ))}
    </div>
  );
};

export default FilterOptions;
