import { Route, Routes } from "react-router";
import "./App.css";

import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import AddCart from "./components/AddCart";
import Offer from "./Pages/Offer";

import SearchBar from "./Pages/SearchBar";
import Grocery from "./Pages/Grocery";





function App() {
  return (
    <>
      <Provider store={appStore}>
        <div className="w-[100%]">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/cart" element={<AddCart/>} />
            <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
            <Route path="/offers" element={<Offer/>}/> 
            <Route path="/grocery" element={<Grocery/>}/> 
            <Route path="/search" element={<SearchBar/>}/> 
          </Routes>
        </div>
      </Provider>
    </>
  );
}

export default App;
