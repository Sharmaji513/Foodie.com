import { Route, Routes } from "react-router";
import "./App.css";

import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import AddCart from "./components/AddCart";





function App() {
  return (
    <>
      <Provider store={appStore}>
        <div className="app">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/cart" element={<AddCart/>} />
            <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
          </Routes>
        </div>
      </Provider>
    </>
  );
}

export default App;
