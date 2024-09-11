import React, { useEffect, useRef, useState } from "react";
import { WIDGETS_IMG } from "../utils/constents";
import './WidgetsList.css'
import useWidgetScroll from "../custom hooks/useWidgetScroll";
import  Shimmer from "./Shimmer";


const WidgetsList = () => {


  const widgetRef = useRef(null);

  const { widgetHeading, listOfWidgets } = useWidgetScroll();

  // Scroll left and right handlers
  const scrollLeft = () => {
    widgetRef.current.scrollBy({
      top: 0,
      left: -300, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    widgetRef.current.scrollBy({
      top: 0,
      left: 300, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  };

  return (
    <div className="w-[95vw]">
      {/* Widget Heading */}
      <h2 className="widget-heading">{widgetHeading}</h2>

      {/* Conditionally Render Shimmer or the Widgets List */}
      {!listOfWidgets || listOfWidgets.length === 0 ? (
        <Shimmer/> // Show shimmer if the data is not yet available
      ) : (
        <div className="horizontal-scroll-container">
          <button className="scroll-button left" onClick={scrollLeft}>
            &#8249; {/* Left arrow */}
          </button>
          <div className="horizontal-scroll" ref={widgetRef} >
            {listOfWidgets?.map((widget) => (
              <div
                key={widget?.frequencyCapping?.id}
                className="widgets-container"
              >
                <div className="widget-card">
                  {widget?.imageId ? (
                    <img
                      src={`${WIDGETS_IMG}${widget?.imageId}`}
                      alt="Widget"
                      className="widget-image"
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                </div>
                <hr />
              </div>
            ))}
          </div>
          <button className="scroll-button right" onClick={scrollRight}>
            &#8250; {/* Right arrow */}
          </button>
        </div>
      )}
    </div>
  );
};


export default WidgetsList;
