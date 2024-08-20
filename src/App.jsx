import { Route, Routes } from "react-router";
import "./App.css";

import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <>

    <div className="app">

      <Routes>
      
    
      <Route path="/" element={<Body />} />
        
      </Routes>

    </div>
    
    </>
  );
}

export default App;
