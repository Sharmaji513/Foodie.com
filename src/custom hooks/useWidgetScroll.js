import { useRef, useState, useEffect } from "react";
import { API_URL } from "../utils/constents";

const useWidgetScroll = () => {
  const widgetRef = useRef(null);
  const [listOfWidgets, setListOfWidgets] = useState([]);
  const [widgetHeading, setWidgetHeading] = useState("");
 

  useEffect(() => {
    const fetchWidgets = async () => {
 
        const data = await fetch(API_URL);
        const json = await data.json();

        setWidgetHeading(json?.data?.cards[0]?.card?.card?.header?.title);
        setListOfWidgets(
          json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
        );
  
       
     
    };

    fetchWidgets();
  }, []);

  const scrollLeft = () => {
    if (widgetRef.current) {
      widgetRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (widgetRef.current) {
      widgetRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return { widgetRef, widgetHeading, listOfWidgets, scrollLeft, scrollRight };
};

export default useWidgetScroll;
