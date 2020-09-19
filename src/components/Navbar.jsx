import React from 'react';
import "../componentsCSS/Navbar.css";
import Search from "./Search";
import UserIF from "./UserIF";


function Navbar(){
  return(
<div id="navbar">
  <img className="navLogo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
<Search/>
<UserIF/>

</div>
);
}
export default Navbar;
