import React from 'react';
import "../componentsCSS/Product.css"
function Product(props){
return(<div className="productContainer" >
<div>
<p className="productTitle">{props.title}</p>
  <p><small>$</small><strong>{props.price}</strong></p>
</div>
<div className="productRating">
  <p>✨</p>
<p>✨</p>
<p>✨</p>
</div>
<div className="addToBasket">
  <img className="productImage"  src="Lean.jpg"/>
  <button>Add to Basket</button>

</div>

</div>

)
}
export default Product;
