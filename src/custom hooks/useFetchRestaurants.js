import { useState, useEffect } from "react";
import { API_URL } from "../utils/constents";

const useFetchRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfTopRestaurants , setListOfTopRestaurants] = useState([])
  const [resHeading, setResHeading] = useState("");
  const [topResHeading , setTopResHeading] = useState("")
  const [isLoading, setIsLoading] = useState(true);

  // console.log(listOfTopRestaurants);
  
  useEffect(() => {
    const fetchRestaurants = async () => {
      setIsLoading(true);
      try {
        const data = await fetch(API_URL);
        const json = await data.json();

        console.log(json);
        

        setResHeading(json?.data?.cards[1]?.card?.card?.header?.title);
        // console.log(json?.data?.cards[1]?.card?.card?.header?.title);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


        setTopResHeading(json?.data?.cards[2]?.card?.card?.title)
        console.log(json?.data?.cards[2]?.card?.card?.title);
        
        setListOfTopRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return { listOfRestaurants, resHeading, isLoading ,listOfTopRestaurants,topResHeading };
};

export default useFetchRestaurants;
