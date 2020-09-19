import React from 'react';
import "../componentsCSS/UserIF.css";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import DynamicBasket from "./DynamicBasket.jsx"

function UserIF(){
  return(
    <div className="userbox">
<div className="userIf">
<span className="first" >Hello User</span>
<span className="second" >Sign In</span>
</div>

<div className="userIf">
<span className="first" >return</span>
<span className="second" >&orders</span>
</div>


<div className="userIf">
<span className="first" >Your </span>
<span className="second" >Prime</span>
</div>

<div className="basketIcon">
<ShoppingBasketIcon className=""/>
<DynamicBasket/>
 </div>

    </div>
  )
}
export default UserIF;
