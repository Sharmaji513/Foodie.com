import { useState, useEffect } from "react";
import { API_URL } from "../utils/constents";

const useFetchRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [resHeading, setResHeading] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      setIsLoading(true);
      try {
        const data = await fetch(API_URL);
        const json = await data.json();

        setResHeading(json?.data?.cards[1]?.card?.card?.header?.title);
        setListOfRestaurants(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return { listOfRestaurants, resHeading, isLoading };
};

export default useFetchRestaurants;
