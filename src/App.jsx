import { Route, Routes } from "react-router";
import "./App.css";

import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";


function App() {
  return (
    <>

    <div className="app">

      <Routes>
      
    
      <Route path="/" element={<Body />} />
      <Route path="/restaurants/:resId" element={<RestaurantMenu/>} />
        
      </Routes>

    </div>
    
    </>
  );
}

export default App;
