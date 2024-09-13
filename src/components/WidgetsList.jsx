import React, { useRef } from "react";
import { WIDGETS_IMG } from "../utils/constents";
import './WidgetsList.css'
import useWidgetScroll from "../custom hooks/useWidgetScroll";
import  Shimmer from "./Shimmer";


const WidgetsList = () => {


  const widgetRef = useRef(null);

  const { widgetHeading, listOfWidgets } = useWidgetScroll();

  // console.log(listOfWidgets);
  
 
  const scrollLeft = () => {
    widgetRef.current.scrollBy({
      top: 0,
      left: -300, 
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    widgetRef.current.scrollBy({
      top: 0,
      left: 300, 
      behavior: "smooth",
    });
  };

  return (
    <div className="widget-container">
      {/* Widget Heading */}
      <h2 className="widget-heading">{widgetHeading}</h2>

      
      { listOfWidgets?.length === 0 ? (
        <Shimmer/> 
      ) : (
        <div className="horizontal-scroll-container">
          <button className="widget-scroll-button left" onClick={scrollLeft}>
            &#8249; {/* Left arrow */}
          </button>
          <div className="horizontal-scroll" ref={widgetRef} >
            {listOfWidgets?.map((widget) => (
              <div
                key={widget?.id}
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
          <button className="widget-scroll-button right" onClick={scrollRight}>
            &#8250; {/* Right arrow */}
          </button>
        </div>
      )}
    </div>
  );
};


export default WidgetsList;
