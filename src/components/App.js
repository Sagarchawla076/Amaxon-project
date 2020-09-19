import React from 'react';
import Navbar from "./Navbar";
import HomeImage from "./HomeImage.jsx";
import "../App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import RenderProduct from "./RenderProducts.jsx"
function App() {
  return (
    <div >
      <Navbar/>
        <div className="mainContainer">
          <HomeImage/>
          <RenderProduct/>
        </div>
  </div>
);
}

export default App;
