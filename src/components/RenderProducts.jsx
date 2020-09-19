import React from 'react';
import "../componentsCSS/RenderProduct.css";
import Product from "./Product.jsx"
function RenderProduct(){
  return(
<div>
<div className="DynamicProduct">
  <Product  title="The Lean startup"
  price="20"/>
  <Product  title="The Lean Startup: How Constant Innovation Creates Radically Successful"
  price="20"/>
  <Product  title="The Lean Startup: How Constant Innovation Creates Radically Successful"
  price="20"/>
  <Product  title="The Lean Startup: How Constant Innovation Creates Radically Successful"
  price="20"/>
  <Product  title="The Lean Startup: How Constant Innovation Creates Radically Successful"
  price="20"/>

</div>
</div>
);
}
export default RenderProduct;
