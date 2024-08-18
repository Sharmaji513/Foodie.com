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
  } = resData.info;

  return (
    <div className="restaurant-card">
      <img src={CDN_URL + cloudinaryImageId} className="restaurant-image" />
      <div className="restaurant-info">
        <h3 className="restaurant-name">{name}</h3>
        <div className="restaurant-details">
          <span className="restaurant-rating">
            <i className="fas fa-star"></i> {avgRating}
          </span>
          <span className="restaurant-delivery-time">{sla.slaString}</span>
        </div>
        <div className="restaurant-cuisines">{cuisines.join(", ")}</div>
        <div className="areaName">{areaName}</div>
      </div>
    </div>
  );
};

export default RestaurantCards;
