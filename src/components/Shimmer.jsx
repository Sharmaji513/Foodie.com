
import React from "react";

function Shimmer() {
    return (
      <div className="w-full">
      <div className="grid grid-cols-4 gap-5 mx-12">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <div key={index}className="p-4 w-full h-72 bg-gray-200 animate-pulse rounded-lg flex flex-col">
              <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
              <div className="w-3/4 h-6 bg-gray-300 rounded-md mb-2"></div>
              <div className="w-1/2 h-6 bg-gray-300 rounded-md"></div>
            </div>
          ))}
      </div>
    </div>
    );
}

export default Shimmer;




export const ShimmerHeader = () => {
  return (
    <div className="flex gap-5 items-center justify-around  h-[25vw] p-4 bg-gray-800">
      <div className="w-52 h-[10vw] bg-gray-100 animate-pulse rounded "></div>
      <div className="w-1/2 h-5 bg-gray-100 animate-pulse rounded mb-4"></div>
      <div className="w-52 h-[10vw] bg-gray-100 animate-pulse rounded"></div>
    </div>
  );
};


export const MenuShimmer = () => {
  return (
    <div className="w-full h-screen p-4 bg-gray-800 ">
      {/* Restaurant Info Section */}
      <div className="flex flex-col   mb-6  justify-center items-center">
        <div className="w-1/2 h-[20vw] bg-gray-300 animate-pulse rounded mb-4"></div>
        <div className="w-1/2 h-6 bg-gray-300 animate-pulse rounded mb-2"></div>
        <div className="w-1/2 h-6 bg-gray-300 animate-pulse rounded mb-2"></div>
        <div className="w-1/2 h-6 bg-gray-300 animate-pulse rounded"></div>
      </div>

  
  
    </div>
  );
};