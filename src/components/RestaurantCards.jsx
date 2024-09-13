import React from "react";
import "./RestaurantCard.css";
import { CDN_URL } from "../utils/constents";

const RestaurantCards = (props) => {
  const { resData } = props;
  // console.log(props);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    areaName,
    aggregatedDiscountInfoV3

  } = resData.info;



  return (
    <div className="restaurant-card">
      <div className="resImage-container">
      <img src={CDN_URL + cloudinaryImageId} className="restaurant-image" /> 
      <h2 className="discount">{aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</h2>
      </div>

      <div className="restaurant-info">
        <h3 className="restaurant-name">{name}</h3>
        <div className="restaurant-details">
          <div className="restaurant-rating">
            <i className="fas fa-star"></i>⭐{avgRating}
          </div>
          <span className="restaurant-delivery-time text-sm">{sla.slaString}</span>
        </div>
        <div className="restaurant-cuisines">{cuisines.join(", ")}</div>
        <p className="restaurant-areaName">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCards;
